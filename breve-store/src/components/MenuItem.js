import React from 'react';

const MenuItem = ({item}) => {
    return (
        <div className="menu-item">
        <div className="content">
            <h2 className="title">{item.name}</h2>
            <p className="subtitle">{item.description}</p>
        </div>
        </div>
    )
}

export default MenuItem;