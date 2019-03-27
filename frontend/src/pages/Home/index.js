import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import * as StaticContentSelectors from '../../redux/static/selectors';
import * as MediaSelectors from '../../redux/media/selectors';
import * as ContentSelectors from '../../redux/content/selectors';
import KEYS from '../../redux/static/keys';
import MEDIA_KEYS from '../../redux/media/keys';

import HeaderVideo from '../../components/HeaderVideo';
import BlockSection from '../../components/BlockSection';
import StatBlocks from '../../components/StatBlocks';
import LinkGrid from '../../components/LinkGrid';
import ContactForm from '../../components/ContactForm';
import Divider from '../../components/Divider';
import Markdown from '../../components/Markdown';

import Page from '../PageHOC';

const HomePage = ({ content, headerImage, kpis = [] }) => {
    function buildStatBlocks() {
        return kpis.slice(0, 2).map(kpi => {
            return {
                id: kpi.label + '-' + kpi.number,
                label: kpi.label,
                value: kpi.number
            };
        });
    }

    return (
        <Page className="HomePage" pageTitle="Hack the Future" metaDesc={content.whoAreWeBody}>
            <HeaderVideo navTitle="Hack the Future." />
            <BlockSection title={content.whoAreWe} subtitle={content.whoAreWeSubtitle}>
                <Markdown source={content.whoAreWeBody} />
                <StatBlocks blocks={buildStatBlocks()} />
            </BlockSection>
            <Divider lg />
            <BlockSection title={content.whatWeDo} subtitle={content.whatWeDoSubtitle}>
                <Markdown source={content.whatWeDoBody} />
                <LinkGrid
                    links={[
                        {
                            id: 1,
                            title: 'Hackathons'
                        },
                        {
                            id: 2,
                            title: 'Speaker events'
                        },
                        {
                            id: 3,
                            title: 'Tech meetups'
                        },
                        {
                            id: 4,
                            title: 'More -->'
                        }
                    ]}
                />
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
    content: StaticContentSelectors.objectWithKeys([
        KEYS.whoAreWe,
        KEYS.whoAreWeBody,
        KEYS.whoAreWeSubtitle,
        KEYS.whatWeDo,
        KEYS.whatWeDoBody,
        KEYS.whatWeDoSubtitle,
        KEYS.joinCommunity,
        KEYS.joinCommunityBody,
        KEYS.homePageHeaderVideoLink
    ])(state),
    headerImage: MediaSelectors.mediaByKey(MEDIA_KEYS.homePageHeaderImage)(state),
    kpis: ContentSelectors.kpisOfType('generic')(state)
});

export default connect(mapStateToProps)(HomePage);
