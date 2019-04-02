import React, { useState } from 'react';
import './style.scss';

import Image from '../Image';

const HeaderImage = ({ image, alt, children }) => {
    return (
        <div className={`HeaderImage`}>
            <Image image={image} width={1920} height={900} alt={alt} className="HeaderImage--img" />
            <div className="HeaderImage--content">
                {children}
            </div>
        </div>
    );
};

export default HeaderImage;
