import './ImageList.css';
import React from 'react';

const ImageList = props => {
    const images = props.images.map(({description, id, urls}) => {
        return <img alt={description} src={urls.regular} key={id}/>
    });

    return <div className="image-list">{images}</div>
}

export default ImageList; 