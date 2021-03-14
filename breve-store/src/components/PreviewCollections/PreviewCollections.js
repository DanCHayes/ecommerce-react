import React from 'react';
import Preview from '../Preview/Preview';

import './PreviewCollections.scss';

const PreviewCollections = ({shopData}) => {
    return (
        <div className="preview-collections-container">
            <div className="preview-container">
            {
                shopData !== undefined && shopData.map(({id, ...collectionProps}) => {
                return <Preview key={id} {...collectionProps} />
                
            })}
            </div>
        </div>
    );
}

export default PreviewCollections;