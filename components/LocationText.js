import React, {Component} from 'react';
import propTypes from 'prop-types';
import '../css/locationText.css';

class LocationText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ' ',
            textIndex: 0,
        };
    }

	componentDidMount() {
		this.startRevealing();
	}

	componentWillUnmount() {
		this.stopRevealing();
	}

	componentDidUpdate(prevProps) {
		this.stopRevealing();
		if (this.props.activeLocationText !== prevProps.activeLocationText) {
			this.setState({
				text: ' ',
				textIndex: 0,
			});
		}
		this.startRevealing();
	}

	startRevealing = () => {
		this.revealInterval = setInterval(this.addCharacter, 30);
	}

	stopRevealing = () => {
		clearInterval(this.revealInterval);
	}

	addCharacter = () => {
		const { text, textIndex } = this.state;
		const fullText = this.props.activeLocationText || 'empty';
		if (textIndex < fullText.length) {
			this.setState({
				text: text + fullText[textIndex],
				textIndex: textIndex + 1,
			});
		} else {
			this.stopRevealing();
		}
	}

    render() {
		const { text } = this.state;
        return (
            <div class="location-text-container">
                <div class ="location-text">
                    {text}
                </div>
            </div>
        );    
    }
}

LocationText.propTypes = {
    text: propTypes.string,
}

LocationText.defaultProps = {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis pulvinar leo, nec rutrum odio posuere eget. \
	Quisque vitae orci facilisis, aliquam mi non, luctus eros. Mauris mollis tortor dui, et elementum felis lacinia a. \
	Etiam sapien nibh, efficitur a condimentum in, consequat a nulla. Aliquam interdum a urna ut imperdiet. \
	Phasellus imperdiet cursus nisi at elementum. Suspendisse rutrum in leo vel viverra. \n \
	Nunc tempus turpis posuere, vehicula enim non, efficitur tellus. Suspendisse vel orci egestas, blandit magna nec, \
	consectetur dui. Suspendisse sit amet arcu arcu. Ut imperdiet odio eu tortor interdum finibus. Donec porta orci justo, \
	nec dapibus ex vestibulum ut. Donec vel neque augue. Donec tristique consequat accumsan. Vivamus non mollis tortor. Aenean id diam eros. \
	Sed finibus augue felis, at dignissim quam gravida nec. Pellentesque consequat nisi in lorem pulvinar rutrum imperdiet vel dui. \
	Ut id dictum mi. Integer laoreet magna est, id maximus erat scelerisque vel.",
};

export default LocationText;