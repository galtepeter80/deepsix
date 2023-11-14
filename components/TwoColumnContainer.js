import React, {Component} from 'react';
import SelectorButton from './SelectorButton';
import SprawlSitesMap from './SprawlSitesMap';
import TitleBar from './TitleBar';
import LocationText from './LocationText';
import Notes from './Notes';
import '../css/twoColumnContainer.css'; 
import hline from '../img/hline.png';
import axios from 'axios';
import {baseURL} from '../BaseURL';

class TwoColumnContainer extends Component {
	constructor(props) {
        super(props);

        this.state = {
			activeGameTitle: '',
			activeRegionTitle: '',
			activeRegionLat: null,
			activeRegionLong: null,
			activeLocationText: '',
			regionOptions: [],
			notes: [],
        }
    }

	componentDidMount() {
        const {activeGameId, activeRegionId} = this.props;

		this.getActiveGameRegionOptions(activeGameId);
		this.getActiveGameRegionData(activeGameId, activeRegionId);
		this.getActiveRegionNotes(activeRegionId);
    }

	componentDidUpdate(prevProps) {
		if (this.props !== prevProps) {
			this.getActiveGameRegionOptions(this.props.activeGameId);
			this.getActiveGameRegionData(
				this.props.activeGameId,
				this.props.activeRegionId
			);
			this.getActiveRegionNotes(this.props.activeRegionId);
		}
	}

	getActiveGameRegionData = (activeGameId, activeRegionId) => {
		axios.get(baseURL().concat(`/api/activeRegionData.php?activeGameId=${activeGameId}&activeRegionId=${activeRegionId}`))
            .then(response => {
                this.setState({
					activeGameTitle: response.data.activeGameTitle,
					activeRegionTitle: response.data.activeRegionTitle,
					activeRegionLat: response.data.activeRegionLat,
					activeRegionLong: response.data.activeRegionLong,
					activeLocationText: response.data.activeLocationText,
				});
            }) 
            .catch(error => console.log(error)
        );
	}

	getActiveGameRegionOptions = (activeGameId) => {
		axios.get(baseURL().concat(`/api/activeRegionOptions.php?activeGameId=${activeGameId}`))
            .then(response => {
                this.setState({
					regionOptions: response.data,
				});
            }) 
            .catch(error => console.log(error)
        );
	}

	getActiveRegionNotes = (activeRegionId) => {
		axios.get(baseURL().concat(`/api/activeRegionNotes.php?activeRegionId=${activeRegionId}`))
            .then(response => {
                this.setState({
					notes: response.data,
				});
            }) 
            .catch(error => console.log(error)
        );
	}

    render() {
		const { notes } = this.state;
		
		return (
			<div className="two-column-page">
				<div className="left-column">
					<h2>Regions</h2>
					<img src={hline} className="hline"></img>
					<SelectorButton
						regionOptions={this.state.regionOptions}
						updateActiveRegionId={this.props.updateActiveRegionId}
						selectedButton={this.props.activeRegionId}
					/>
			</div>
				<div className="right-column">
					<div className="inner-container-right">
						<TitleBar 
							key={0}
							style={'gameTitle'}
							label={this.state.activeGameTitle}
						/>
						<SprawlSitesMap 
							activeRegionLat={this.state.activeRegionLat}
							activeRegionLong={this.state.activeRegionLong}
							activeRegionId={this.props.activeRegionId}
						/> 
						<TitleBar 
							key={1}
							style={'reg'}
							label={this.state.activeRegionTitle}
						/>
						<LocationText
							activeLocationText={this.state.activeLocationText}
						/>
						<TitleBar 
							key={2}
							style={'reg'}
							label="Notes" 
						/>
						<Notes
							notes={notes}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default TwoColumnContainer;
