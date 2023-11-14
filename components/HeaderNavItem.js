import React, {Component} from 'react';

import '../css/headerNavItem.css';

class HeaderNavItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDropdownOpen: false,
        };
    }

    handleMouseEnter = () => {
        this.setState({ isDropdownOpen: true });
    };
    
    handleMouseLeave = () => {
        this.setState({ isDropdownOpen: false });
    };

    handleOptionSelect = (game_id, region_id) => {
        this.props.updateActiveGameId(game_id, region_id);
        this.setState({ isDropdownOpen: false });
    };

    render() {
        const { isDropdownOpen } = this.state;
        const {options} = this.props;

        return (
            <div class="headerNavItem"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}>
                <div className={`dropdown-container ${isDropdownOpen ? 'open' : ''}`}>
                    <div className="selected-option" onClick={this.handleMouseEnter}>
                        Sprawl Sites
                    </div>
                    {isDropdownOpen && (
                        <ul className="options-list">
                            {options.map((option) => (
                            <li
                                key={option.game_id}
                                onClick={() => this.handleOptionSelect(option.game_id, option.initial_region_id)}
                                className="dropdown-option"
                            >
                                {option.label}
                            </li>
                            ))}
                        </ul>
                    )}
                 </div>
            </div>
        );    
    }
}

export default HeaderNavItem;