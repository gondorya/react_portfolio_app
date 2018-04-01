import React from 'react';
import { connect } from 'react-redux';
import PhotoListItem from './PhotoListItem';
import selectPhoto from '../selectors/selectors';

const PhotoList = (props) => (
    <div>
        <h1>Photo List</h1>
        {props.photos.map((photo) => {
            return <PhotoListItem key={photo.id} {...photo}/>
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        photos: selectPhoto(state.photos, state.filters)
    };
}

export default connect(mapStateToProps)(PhotoList);
