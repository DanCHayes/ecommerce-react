import React from 'react';

import './MenuItem.scss';

const handleClick = () => {
    //use react routing to handle new route?
}

const MenuItem = ({item}) => {
    return (
        <div className={`menu-item ${item.size}`} onClick={handleClick}>
            <div 
                className="background-image"
                style={{backgroundImage:`url(${item.imageUrl})`}}
            />

            <div className="content">
                <h2 className="title">{item.title}</h2>
                <p className="subtitle">shop now</p>
            </div>
        </div>
    )
}

export default MenuItem;