import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import '../css/sprawlSitesMap.css'; 
import sprawlSiteMapStyles from '../json/sprawlSiteMapStyles.json';
import axios from 'axios';
import {baseURL} from '../BaseURL';
import apikey from '../_config/_apikey';

class SprawlSitesMap extends Component {
	constructor(props) {
        super(props);

		this.state = {
			markerOptions: [],
			activeMarker: null,
    		selectedMarker: null,
		}
    }

	componentDidMount() {
        const {activeRegionId} = this.props;
        
		this.getActiveRegionMarkers(activeRegionId);
    }

	componentDidUpdate(prevProps) {
		if (this.props !== prevProps) {
			this.getActiveRegionMarkers(this.props.activeRegionId);
		}
	}

	getActiveRegionMarkers = (activeRegionId) => {
		axios.get(baseURL().concat(`/api/activeMarkers.php?activeRegionId=${activeRegionId}`))
            .then(response => {
                this.setState({
					markerOptions: response.data,
				});
            }) 
            .catch(error => console.log(error)
        );
	}

	onMarkerClick = (props, marker, e) => {
		this.setState({
			activeMarker: marker,
			selectedMarker: props,
		});
	};

	onMapClick = () => {
		this.setState({
			activeMarker: null,
			selectedMarker: null,
		})
	}

	render() {
		const mapStyles = {
			width: '100%',
			height: '400px',
		};
		const {activeRegionLat, activeRegionLong} = this.props;
		const { markerOptions, activeMarker, selectedMarker } = this.state;

		return (
			<div className="sprawlSitesMap">
				<Map
					google={this.props.google}
					zoom={15}
					disableDefaultUI={true}
					style={mapStyles}
					styles={sprawlSiteMapStyles}
					onClick={this.onMapClick}
					initialCenter={{
						lat: activeRegionLat, 
						lng: activeRegionLong, 
					}}
					center={{
						lat: activeRegionLat, 
						lng: activeRegionLong
					}}
					>
					{markerOptions.map((marker) => (
						<Marker
							key={marker.id}
							name={marker.name}
							text={marker.desc}
							photo={marker.image_url}
							position={{ lat: marker.lat, lng: marker.long}}
							onClick={this.onMarkerClick}
						/>
					))}

					<InfoWindow 
						marker={activeMarker}
						visible={activeMarker !== null}
					>
						<div>
							{selectedMarker && (
								<div className="markerContainer">
									<div className="markerTitle">{selectedMarker.name}</div>	
									<div className="markerLowerContainer">
										<img className="markerPhoto" src={selectedMarker.photo}/>
										<div className="markerText">
											{selectedMarker.text}
										</div>
									</div>
								</div>
							)}
						</div>
					</InfoWindow>
				</Map>
			</div>
		
		);
	}
}

export default GoogleApiWrapper({
  apiKey: apikey,
})(SprawlSitesMap);
