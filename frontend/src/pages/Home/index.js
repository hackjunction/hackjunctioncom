import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import * as StaticContentSelectors from '../../redux/static/selectors';
import * as ContentSelectors from '../../redux/content/selectors';
import KEYS from '../../redux/static/keys';

import HeaderVideo from '../../components/HeaderVideo';
import BlockSection from '../../components/BlockSection';
import StatBlocks from '../../components/StatBlocks';
import NewsLetterForm from '../../components/NewsLetterForm';
import Divider from '../../components/Divider';
import Markdown from '../../components/Markdown';
import ConceptsPreview from '../../components/ConceptsPreview';
import LinkGrid from '../../components/LinkGrid';

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
];

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
