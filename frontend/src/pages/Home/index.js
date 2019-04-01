import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import * as StaticContentSelectors from '../../redux/static/selectors';
import * as ContentSelectors from '../../redux/content/selectors';
import * as MediaSelectors from '../../redux/media/selectors';
import KEYS from '../../redux/static/keys';
import MEDIA_KEYS from '../../redux/media/keys';
import { mediaByKey } from '../../redux/media/helpers';

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

const HomePage = ({ allContent, allMedia, kpis = [], partners = [], stories = [] }) => {
    const content = objectWithKeys(allContent, CONTENT_KEYS);
    const partnerLinkImage = mediaByKey(allMedia, MEDIA_KEYS.partnerPageHeaderImage);
    const volunteerLinkImage = mediaByKey(allMedia, MEDIA_KEYS.volunteerPageHeaderImage);
    const calendarLinkImage = mediaByKey(allMedia, MEDIA_KEYS.calendarPageHeaderImage);

    function buildStatBlocks() {
        return kpis.map(kpi => {
            return {
                id: kpi.label + '-' + kpi.number,
                label: kpi.label,
                value: kpi.number
            };
        });
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
                <LinkGrid links={partners.map(p => {
                    return {
                        image: p.logo,
                        alt: p.name,
                        url: p.website
                    }
                })} />
                <Divider sm />
                <LinkButton to="/partners" text="More about partnering" />
            </BlockSection>
            <Divider lg />
            <BlockSection title={content.storiesAboutUsTitle} subtitle={content.storiesAboutUsSubtitle}>
                <LinkGrid links={stories.map(s => {
                    return {
                        image: s.logo,
                        alt: s.name,
                        url: s.website
                    }
                })} />
            </BlockSection>
            <Divider lg />
            <NewsLetterForm />
            <Divider lg />
            <ImageLinks
                links={[
                    {
                        image: calendarLinkImage,
                        imageAlt: 'Link',
                        linkTo: '/calendar',
                        linkText: 'Calendar'
                    },
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
                ]}
            />
        </Page>
    );
};

const mapStateToProps = state => ({
    allContent: StaticContentSelectors.content(state),
    allMedia: MediaSelectors.media(state),
    kpis: ContentSelectors.genericKpis(state),
    partners: ContentSelectors.partners(state),
    stories: ContentSelectors.stories(state)
});

export default connect(mapStateToProps)(HomePage);
