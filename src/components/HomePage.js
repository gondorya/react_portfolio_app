import React from 'react';
import PhotoList from './PhotoList';
import PhotoListFilters from './PhotoListFilters';

const HomePage = () => (
    <div>
        <PhotoListFilters />
        <PhotoList/>
    </div>
);

export default HomePage;