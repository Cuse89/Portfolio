import React from 'react';
import { NavLink } from 'react-router-dom';

// Link and NavLink (from React Router api) dont do a full page refresh when navigating to a new page, taking advantage of React
// NavLink is good for navigation menus, can style the font weight, color etc
const Header = () => (
    <header>
    <NavLink to = "/" className = "nav" activeClassName = "is-active" exact = {true}><h2>MARCUS GUTHRIE</h2>
    </NavLink>
        <div className = "navs">
            <NavLink to = "/" className = "nav" activeClassName = "is-active" exact = {true}>HOME</NavLink>
            <NavLink to = "/portfolio" className = "nav" activeClassName = "is-active" exact = {true}>PORTFOLIO</NavLink>
            <NavLink to = "/contact" className = "nav" activeClassName = "is-active">CONTACT</NavLink>
        </div>
    </header>
);

export default Header;