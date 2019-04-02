import React, { useEffect } from 'react';
import './style.scss';

import { connect } from 'react-redux';

import * as StaticContentSelectors from '../../redux/static/selectors';
import * as ContentSelectors from '../../redux/content/selectors';
import * as ContentActions from '../../redux/content/actions';
import * as MediaSelectors from '../../redux/media/selectors';
import KEYS from '../../redux/static/keys';
import MEDIA_KEYS from '../../redux/media/keys';

import HeaderImage from '../../components/HeaderImage';
import BasicHeader from '../../components/HeaderImage/BasicHeader';
import BlockSection from '../../components/BlockSection';
import ImageBlockSection from '../../components/ImageBlockSection';
import Divider from '../../components/Divider';
import Markdown from '../../components/Markdown';
import NewsLetterForm from '../../components/NewsLetterForm';

import Page from '../PageHOC';
import { objectWithKeys } from '../../redux/static/helpers';
import { mediaByKey } from '../../redux/media/helpers';

const CONTENT_KEYS = [
    KEYS.volunteersPageTitle,
    KEYS.volunteersPageSubtitle,
    KEYS.volunteeringTitle,
    KEYS.volunteeringSubtitle,
    KEYS.volunteeringBody,
];

const VolunteersPage = ({ allContent, allMedia, testimonials, testimonialsShouldUpdate, updateTestimonials }) => {
    const content = objectWithKeys(allContent, CONTENT_KEYS);
    const headerImage = mediaByKey(allMedia, MEDIA_KEYS.volunteerPageHeaderImage);
    const testimonial = testimonials.length > 0 ? testimonials[0] : null;

    useEffect(() => {
        if (testimonialsShouldUpdate) {
            updateTestimonials();
        }
    }, []);

    return (
        <Page className="VolunteersPage" pageTitle="For volunteers" metaDesc={content.volunteersPageSubtitle}>
            <HeaderImage
                image={headerImage}
                alt="Header image"
            >
                <BasicHeader title={content.volunteersPageTitle} body={content.volunteersPageSubtitle} />
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
            <BlockSection title={content.volunteeringTitle} subtitle={content.volunteeringSubtitle}>
                <Markdown source={content.volunteeringBody} />
            </BlockSection>
            <Divider lg />
            <NewsLetterForm />
            <Divider lg />
        </Page>
    );
};

const mapStateToProps = state => ({
    allContent: StaticContentSelectors.content(state),
    allMedia: MediaSelectors.media(state),
    testimonials: ContentSelectors.volunteerTestimonials(state),
    testimonialsShouldUpdate: ContentSelectors.testimonialsShouldUpdate(state)
});

const mapDispatchToProps = dispatch => ({
    updateTestimonials: () => dispatch(ContentActions.updateTestimonials())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VolunteersPage);
