import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>TOP PRESIDENTS SUMMIT</h1>
            <h3>Presidents Summit brings together top executives from more than 1000 large- and mid-size companies across Scandinavia</h3>
            <h1>Total Budget: <span className="budget">2950 Million</span></h1>
        </div>
    );
};

export default Header;