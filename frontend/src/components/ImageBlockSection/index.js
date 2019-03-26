import React from 'react';
import './style.scss';

import Image from '../Image';

const ImageBlockSection = ({ image, imageAlt, publicId, title, subtitle, children, offset }) => {
    return (
        <div className={`ImageBlockSection ImageBlockSection-offset-${offset}`}>
            <div className="ImageBlockSection--left">
                <Image className="ImageBlockSection--image" image={image} alt={imageAlt} width={400} height={400} />
            </div>
            <div className="ImageBlockSection--right">
                <div className="ImageBlockSection--right__top">
                    <h3 className="ImageBlockSection--title">{title}</h3>
                    <span className="ImageBlockSection--subtitle">{subtitle}</span>
                </div>
                <div className="ImageBlockSection--right__bottom">{children}</div>
            </div>
        </div>
    );
};

export default ImageBlockSection;
