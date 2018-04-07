import React from 'react';
import { connect } from 'react-redux';
import PhotoForm from './PhotoForm';
import { addPhoto } from '../actions/photos';

const AddPhotoPage = (props) => (
    <div className="container">
        <h2>Add new photo</h2>
        <PhotoForm 
            onSubmit={(photo) => {
                props.dispatch(addPhoto(photo));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddPhotoPage);
