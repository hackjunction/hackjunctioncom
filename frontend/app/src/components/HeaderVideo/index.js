import React, { PureComponent } from 'react';
import MediaQuery from 'react-responsive';

import './style.scss';
import LinkButton from '../LinkButton/';
import Divider from '../Divider';

const Video = ({ onLoad }) => {
    return (
        <video autoPlay loop muted playsInline className={'HeaderVideo--video'} onPlay={onLoad}>
            <MediaQuery maxWidth={600}>
                <source type="video/webm" src={require('../../assets/videos/aftermovie_noaudio_600x380.webm')} />
                <source type="video/mp4" src={require('../../assets/videos/aftermovie_noaudio_600x380.mp4')} />
            </MediaQuery>
            <MediaQuery minWidth={601}>
                <MediaQuery maxWidth={900}>
                    <source type="video/webm" src={require('../../assets/videos/aftermovie_noaudio_900x600.webm')} />
                    <source type="video/mp4" src={require('../../assets/videos/aftermovie_noaudio_900x600.mp4')} />
                </MediaQuery>
            </MediaQuery>
            <MediaQuery minWidth={901}>
                <source type="video/webm" src={require('../../assets/videos/aftermovie_noaudio_1920x900.webm')} />
                <source type="video/mp4" src={require('../../assets/videos/aftermovie_noaudio_1920x900.mp4')} />
            </MediaQuery>
        </video>
    );
};

class HeaderVideo extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        };

        this.setLoaded = this.setLoaded.bind(this);
    }

    setLoaded() {
        this.setState({
            loaded: true
        });
    }

    render() {
        const { loaded } = this.state;
        return (
            <div className={`HeaderVideo ${loaded ? 'HeaderVideo-visible' : ''}`}>
                <Video onLoad={this.setLoaded} />
                <div className="HeaderVideo--logo-wrapper">
                    <img
                        className="HeaderVideo--logo"
                        src={require('../../assets/logos/text_white.png')}
                        alt="junction-wordmark"
                    />
                    <div className="HeaderVideo--buttons">
                        <LinkButton to="https://2019.hackjunction.com" isExternal text="Junction 2019 website" accent />
                        <Divider />
                        <LinkButton to="/calendar" text="Junction event calendar" />
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderVideo;
