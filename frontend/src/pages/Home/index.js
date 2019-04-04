import React, { PureComponent } from 'react';
import './style.scss';

import KEYS from '../../redux/staticcontent/keys';
import MEDIA_KEYS from '../../redux/staticmedia/keys';

import HeaderVideo from '../../components/HeaderVideo';
import BlockSection from '../../components/BlockSection';
import StatBlocks from '../../components/StatBlocks';
import NewsLetterForm from '../../components/NewsLetterForm';
import Divider from '../../components/Divider';
import Markdown from '../../components/Markdown';
import ConceptsPreview from '../../components/ConceptsPreview';
import PartnerLogoGrid from '../../components/LinkGrid/PartnerLogoGrid'
import StoryGrid from '../../components/LinkGrid/StoryGrid'
import ImageLinks from '../../components/ImageLinks';

import Page from '../PageHOC';
import LinkButton from '../../components/LinkButton/index';

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
        imageKey: MEDIA_KEYS.volunteerPageHeaderImage,
        imageAlt: 'Link',
        linkTo: '/volunteers',
        linkText: 'For volunteers'
    },
]

class HomePage extends PureComponent {
    render() {
        return (
            <Page className="HomePage" pageTitle="Hack the Future" metaDesc={KEYS.whoAreWeBody}>
                <HeaderVideo />
                <BlockSection titleKey={KEYS.whoAreWe} subtitleKey={KEYS.whoAreWeSubtitle}>
                    <Markdown sourceKey={KEYS.whoAreWeBody} />
                    <StatBlocks type={'generic'} />
                </BlockSection>
                <Divider lg />
                <BlockSection titleKey={KEYS.whatWeDo} subtitleKey={KEYS.whatWeDoSubtitle}>
                    <Markdown sourceKey={KEYS.whatWeDoBody} />
                    <ConceptsPreview />
                </BlockSection>
                <Divider lg />
                <BlockSection titleKey={KEYS.previousPartnersTitle} subtitleKey={KEYS.previousPartnersSubtitle} >
                    <PartnerLogoGrid />
                    <Divider sm />
                    <LinkButton to="/partners" text="More about partnering" />
                </BlockSection>
                <Divider lg />
                <BlockSection titleKey={KEYS.storiesAboutUsTitle} subtitleKey={KEYS.storiesAboutUsSubtitle}>
                    <StoryGrid />
                </BlockSection>
                <Divider lg />
                <NewsLetterForm />
                <Divider lg />
                <ImageLinks
                    links={BOTTOM_LINKS}
                />
            </Page>
        )
    }
}

export default HomePage
