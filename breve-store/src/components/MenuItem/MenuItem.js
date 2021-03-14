import React from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItem.scss';

const MenuItem = ({title, size, imageUrl, linkUrl, history, match}) => {
    return (
        <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div 
                className="background-image"
                style={{backgroundImage:`url(${imageUrl})`}}
            />

            <div className="content">
                <h2 className="title">{title}</h2>
                <p className="subtitle">shop now</p>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);