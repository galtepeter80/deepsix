import React, { Component } from 'react';
import '../css/selectorButton.css'; 

class SelectorButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedButton: null, 
      regionOptions: [],
    };
  }

  handleButtonClick = (activeRegionId) => {
    this.setState({ selectedButton: activeRegionId });
    this.props.updateActiveRegionId(activeRegionId);
  };

  render() {
    const {regionOptions, selectedButton} = this.props;

    return (
      <div className="selectable-buttons">
        {regionOptions.map((regionOption) => (
          <button
            key={regionOption.activeRegionId}
            className={`button ${selectedButton === regionOption.activeRegionId ? 'selected' : ''}`}
            onClick={() => this.handleButtonClick(regionOption.activeRegionId)}
          >
            {regionOption.activeRegionTitle}
          </button>
        ))}
      </div>
    );
  }
}

export default SelectorButton;
