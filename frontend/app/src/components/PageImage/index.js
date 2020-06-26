import React, { PureComponent } from "react";
import "./style.scss";

import { connect } from "react-redux";
import Image from "../Image";
import { media as selectMedia } from "../../redux/staticmedia/selectors";

class PageImage extends PureComponent {
    render() {
        const { image, alt } = this.props;
        // TODO: Change this so that it works with cloudinary, using Image component
        return (

                <img src={image} alt={alt} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const media = selectMedia(state);

    return {
        image: media[ownProps.imageKey] || ownProps.image,
    };
};

export default connect(mapStateToProps)(PageImage);
