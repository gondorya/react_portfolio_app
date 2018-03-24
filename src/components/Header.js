import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <h1>My Portfolio</h1>
        <nav>
            <ul>
                <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
                <li><NavLink to="/portfolio" activeClassName="is-active">Portfolio</NavLink></li>
                <li><NavLink to="/contact" activeClassName="is-active">Contact</NavLink></li>
            </ul>
        </nav>
    </header>
);

export default Header;
