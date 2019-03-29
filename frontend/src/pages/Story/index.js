import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import * as StaticContentSelectors from '../../redux/static/selectors';
import * as MediaSelectors from '../../redux/media/selectors';
import * as ContentSelectors from '../../redux/content/selectors';
import KEYS from '../../redux/static/keys';
import MEDIA_KEYS from '../../redux/media/keys';

import HeaderImage from '../../components/HeaderImage';
import BasicHeader from '../../components/HeaderImage/BasicHeader';
import BlockSection from '../../components/BlockSection/';
import ImageBlockSection from '../../components/ImageBlockSection/';
import ContactForm from '../../components/ContactForm/';
import StatBlocks from '../../components/StatBlocks';
import ImageLinks from '../../components/ImageLinks';
import Markdown from '../../components/Markdown';

import Divider from '../../components/Divider';

import Page from '../PageHOC';
import DebugPlaceholder from '../../components/DebugPlaceholder';
import { objectWithKeys } from '../../redux/static/helpers';
import { mediaByKey } from '../../redux/media/helpers';

const CONTENT_KEYS = [
    KEYS.storyPageTitle,
    KEYS.storyPageSubtitle,
    KEYS.whatIsJunctionTitle,
    KEYS.whatIsJunctionSubtitle,
    KEYS.whatIsJunctionBody,
    KEYS.storyPagePersonImage,
    KEYS.storyPagePersonTitle,
    KEYS.storyPagePersonSubtitle,
    KEYS.storyPagePersonBody,
    KEYS.junction2019,
    KEYS.junction2019Subtitle,
    KEYS.junction2019Body,
    KEYS.joinCommunity,
    KEYS.joinCommunityBody
];

const StoryPage = ({ allContent, allMedia, kpis = [], testimonials = [] }) => {
    const content = objectWithKeys(allContent, CONTENT_KEYS);
    const headerImage = mediaByKey(allMedia, MEDIA_KEYS.storyPageHeaderImage);
    const partnerLinkImage = mediaByKey(allMedia, MEDIA_KEYS.partnerPageHeaderImage);
    const volunteerLinkImage = mediaByKey(allMedia, MEDIA_KEYS.volunteerPageHeaderImage);
    const calendarLinkImage = mediaByKey(allMedia, MEDIA_KEYS.calendarPageHeaderImage);
    const testimonial = testimonials && testimonials.length > 0 ? testimonials[0] : null;

    function renderStatBlocks() {
        if (Array.isArray(kpis) && kpis.length > 0) {
            const blocks = kpis.map(kpi => {
                return {
                    id: kpi.label + '-' + kpi.number,
                    label: kpi.label,
                    value: kpi.number
                };
            });
            return <StatBlocks blocks={blocks} />;
        }
    }

    return (
        <Page className="StoryPage" pageTitle="Our story" metaDesc={content.storyPageSubtitle}>
            <HeaderImage
                image={headerImage}
                alt="Header image"
            >
                <BasicHeader title={content.storyPageTitle} body={content.storyPageSubtitle} />
            </HeaderImage>
            <BlockSection title={content.whatIsJunctionTitle} subtitle={content.whatIsJunctionSubtitle}>
                <Markdown source={content.whatIsJunctionBody} />
                {renderStatBlocks()}
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
            ) : (
                    <DebugPlaceholder
                        title="Generic testimonial"
                        description="Add a testimonial of type 'generic' to show it here"
                    />
                )}
            <BlockSection title={content.junction2019} subtitle={content.junction2019Subtitle}>
                <Markdown source={content.junction2019Body} />
            </BlockSection>
            <Divider lg />
            <BlockSection title={content.joinCommunity} subtitle={content.joinCommunityBody}>
                <ContactForm />
            </BlockSection>
            <Divider lg />
            <ImageLinks
                links={[
                    {
                        image: partnerLinkImage,
                        imageAlt: 'Link',
                        linkTo: '/partners',
                        linkText: 'For partners'
                    },
                    {
                        image: volunteerLinkImage,
                        imageAlt: 'Link',
                        linkTo: '/volunteers',
                        linkText: 'For volunteers'
                    },
                    {
                        image: calendarLinkImage,
                        imageAlt: 'Link',
                        linkTo: '/calendar',
                        linkText: 'Calendar'
                    }
                ]}
            />
        </Page>
    );
};

const mapStateToProps = state => ({
    allContent: StaticContentSelectors.content(state),
    allMedia: MediaSelectors.media(state),
    kpis: ContentSelectors.genericKpis(state),
    testimonials: ContentSelectors.genericTestimonials(state)
});

export default connect(mapStateToProps)(StoryPage);
