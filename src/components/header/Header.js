import React from 'react'; 
import './Header.css';
import TabTab from '../Tabs/Tabs';

function Header() {
    return (
        <div className="header">
            <p>Just-Do-It</p>
            <TabTab />
        </div>
    )
}

export default Header;