import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import KEYS from '../../redux/staticcontent/keys';
import MEDIA_KEYS from '../../redux/staticmedia/keys';

import HeaderImage from '../../components/HeaderImage';
import BasicHeader from '../../components/HeaderImage/BasicHeader';
import BlockSection from '../../components/BlockSection/';
import StatBlocks from '../../components/StatBlocks';
import ImageLinks from '../../components/ImageLinks';
import Markdown from '../../components/Markdown';
import NewsLetterForm from '../../components/NewsLetterForm';

import Divider from '../../components/Divider';

import Page from '../PageHOC';
import CenteredBlock from '../../components/CenteredBlock/index';

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

const StoryPage = () => {

    return (
        <Page className="StoryPage" pageTitle="Our story" metaDescKey={KEYS.storyPageSubtitle}>
            <HeaderImage
                imageKey={MEDIA_KEYS.storyPageHeaderImage}
                alt="Header image"
            >
                <BasicHeader titleKey={KEYS.storyPageTitle} bodyKey={KEYS.storyPageSubtitle} />
            </HeaderImage>
            <BlockSection titleKey={KEYS.whatIsJunctionTitle} subtitleKey={KEYS.whatIsJunctionSubtitle}>
                <Markdown sourceKey={KEYS.whatIsJunctionBody} />
                <StatBlocks type="generic" />
            </BlockSection>
            <Divider lg />
            <CenteredBlock>
                <Markdown sourceKey={KEYS.storyPageContent} />
            </CenteredBlock>
            <BlockSection titleKey={KEYS.junction2019} subtitleKey={KEYS.junction2019Subtitle}>
                <Markdown sourceKey={KEYS.junction2019Body} />
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

export default StoryPage
