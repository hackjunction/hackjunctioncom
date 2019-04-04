import React, { PureComponent } from 'react';
import './style.scss';

import { connect } from 'react-redux';

import KEYS from '../../redux/staticcontent/keys';
import MEDIA_KEYS from '../../redux/staticmedia/keys';

import HeaderImage from '../../components/HeaderImage';
import BasicHeader from '../../components/HeaderImage/BasicHeader';
import BlockSection from '../../components/BlockSection';
import ImageBlockSection from '../../components/ImageBlockSection';
import Divider from '../../components/Divider';
import Markdown from '../../components/Markdown';
import NewsLetterForm from '../../components/NewsLetterForm';

import Page from '../PageHOC';

import {
    volunteerTestimonials,
} from '../../redux/testimonials/selectors';

class VolunteersPage extends PureComponent {
    render() {
        const { testimonials } = this.props;
        const testimonial = testimonials.length > 0 ? testimonials[0] : null;

        return (
            <Page className="VolunteersPage" pageTitle="For volunteers" metaDescKey={KEYS.volunteersPageSubtitle}>
                <HeaderImage
                    imageKey={MEDIA_KEYS.volunteerPageHeaderImage}
                    alt="Header image"
                >
                    <BasicHeader titleKey={KEYS.volunteersPageTitle} bodyKey={KEYS.volunteersPageSubtitle} />
                </HeaderImage>
                {testimonial ? (
                    <React.Fragment>
                        <ImageBlockSection
                            image={testimonial.image}
                            imageAlt={testimonial.name}
                            title={testimonial.name}
                            subtitle={testimonial.subtitle}
                        >
                            <Markdown source={testimonial.quote} />
                        </ImageBlockSection>
                        <Divider lg />
                    </React.Fragment>
                ) : null}
                <BlockSection titleKey={KEYS.volunteeringTitle} subtitleKey={KEYS.volunteeringSubtitle}>
                    <Markdown sourceKey={KEYS.volunteeringBody} />
                </BlockSection>
                <Divider lg />
                <NewsLetterForm />
                <Divider lg />
            </Page>
        )
    }
}

const mapStateToProps = state => ({
    testimonials: volunteerTestimonials(state),
});

export default connect(
    mapStateToProps
)(VolunteersPage);
