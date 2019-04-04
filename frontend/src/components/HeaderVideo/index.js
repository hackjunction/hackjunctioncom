import React, { PureComponent } from 'react';
import './style.scss';

import {
    isMobileOnly
} from "react-device-detect";

import config from '../../services/config';

const Video = React.memo(({ onLoad }) => {
    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            className={'HeaderVideo--video'}
            onPlay={onLoad}
        >
            <source
                src={require('../../assets/videos/mainevent2018aftermovieedit.mp4')}
            />
        </video>
    )
});

class HeaderVideo extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        }

        this.setLoaded = this.setLoaded.bind(this);
    }

    setLoaded() {
        this.setState({
            loaded: true
        })
    }

    render() {
        const { loaded } = this.state;
        return (
            <div className={`HeaderVideo ${loaded ? 'HeaderVideo-visible' : ''}`} >
                <Video onLoad={this.setLoaded} />
                <div className="HeaderVideo--logo-wrapper">
                    <img className="HeaderVideo--logo" src={require('../../assets/logos/text_white.png')} alt="junction-wordmark" />
                </div>
            </div>
        )
    }
}

export default HeaderVideo;
