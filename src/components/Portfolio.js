import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
    <div>
        <h2>Portfolio</h2>
        <Link to="/portfolio/1">First Item</Link>
        <Link to="/portfolio/2">Second Item</Link>
        <Link to="/portfolio/3">Three Item</Link>
    </div>
);

export default Portfolio;