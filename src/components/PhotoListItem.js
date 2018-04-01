import React from 'react';

const imageBox = (url) => (
    {backgroundImage: `url(${url})`}
)

const PhotoListItem = ({ description, imgUrl, title, createdAt }) => (
    <div className="portfolioItem">
        <div className="portfolioItem__image" style={imageBox(imgUrl)}></div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{createdAt}</p>
    </div>
);

export default PhotoListItem;
