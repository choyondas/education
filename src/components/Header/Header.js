import React from 'react';
import Mainnav from './Mainnav/Mainnav';
import Topnav from './Topnav/Topnav';

const Header = () => {
    return (
        <div>
            <Topnav />
            <Mainnav/>
        </div>
    );
};

export default Header;