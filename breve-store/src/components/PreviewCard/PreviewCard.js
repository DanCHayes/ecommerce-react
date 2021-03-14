import React from 'react';

import './PreviewCard.scss';

const PreviewCard = ({name, imageUrl, price}) => {
    return (
        <div className="preview-card-container">
            <div className="preview-card-wrapper"
            style={{backgroundImage: `url(${imageUrl})`}}>
                <div className="action-popup">
                    <span>Add To Basket</span>
                </div>
            </div>
            <span>{name}</span>
        </div>
    );
}

export default PreviewCard;