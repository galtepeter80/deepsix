import React, {Component} from 'react';
import axios from 'axios';
import {baseURL} from '../BaseURL';

import HeaderNavItem from './HeaderNavItem';
import '../css/headerNav.css';
import '../css/headerNavItem.css';

class HeaderNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: this.props.userId || 1,
            games: [],
        }
    }

    componentDidMount() {
        const {userId} = this.state;

        axios.get(baseURL().concat(`/api/headerNav.php?userId=${userId}`))
            .then(response => {
                this.setState({games: response.data});
            })
            .catch(error => console.log(error)
        );
    }

    updatePage = (page) => {
        this.props.updatePage(page);
    }

    render() {
        const { games } = this.state;    

        return (
            <div class="headerNav">
                <div 
                    class="headerNavItem" 
                    onClick={() => this.updatePage('about')}
                >
                    About Me
                </div>
                <div
                    onClick={() => this.updatePage('sprawl')}
                    >
                <HeaderNavItem 
                    updateActiveGameId={this.props.updateActiveGameId}
                    options={games} 
                />
                </div>
                
            </div>
        );    
    }
}

export default HeaderNav;