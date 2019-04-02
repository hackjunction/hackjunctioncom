import React, { useState, useEffect } from 'react';
import './style.scss';

import {
    isMobileOnly
} from "react-device-detect";

import config from '../../services/config';

const HeaderVideo = React.memo(() => {
    const [videoLoaded, setVideoLoaded] = useState(false);

    const mobileVid = require('../../assets/videos/aftermovie_40.mp4');
    const fullVid = require('../../assets/videos/aftermovie_80.mp4');

    return (
        <div className={`HeaderVideo ${videoLoaded ? 'HeaderVideo-visible' : ''}`} >
            <video
                autoPlay
                loop
                muted
                playsInline
                poster="https://staging.hackjunction.com/wp-content/uploads/2017/08/front.jpg"
                className={'HeaderVideo--video'}
                onPlay={() => setVideoLoaded(true)}
            >
                <source
                    src={isMobileOnly ? mobileVid : fullVid}
                    type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;"
                />
            </video>
            <div className="HeaderVideo--logo-wrapper">
                <img className="HeaderVideo--logo" src={require('../../assets/logos/text_white.png')} alt="junction-wordmark" />
            </div>
        </div >
    );
});

export default HeaderVideo;
