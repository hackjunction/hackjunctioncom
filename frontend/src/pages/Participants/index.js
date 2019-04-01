import React, { useEffect } from 'react';
import './style.scss';

import { connect } from 'react-redux';

import * as ContentActions from '../../redux/content/actions';
import * as ContentSelectors from '../../redux/content/selectors';
import * as StaticContentSelectors from '../../redux/static/selectors';
import * as MediaSelectors from '../../redux/media/selectors';
import KEYS from '../../redux/static/keys';
import MEDIA_KEYS from '../../redux/media/keys';

import HeaderImage from '../../components/HeaderImage';
import BasicHeader from '../../components/HeaderImage/BasicHeader';
import BlockSection from '../../components/BlockSection';
import RomanNumeralList from '../../components/RomanNumeralList';
import ImageBlockSection from '../../components/ImageBlockSection';
import Divider from '../../components/Divider';
import Markdown from '../../components/Markdown';
import NewsLetterForm from '../../components/NewsLetterForm';

import Page from '../PageHOC';
import { objectWithKeys } from '../../redux/static/helpers';
import { mediaByKey } from '../../redux/media/helpers';

const CONTENT_KEYS = [
    KEYS.participantsPageTitle,
    KEYS.participantsPageSubtitle,
    KEYS.howToJoinTitle,
    KEYS.howToJoinSubtitle,
    KEYS.howToJoinStepOne,
    KEYS.howToJoinStepTwo,
    KEYS.howToJoinStepThree,
    KEYS.howToJoinStepFour,
    KEYS.howToJoinStepFive,
    KEYS.getHiredTitle,
    KEYS.getHiredSubtitle,
    KEYS.getHiredBody
];

const ParticipantsPage = ({ allContent, allMedia, testimonials, testimonialsShouldUpdate, updateTestimonials }) => {
    const content = objectWithKeys(allContent, CONTENT_KEYS);
    const headerImage = mediaByKey(allMedia, MEDIA_KEYS.participantPageHeaderImage);
    const testimonial = testimonials.length > 0 ? testimonials[0] : null;

    const howToJoinItems = [];

    if (content.howToJoinStepOne) howToJoinItems.push(content.howToJoinStepOne);
    if (content.howToJoinStepTwo) howToJoinItems.push(content.howToJoinStepTwo);
    if (content.howToJoinStepThree) howToJoinItems.push(content.howToJoinStepThree);
    if (content.howToJoinStepFour) howToJoinItems.push(content.howToJoinStepFour);
    if (content.howToJoinStepFive) howToJoinItems.push(content.howToJoinStepFive);

    useEffect(() => {
        if (testimonialsShouldUpdate) {
            updateTestimonials();
        }
    }, []);

    return (
        <Page className="ParticipantsPage" pageTitle="For participants" metaDesc={content.participantsPageSubtitle}>
            <HeaderImage
                image={headerImage}
                alt="Header image"
            >
                <BasicHeader title={content.participantsPageTitle} body={content.participantsPageSubtitle} />
            </HeaderImage>
            <BlockSection title={content.howToJoinTitle} subtitle={content.howToJoinSubtitle}>
                <RomanNumeralList items={howToJoinItems} />
            </BlockSection>
            <Divider lg />
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
            <BlockSection title={content.getHiredTitle} subtitle={content.getHiredSubtitle}>
                <Markdown source={content.getHiredBody} />
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
    testimonials: ContentSelectors.participantTestimonials(state),
    testimonialsShouldUpdate: ContentSelectors.testimonialsShouldUpdate(state)
});

const mapDispatchToProps = dispatch => ({
    updateTestimonials: () => dispatch(ContentActions.updateTestimonials())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ParticipantsPage);
