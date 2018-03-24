import React from 'react';

const PortfolioItem = (props) => {
    console.log(props);
    return (
        <div>
            Editing the exoense with id of {props.match.params.id}
        </div>
    );
};

export default PortfolioItem;