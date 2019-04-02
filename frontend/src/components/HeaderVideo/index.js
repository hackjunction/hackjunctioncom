import React, { useState, useEffect } from 'react';
import './style.scss';
import 'cloudinary-video-player';
import '../../../node_modules/cloudinary-video-player/dist/cld-video-player.min.css';
import cloudinary from 'cloudinary-core';

import config from '../../services/config';

const cloud = cloudinary.Cloudinary.new({ cloud_name: config.CLOUDINARY_CLOUD_NAME, secure: true });


const HeaderVideo = ({ videoSource, posterImage, alt, navTitle }) => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    let player = null;

    useEffect(() => {
        player = cloud.videoPlayer('header-video', {
            loop: true,
            controls: false,
        })
        player.source('mainevent2018aftermovieedit', {
            sourceTypes: ['mp4'],
            sourceTransformation: { 'mp4': { quality: 75 } }
        })
    }, [])

    return (
        <div className={`HeaderVideo ${videoLoaded ? 'HeaderVideo-visible' : ''}`} >
            <video
                id="header-video"
                onPlay={() => setVideoLoaded(true)}
                autoPlay
                muted
                playsInline
                preload="auto"
                className={`cld-video-player HeaderVideo--video`}
            >
            </video>
            <div className="HeaderVideo--logo-wrapper">
                <img className="HeaderVideo--logo" src={require('../../assets/logos/text_white.png')} alt="junction-wordmark" />
            </div>
        </div >
    );
};

export default HeaderVideo;
