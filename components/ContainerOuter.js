import React, {Component} from 'react';

import HeaderNav from './HeaderNav';
import Footer from './Footer';
import TwoColumnContainer from './TwoColumnContainer';
import About from './About';

import '../css/containerOuter.css';

class ContainerOuter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeGameId: 1,
            activeRegionId: 1,
            selectedPage: 'sprawl',
        }
    }

    updatePage = (selectedPage) => {
        this.setState({
            selectedPage: selectedPage,
        });
    }

    updateActiveGameId = (gameId, region_id) => {
        this.setState({ 
            activeGameId: gameId,
            activeRegionId: region_id, 
        });
    };

    updateActiveRegionId = (regionId) => {
        this.setState({ activeRegionId: regionId });
    };

    render() {
        const { selectedPage } = this.state;

        return (
            <div class="containerOuter">
                <HeaderNav 
                    updateActiveGameId={this.updateActiveGameId}
                    updatePage={this.updatePage}
                />
                {(selectedPage === 'sprawl') && (
                    <TwoColumnContainer 
                        updateActiveRegionId={this.updateActiveRegionId}
                        activeGameId={this.state.activeGameId}
                        activeRegionId={this.state.activeRegionId}
                    />
                )}
                {(selectedPage === 'about') && (
                    <About />
                )}
                
                <Footer />
            </div>
        );    
    }
}

export default ContainerOuter;