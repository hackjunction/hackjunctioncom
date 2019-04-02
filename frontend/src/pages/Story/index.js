import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import * as StaticContentSelectors from '../../redux/static/selectors';
import * as MediaSelectors from '../../redux/media/selectors';
import * as ContentSelectors from '../../redux/content/selectors';
import KEYS from '../../redux/static/keys';
import MEDIA_KEYS from '../../redux/media/keys';
import { mediaByKey } from '../../redux/media/helpers';

import HeaderImage from '../../components/HeaderImage';
import BasicHeader from '../../components/HeaderImage/BasicHeader';
import BlockSection from '../../components/BlockSection/';
import StatBlocks from '../../components/StatBlocks';
import ImageLinks from '../../components/ImageLinks';
import Markdown from '../../components/Markdown';
import NewsLetterForm from '../../components/NewsLetterForm';

import Divider from '../../components/Divider';

import Page from '../PageHOC';
import { objectWithKeys } from '../../redux/static/helpers';
import CenteredBlock from '../../components/CenteredBlock/index';

const CONTENT_KEYS = [
    KEYS.storyPageTitle,
    KEYS.storyPageSubtitle,
    KEYS.whatIsJunctionTitle,
    KEYS.whatIsJunctionSubtitle,
    KEYS.whatIsJunctionBody,
    KEYS.storyPageContent,
    KEYS.junction2019,
    KEYS.junction2019Subtitle,
    KEYS.junction2019Body
];

const BOTTOM_LINKS = [
    {
        imageKey: MEDIA_KEYS.partnerPageHeaderImage,
        imageAlt: 'Link',
        linkTo: '/partners',
        linkText: 'For partners'
    },
    {
        imageKey: MEDIA_KEYS.volunteerPageHeaderImage,
        imageAlt: 'Link',
        linkTo: '/volunteers',
        linkText: 'For volunteers'
    },
    {
        imageKey: MEDIA_KEYS.calendarPageHeaderImage,
        imageAlt: 'Link',
        linkTo: '/calendar',
        linkText: 'Calendar'
    }
]

const StoryPage = ({ allContent, allMedia, kpis = [] }) => {
    const content = objectWithKeys(allContent, CONTENT_KEYS);
    const headerImage = mediaByKey(allMedia, MEDIA_KEYS.storyPageHeaderImage);

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
            <CenteredBlock>
                <Markdown source={content.storyPageContent} />
            </CenteredBlock>
            <BlockSection title={content.junction2019} subtitle={content.junction2019Subtitle}>
                <Markdown source={content.junction2019Body} />
            </BlockSection>
            <Divider lg />
            <NewsLetterForm />
            <Divider lg />
            <ImageLinks
                links={BOTTOM_LINKS}
            />
        </Page>
    );
};

const mapStateToProps = state => ({
    allContent: StaticContentSelectors.content(state),
    allMedia: MediaSelectors.media(state),
    kpis: ContentSelectors.genericKpis(state),
});

export default connect(mapStateToProps)(StoryPage);
