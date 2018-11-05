import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header className="tabs">
        <ul>
            <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
            <li><NavLink to="/get" activeClassName="is-active">GET</NavLink></li>
            <li><NavLink to="/post" activeClassName="is-active">POST</NavLink></li>
            <li><NavLink to="/contact" activeClassName="is-active">Contact</NavLink></li>
        </ul>
    </header>
);

export default Header;