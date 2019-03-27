import React, { useState } from 'react';
import './style.scss';

import Image from '../Image';

const HeaderImage = ({ image, alt, mainTitle, bodyText }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    function handleLoad() {
        setImageLoaded(true);
    }

    return (
        <div className={`HeaderImage ${imageLoaded ? 'HeaderImage-loaded' : ''}`}>
            <Image image={image} width={1920} height={900} alt={alt} className="HeaderImage--img" onLoad={handleLoad} />
            <div className="HeaderImage--main-content">
                <h2 className="HeaderImage--main-content__title">{mainTitle}</h2>
                <p className="HeaderImage--main-content__body">{bodyText}</p>
            </div>
        </div>
    );
};

export default HeaderImage;
