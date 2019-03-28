import React, { useState } from 'react';
import './style.scss';
import cloudinary from 'cloudinary-core';

import Image from '../Image';

const VIDEO_URL = 'https://res.cloudinary.com/hackjunction/video/upload/v1553772854/Video_from_2018_aftermovie_medium.mpd';
var cloud = cloudinary.Cloudinary.new({ cloud_name: "my-cloudname", secure: true });


const HeaderVideo = ({ videoSource, posterImage, alt, navTitle }) => {
    const [videoLoaded, setVideoLoaded] = useState(false);

    return (
        <div className="HeaderVideo">
            <video
                id="my-demo-player"
                autoPlay
                loop
                muted
                playsInline
                poster="https://staging.hackjunction.com/wp-content/uploads/2017/08/front.jpg"
                class="cld-video-player HeaderVideo--video">
            </video>
        </div>
    );
};

export default HeaderVideo;
