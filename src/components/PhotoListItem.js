import React from 'react';
import { connect } from 'react-redux';
import { removePhoto } from '../actions/photos';

const imageBox = (url) => (
    {backgroundImage: `url(${url})`}
)

const PhotoListItem = ({ dispatch, id, description, imgUrl, title, createdAt }) => (
    <div className="portfolioItem">
        <div className="portfolioItem__image" style={imageBox(imgUrl)}></div>
        <div className="portfolioItem__details">
            <p className="portfolioItem__date">{createdAt}</p>
            <button
                className="button button--remove"
                onClick={() => {
                         dispatch(removePhoto({id}))
            }}>Remove Photo</button>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

export default connect()(PhotoListItem);
