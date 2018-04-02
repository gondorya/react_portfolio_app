import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PhotoListItem from './PhotoListItem';
import selectPhoto from '../selectors/selectors';

const PhotoList = (props) => (
    <div className="container">
        <h1>Photo List</h1>
        <Link to="/add_photo">Add Photo</Link>
        <div className="row">
            {props.photos.map((photo) => {
                return <PhotoListItem key={photo.id} {...photo}/>
            })}
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        photos: selectPhoto(state.photos, state.filters)
    };
}

export default connect(mapStateToProps)(PhotoList);
