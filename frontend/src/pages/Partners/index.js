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
import BlockSection from '../../components/BlockSection/';
import ImageBlockSection from '../../components/ImageBlockSection/';
import SingleColumnSection from '../../components/SingleColumnSection/';
import BorderedSection from '../../components/BorderedSection/';
import ContactForm from '../../components/ContactForm/';
import StatBlocks from '../../components/StatBlocks';
import Divider from '../../components/Divider';
import Markdown from '../../components/Markdown';
import DebugPlaceholder from '../../components/DebugPlaceholder';

import Page from '../PageHOC';

const PartnersPage = ({
    content,
    testimonials,
    testimonialsShouldUpdate,
    updateTestimonials,
    headerImage,
    kpis = []
}) => {
    useEffect(() => {
        if (testimonialsShouldUpdate) {
            updateTestimonials();
        }
    }, []);

    const firstTestimonial = testimonials.length > 0 ? testimonials[0] : null;
    const secondTestimonial = testimonials.length > 1 ? testimonials[1] : null;

    function renderStatBlocks() {
        if (Array.isArray(kpis) && kpis.length > 0) {
            const blocks = kpis.slice(0, 2).map(kpi => {
                return {
                    id: kpi.label + '-' + kpi.number,
                    value: kpi.number,
                    label: kpi.label
                };
            });

            return <StatBlocks blocks={blocks} />;
        }

        return (
            <DebugPlaceholder
                title="Partner KPI's"
                description="Add (up to two) KPI's of type 'partner' to show them here"
            />
        );
    }

    return (
        <Page className="PartnersPage" pageTitle="For partners" metaDesc={content.partnersPageSubtitle}>
            <HeaderImage
                image={headerImage}
                alt="Header image"
                mainTitle={content.partnersPageTitle}
                bodyText={content.partnersPageSubtitle}
            />
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
            ) : (
                <DebugPlaceholder
                    title="Partner testimonial"
                    description="The first testimonial of type 'partner' will be shown here"
                />
            )}
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
            ) : (
                <DebugPlaceholder
                    title="Partner testimonial"
                    description="The second testimonial of type 'partner' will be shown here"
                />
            )}
            <BlockSection title={content.whatMakesUsDifferentTitle} subtitle={content.whatMakesUsDifferentSubtitle}>
                <Markdown source={content.whatMakesUsDifferentBody} />
            </BlockSection>
            <Divider lg />
            <BlockSection title={content.previousPartnersTitle} subtitle={content.previousPartnersSubtitle}>
                <Markdown source={content.previousPartnersBody} />
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
        KEYS.joinCommunity,
        KEYS.joinCommunityBody
    ])(state),
    testimonials: ContentSelectors.testimonialsOfType('partner')(state),
    testimonialsShouldUpdate: ContentSelectors.testimonialsShouldUpdate(state),
    headerImage: MediaSelectors.mediaByKey(MEDIA_KEYS.partnerPageHeaderImage)(state),
    kpis: ContentSelectors.kpisOfType('partner')(state)
});

const mapDispatchToProps = dispatch => ({
    updateTestimonials: () => dispatch(ContentActions.updateTestimonials())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PartnersPage);
