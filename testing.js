import React, {Component} from 'react';
import axios from 'axios';
import {baseURL} from './BaseURL';

class Testing extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: 'taco'
        };
    }

    componentDidMount() {

        axios.get(baseURL().concat('/api/testing.php'))
            .then(response => {
                this.setState({name: response.data.first_name})
            })
            .catch(error => console.log(error));

    }

    render() {
        
        return (
            <div>hello, {this.state.name}</div>
        );    
    }
}

export default Testing;