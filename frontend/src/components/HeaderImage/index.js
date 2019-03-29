import React, { useState } from 'react';
import './style.scss';

import Image from '../Image';

const HeaderImage = ({ image, alt, children }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    function handleLoad() {
        setImageLoaded(true);
    }

    return (
        <div className={`HeaderImage ${imageLoaded ? 'HeaderImage-loaded' : ''}`}>
            <Image image={image} width={1920} height={900} alt={alt} className="HeaderImage--img" onLoad={handleLoad} />
            <div className="HeaderImage--content">
                {children}
            </div>
        </div>
    );
};

export default HeaderImage;
