import React from 'react';
import './style.scss';

import { Link } from 'react-router-dom';
import Image from '../Image';

const ImageLink = ({ image, imageAlt, linkTo, linkText }) => {
    return (
        <div className="ImageLink">
            <Image className="ImageLink--image" image={image} alt={imageAlt} width={600} height={200} crop={'fill'} />
            <Link className="ImageLink--link" to={linkTo}>
                <span className="ImageLink--link__text">{linkText}</span>
            </Link>
        </div>
    );
};

export default ImageLink;
