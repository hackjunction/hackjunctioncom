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
import ImageBlockSection from '../../components/ImageBlockSection';
import BlockSection from '../../components/BlockSection';
import Divider from '../../components/Divider';
import ContactForm from '../../components/ContactForm';
import Markdown from '../../components/Markdown';
import DebugPlaceholder from '../../components/DebugPlaceholder';

import Page from '../PageHOC';
import { objectWithKeys } from '../../redux/static/helpers';
import { mediaByKey } from '../../redux/media/helpers';

const CONTENT_KEYS = [
    KEYS.volunteersPageTitle,
    KEYS.volunteersPageSubtitle,
    KEYS.volunteeringTitle,
    KEYS.volunteeringSubtitle,
    KEYS.volunteeringBody,
    KEYS.joinCommunity,
    KEYS.joinCommunityBody
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
                mainTitle={content.volunteersPageTitle}
                bodyText={content.volunteersPageSubtitle}
            />
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
            ) : (
                <DebugPlaceholder
                    title="Volunteer testimonial"
                    description="Add a testimonial of type 'volunteer' to show it here"
                />
            )}
            <BlockSection title={content.volunteeringTitle} subtitle={content.volunteeringSubtitle}>
                <Markdown source={content.volunteeringBody} />
            </BlockSection>
            <Divider lg />
            <BlockSection title={content.joinCommunity} subtitle={content.joinCommunityBody}>
                <ContactForm />
            </BlockSection>
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
