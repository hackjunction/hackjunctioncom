import React, { PureComponent } from "react";
import "./style.scss";

import { connect } from "react-redux";
import Image from "../Image";
import { media as selectMedia } from "../../redux/staticmedia/selectors";

class SectionImage extends PureComponent {
    render() {
        const { image, alt, children } = this.props;
        return (
            <div className={`SectionImage`}>
                <Image
                    image={image}
                    height={512}
                    alt={alt}
                    className="SectionImage--img"
                />
                <div className="SectionImage--content">{children}</div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const media = selectMedia(state);

    return {
        image: media[ownProps.imageKey] || ownProps.image,
    };
};

export default connect(mapStateToProps)(SectionImage);
