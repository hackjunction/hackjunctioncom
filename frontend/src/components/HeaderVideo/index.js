import React, { useState } from 'react';
import './style.scss';

import Image from '../Image';
import Youtube from 'react-youtube';

const HeaderVideo = ({ videoSource, posterImage, alt, navTitle }) => {
    const [videoLoaded, setVideoLoaded] = useState(false);

    return (
        <div className="HeaderVideo">
            <video
                className="HeaderVideo--video"
                autoPlay
                loop
                muted
                playsInline
                poster="https://staging.hackjunction.com/wp-content/uploads/2017/08/front.jpg"
            >
                <source
                    src="https://staging.hackjunction.com/wp-content/uploads/2018/06/Junction_brandmovie.mp4"
                    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                />
            </video>
        </div>
    );
};

export default HeaderVideo;
