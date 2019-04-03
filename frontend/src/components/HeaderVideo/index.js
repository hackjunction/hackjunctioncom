import React, { useState, useEffect } from 'react';
import './style.scss';

import {
    isMobileOnly
} from "react-device-detect";

import config from '../../services/config';

const HeaderVideo = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);

    return (
        <div className={`HeaderVideo ${videoLoaded ? 'HeaderVideo-visible' : ''}`} >
            <video
                autoPlay
                loop
                muted
                playsInline
                className={'HeaderVideo--video'}
                onPlay={() => setVideoLoaded(true)}
            >
                <source
                    src={'https://res.cloudinary.com/hackjunction/video/upload/f_mp4,' + (isMobileOnly ? 'q_50' : 'q_80') + '/v1553772854/mainevent2018aftermovieedit.mp4'}
                />
            </video>
            <div className="HeaderVideo--logo-wrapper">
                <img className="HeaderVideo--logo" src={require('../../assets/logos/text_white.png')} alt="junction-wordmark" />
            </div>
        </div >
    );
};

export default HeaderVideo;
