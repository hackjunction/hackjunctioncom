import React, { PureComponent } from "react";
import MediaQuery from "react-responsive";

import "./style.scss";
import LinkButton from "../LinkButton/";
import Divider from "../Divider";

const Video = ({ onLoad }) => {
    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            className={"HeaderVideo--video"}
            onPlay={onLoad}
        >
            <MediaQuery maxWidth={600}>
                <source
                    type="video/mp4"
                    src={require("../../assets/videos/J2020C_Animation_Main.mp4")}
                />
            </MediaQuery>
            <MediaQuery minWidth={601}>
                <MediaQuery maxWidth={900}>
                    <source
                        type="video/mp4"
                        src={require("../../assets/videos/J2020C_Animation_Main.mp4")}
                    />
                </MediaQuery>
            </MediaQuery>
            <MediaQuery minWidth={901}>
                <source
                    type="video/mp4"
                    src={require("../../assets/videos/J2020C_Animation_Main.mp4")}
                />
            </MediaQuery>
        </video>
    );
};

class HeaderVideo extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
        };

        this.setLoaded = this.setLoaded.bind(this);
    }

    setLoaded() {
        this.setState({
            loaded: true,
        });
    }

    render() {
        const { loaded } = this.state;
        return (
            <div
                className={`HeaderVideo ${loaded ? "HeaderVideo-visible" : ""}`}
            >
                <Video onLoad={this.setLoaded} />
            </div>
        );
    }
}

export default HeaderVideo;
