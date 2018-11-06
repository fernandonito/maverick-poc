import React from 'react';
import {NavLink} from 'react-router-dom';
import { Redirect } from 'react-router';

const json = localStorage.getItem('token');
const logged = JSON.parse(json);

const Header = () => {
    
    if(!logged){
        return <Redirect to='/' />
    }else{
        return (
            <header className="tabs">
                <ul>
                    <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
                    <li><NavLink to="/get" activeClassName="is-active">GET</NavLink></li>
                    <li><NavLink to="/post" activeClassName="is-active">POST</NavLink></li>
                    <li><NavLink to="/search" activeClassName="is-active">SEARCH</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="is-active">Contact</NavLink></li>
                </ul>
            </header>
        );
    }
};

export default Header;