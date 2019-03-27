import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import * as StaticContentSelectors from '../../redux/static/selectors';
import * as MediaSelectors from '../../redux/media/selectors';
import * as ContentSelectors from '../../redux/content/selectors';
import KEYS from '../../redux/static/keys';
import MEDIA_KEYS from '../../redux/media/keys';

import HeaderImage from '../../components/HeaderImage';
import BlockSection from '../../components/BlockSection/';
import ImageBlockSection from '../../components/ImageBlockSection/';
import ContactForm from '../../components/ContactForm/';
import StatBlocks from '../../components/StatBlocks';
import ImageLinks from '../../components/ImageLinks';
import Markdown from '../../components/Markdown';

import Divider from '../../components/Divider';

import Page from '../PageHOC';
import DebugPlaceholder from '../../components/DebugPlaceholder';

const StoryPage = ({ content, headerImage, kpis = [], testimonials = [] }) => {
    const testimonial = testimonials && testimonials.length > 0 ? testimonials[0] : null;

    function renderStatBlocks() {
        if (Array.isArray(kpis) && kpis.length > 0) {
            const blocks = kpis.slice(0, 2).map(kpi => {
                return {
                    id: kpi.label + '-' + kpi.number,
                    label: kpi.label,
                    value: kpi.number
                };
            });
            return <StatBlocks blocks={blocks} />;
        }

        return <DebugPlaceholder title="Generic KPI's" description="Add KPI's of type 'generic' to show them here" />;
    }

    return (
        <Page className="StoryPage" pageTitle="Our story" metaDesc={content.storyPageSubtitle}>
            <HeaderImage
                image={headerImage}
                alt="Header image"
                mainTitle={content.storyPageTitle}
                bodyText={content.storyPageSubtitle}
            />
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
                        imageSrc: require('../../assets/images/default_image.jpg'),
                        imageAlt: 'Link',
                        linkTo: '/partners',
                        linkText: 'For partners'
                    },
                    {
                        imageSrc: require('../../assets/images/default_image.jpg'),
                        imageAlt: 'Link',
                        linkTo: '/volunteers',
                        linkText: 'For volunteers'
                    },
                    {
                        imageSrc: require('../../assets/images/default_image.jpg'),
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
    content: StaticContentSelectors.objectWithKeys([
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
    ])(state),
    headerImage: MediaSelectors.mediaByKey(MEDIA_KEYS.storyPageHeaderImage)(state),
    kpis: ContentSelectors.kpisOfType('generic')(state),
    testimonials: ContentSelectors.testimonialsOfType('generic')(state)
});

export default connect(mapStateToProps)(StoryPage);
