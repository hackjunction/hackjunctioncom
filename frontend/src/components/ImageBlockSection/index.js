import React, { PureComponent } from 'react';
import './style.scss';

import { connect } from 'react-redux';
import { media as selectMedia } from '../../redux/staticmedia/selectors';
import { content as selectContent } from '../../redux/staticcontent/selectors';

import Image from '../Image';

class ImageBlockSection extends PureComponent {
    render() {
        const { image, imageAlt, title, subtitle, children } = this.props;
        return (
            <div className={'ImageBlockSection'}>
                <div className="ImageBlockSection--left">
                    <Image className="ImageBlockSection--image" image={image} alt={imageAlt} width={400} height={400} />
                </div>
                <div className="ImageBlockSection--right">
                    <div className="ImageBlockSection--right__top">
                        <h3 className="ImageBlockSection--title">{title}</h3>
                        <span className="ImageBlockSection--subtitle">{subtitle}</span>
                    </div>
                    <div className="ImageBlockSection--right__bottom">{children}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const media = selectMedia(state);
    const content = selectContent(state);
    const { imageKey, imageAltKey, titleKey, subtitleKey } = ownProps;

    return {
        image: media[imageKey] || ownProps.image,
        imageAlt: content[imageAltKey] || ownProps.imageAlt,
        title: content[titleKey] || ownProps.title,
        subtitle: content[subtitleKey] || ownProps.subtitle,
    }
}

export default connect(mapStateToProps)(ImageBlockSection);
