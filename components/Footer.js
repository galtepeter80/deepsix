import React, {Component} from 'react';

import '../css/footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        //const headerNavItems = this.props.headerNavProps.headerNavItems;

        return (
            <div class="footer">
                Copyright 2023 Greg Altepeter
                {/* {headerNavItems.map((headerNavItem) => (
                    <HeaderNavItem key={headerNavItem.id} label={headerNavItem.label} />
                ))} */}
            </div>
        );    
    }
}

export default Footer;