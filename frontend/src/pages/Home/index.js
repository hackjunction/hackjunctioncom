import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import * as StaticContentSelectors from '../../redux/static/selectors';
import * as ContentSelectors from '../../redux/content/selectors';
import * as MediaSelectors from '../../redux/media/selectors';
import KEYS from '../../redux/static/keys';
import MEDIA_KEYS from '../../redux/media/keys';

import HeaderVideo from '../../components/HeaderVideo';
import BlockSection from '../../components/BlockSection';
import StatBlocks from '../../components/StatBlocks';
import NewsLetterForm from '../../components/NewsLetterForm';
import Divider from '../../components/Divider';
import Markdown from '../../components/Markdown';
import ConceptsPreview from '../../components/ConceptsPreview';
import LinkGrid from '../../components/LinkGrid';
import ImageLinks from '../../components/ImageLinks';

import Page from '../PageHOC';
import { objectWithKeys } from '../../redux/static/helpers';
import LinkButton from '../../components/LinkButton/index';

const CONTENT_KEYS = [
    KEYS.whoAreWe,
    KEYS.whoAreWeBody,
    KEYS.whoAreWeSubtitle,
    KEYS.whatWeDo,
    KEYS.whatWeDoBody,
    KEYS.whatWeDoSubtitle,
    KEYS.homePageHeaderVideoLink,
    KEYS.storiesAboutUsTitle,
    KEYS.storiesAboutUsSubtitle,
    KEYS.previousPartnersTitle,
    KEYS.previousPartnersSubtitle,
    KEYS.previousPartnersBody,
];

const BOTTOM_LINKS = [
    {
        imageKey: MEDIA_KEYS.calendarPageHeaderImage,
        imageAlt: 'Link',
        linkTo: '/calendar',
        linkText: 'Calendar'
    },
    {
        imageKey: MEDIA_KEYS.partnerPageHeaderImage,
        imageAlt: 'Link',
        linkTo: '/partners',
        linkText: 'For partners'
    },
    {
        imageKEY: MEDIA_KEYS.volunteerPageHeaderImage,
        imageAlt: 'Link',
        linkTo: '/volunteers',
        linkText: 'For volunteers'
    },
]

const HomePage = ({ allContent, kpis = [], partners = [], stories = [] }) => {
    const content = objectWithKeys(allContent, CONTENT_KEYS);

    function buildStatBlocks() {
        return kpis.map(kpi => {
            return {
                id: kpi.label + '-' + kpi.number,
                label: kpi.label,
                value: kpi.number
            };
        });
    }

    function buildStories() {
        return stories.map(story => {
            return {
                image: story.logo,
                alt: story.name,
                url: story.website
            }
        })
    }

    function buildPartners() {
        return partners.map(partner => {
            return {
                image: partner.logo,
                alt: partner.name,
                url: partner.website
            }
        })
    }

    return (
        <Page className="HomePage" pageTitle="Hack the Future" metaDesc={content.whoAreWeBody}>
            <HeaderVideo />
            <BlockSection title={content.whoAreWe} subtitle={content.whoAreWeSubtitle}>
                <Markdown source={content.whoAreWeBody} />
                <StatBlocks blocks={buildStatBlocks()} />
            </BlockSection>
            <Divider lg />
            <BlockSection title={content.whatWeDo} subtitle={content.whatWeDoSubtitle}>
                <Markdown source={content.whatWeDoBody} />
                <ConceptsPreview />
            </BlockSection>
            <Divider lg />
            <BlockSection title={content.previousPartnersTitle} subtitle={content.previousPartnersSubtitle} >
                <LinkGrid links={buildPartners()} />
                <Divider sm />
                <LinkButton to="/partners" text="More about partnering" />
            </BlockSection>
            <Divider lg />
            <BlockSection title={content.storiesAboutUsTitle} subtitle={content.storiesAboutUsSubtitle}>
                <LinkGrid links={buildStories()} />
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
    kpis: ContentSelectors.genericKpis(state),
    partners: ContentSelectors.partners(state),
    stories: ContentSelectors.stories(state)
});

export default connect(mapStateToProps)(HomePage);
