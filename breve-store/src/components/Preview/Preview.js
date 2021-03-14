import React from 'react';
import PreviewCard from '../PreviewCard/PreviewCard';

import './Preview.scss';


const Preview = ({title, items}) => {
    return (
        <div className="preview-container">
            <div className="title">
                <h2>{title}</h2>
            </div>
            {items
                .filter((item, index) => index < 4)
                .map(({id, ...itemProps}) => {
                return <PreviewCard key={id} {...itemProps} />
            })}
        </div>
    );
}

export default Preview;