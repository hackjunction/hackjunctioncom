import React, { useEffect } from 'react';
import './style.scss';

import { connect } from 'react-redux';

import * as ContentActions from '../../redux/content/actions';

import * as StaticContentSelectors from '../../redux/static/selectors';
import * as ContentSelectors from '../../redux/content/selectors';
import * as MediaSelectors from '../../redux/media/selectors';
import KEYS from '../../redux/static/keys';
import MEDIA_KEYS from '../../redux/media/keys';

import HeaderImage from '../../components/HeaderImage';
import BasicHeader from '../../components/HeaderImage/BasicHeader';
import BlockSection from '../../components/BlockSection/';
import ImageBlockSection from '../../components/ImageBlockSection/';
import SingleColumnSection from '../../components/SingleColumnSection/';
import BorderedSection from '../../components/BorderedSection/';
import ContactForm from '../../components/ContactForm/';
import StatBlocks from '../../components/StatBlocks';
import Divider from '../../components/Divider';
import Markdown from '../../components/Markdown';
import LinkGrid from '../../components/LinkGrid';

import Page from '../PageHOC';
import { objectWithKeys } from '../../redux/static/helpers';
import { mediaByKey } from '../../redux/media/helpers';

const CONTENT_KEYS = [
    KEYS.partnersPageTitle,
    KEYS.partnersPageSubtitle,
    KEYS.partnersPageFirstTitle,
    KEYS.partnersPageFirstSubtitle,
    KEYS.partnersPageFirstBody,
    KEYS.whyPartnerWithUsTitle,
    KEYS.whyPartnerWithUsFirstTitle,
    KEYS.whyPartnerWithUsFirstBody,
    KEYS.whyPartnerWithUsSecondTitle,
    KEYS.whyPartnerWithUsSecondBody,
    KEYS.whyPartnerWithUsThirdTitle,
    KEYS.whyPartnerWithUsThirdBody,
    KEYS.whatMakesUsDifferentTitle,
    KEYS.whatMakesUsDifferentSubtitle,
    KEYS.whatMakesUsDifferentBody,
    KEYS.previousPartnersTitle,
    KEYS.previousPartnersSubtitle,
    KEYS.previousPartnersBody,
];

const PartnersPage = ({
    allContent,
    allMedia,
    testimonials,
    testimonialsShouldUpdate,
    updateTestimonials,
    kpis = [],
    partners = []
}) => {
    const content = objectWithKeys(allContent, CONTENT_KEYS);
    const headerImage = mediaByKey(allMedia, MEDIA_KEYS.partnerPageHeaderImage);
    const firstTestimonial = testimonials.length > 0 ? testimonials[0] : null;
    const secondTestimonial = testimonials.length > 1 ? testimonials[1] : null;

    useEffect(() => {
        if (testimonialsShouldUpdate) {
            updateTestimonials();
        }
    }, []);

    function renderStatBlocks() {
        if (Array.isArray(kpis) && kpis.length > 0) {
            const blocks = kpis.map(kpi => {
                return {
                    id: kpi.label + '-' + kpi.number,
                    value: kpi.number,
                    label: kpi.label
                };
            });

            return <StatBlocks blocks={blocks} />;
        }

        return null;
    }

    return (
        <Page className="PartnersPage" pageTitle="For partners" metaDesc={content.partnersPageSubtitle}>
            <HeaderImage
                image={headerImage}
                alt="Header image"
            >
                <BasicHeader title={content.partnersPageTitle} body={content.partnersPageSubtitle} />
            </HeaderImage>
            <BlockSection title={content.partnersPageFirstTitle} subtitle={content.partnersPageFirstSubtitle}>
                <Markdown source={content.partnersPageFirstBody} />
                {renderStatBlocks()}
            </BlockSection>
            <Divider lg />
            {firstTestimonial ? (
                <React.Fragment>
                    <ImageBlockSection
                        image={firstTestimonial.image}
                        imageAlt={firstTestimonial.name}
                        title={firstTestimonial.name}
                        subtitle={firstTestimonial.subtitle}
                    >
                        <Markdown source={firstTestimonial.quote} />
                    </ImageBlockSection>
                    <Divider lg />
                </React.Fragment>
            ) : null}
            <SingleColumnSection title={content.whyPartnerWithUsTitle}>
                <BorderedSection
                    title={content.whyPartnerWithUsFirstTitle}
                    content={content.whyPartnerWithUsFirstBody}
                />
                <BorderedSection
                    title={content.whyPartnerWithUsSecondTitle}
                    content={content.whyPartnerWithUsSecondBody}
                />
                <BorderedSection
                    title={content.whyPartnerWithUsThirdTitle}
                    content={content.whyPartnerWithUsThirdBody}
                />
            </SingleColumnSection>
            <Divider lg />
            {secondTestimonial ? (
                <React.Fragment>
                    <ImageBlockSection
                        image={secondTestimonial.image}
                        imageAlt={secondTestimonial.name}
                        title={secondTestimonial.name}
                        subtitle={secondTestimonial.subtitle}
                    >
                        <Markdown source={secondTestimonial.quote} />
                    </ImageBlockSection>
                    <Divider lg />
                </React.Fragment>
            ) : null}
            <BlockSection title={content.whatMakesUsDifferentTitle} subtitle={content.whatMakesUsDifferentSubtitle}>
                <Markdown source={content.whatMakesUsDifferentBody} />
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
            </BlockSection>
            <Divider lg />
            <ContactForm />
            <Divider lg />
        </Page >
    );
};

const mapStateToProps = state => ({
    allContent: StaticContentSelectors.content(state),
    allMedia: MediaSelectors.media(state),
    testimonials: ContentSelectors.partnerTestimonials(state),
    testimonialsShouldUpdate: ContentSelectors.testimonialsShouldUpdate(state),
    kpis: ContentSelectors.partnerKpis(state),
    partners: ContentSelectors.partners(state),
});

const mapDispatchToProps = dispatch => ({
    updateTestimonials: () => dispatch(ContentActions.updateTestimonials())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PartnersPage);
