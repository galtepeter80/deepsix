import React, {Component} from 'react';
import '../css/titlebar.css';

class TitleBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { style } = this.props;

        return (
            <div class={`title-bar ${style}`}>
                {this.props.label}
            </div>
        );    
    }
}

export default TitleBar;