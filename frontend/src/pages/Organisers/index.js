import React, { useEffect } from 'react';
import './style.scss';

import { connect } from 'react-redux';

import HeaderImage from '../../components/HeaderImage';
import BlockSection from '../../components/BlockSection/';
import ImageBlockSection from '../../components/ImageBlockSection/';
import SingleColumnSection from '../../components/SingleColumnSection/';
import BorderedSection from '../../components/BorderedSection/';
import ContactForm from '../../components/ContactForm/';
import StatBlocks from '../../components/StatBlocks';
import Divider from '../../components/Divider';
import DebugPlaceholder from '../../components/DebugPlaceholder';
import Markdown from '../../components/Markdown';
import Image from '../../components/Image';
import CenteredBlock from '../../components/CenteredBlock';

import Page from '../PageHOC';

import * as ContentSelectors from '../../redux/content/selectors';
import * as ContentActions from '../../redux/content/actions';
import * as MediaSelectors from '../../redux/media/selectors';
import * as StaticContentSelectors from '../../redux/static/selectors';
import MEDIA_KEYS from '../../redux/media/keys';
import KEYS from '../../redux/static/keys';

const OrganisersPage = ({
    content,
    testimonials,
    testimonialsShouldUpdate,
    updateTestimonials,
    headerImage,
    interestedInOrganisingImage,
    junctionXTimelineImage,
    kpis = []
}) => {
    useEffect(() => {
        if (testimonialsShouldUpdate) {
            updateTestimonials();
        }
    }, []);

    const testimonial = testimonials.length > 0 ? testimonials[0] : null;

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
        <Page className="OrganisersPage" pageTitle="For organisers" metaDesc={''}>
            <HeaderImage
                image={headerImage}
                alt="Header image"
                navTitle={'For organisers.'}
                mainTitle={content.organisersPageTitle}
                bodyText={content.organisersPageSubtitle}
            />
            <BlockSection title={content.whatIsJunctionXTitle} subtitle={content.whatIsJunctionXSubtitle}>
                <Markdown source={content.whatIsJunctionXBody} />
                <StatBlocks blocks={buildStatBlocks()} />
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
                        <p>{testimonial.quote}</p>
                    </ImageBlockSection>
                    <Divider lg />
                </React.Fragment>
            ) : (
                <DebugPlaceholder
                    title="Organiser testimonial"
                    description="The first testimonial of type 'organiser' will be shown here"
                />
            )}
            <SingleColumnSection
                title={content.whatDoesJunctionXOfferTitle}
                subtitle={content.whatDoesJunctionXOfferSubtitle}
            >
                <BorderedSection
                    title={content.whatDoesJunctionXOfferFirstTitle}
                    content={content.whatDoesJunctionXOfferFirstBody}
                />
                <BorderedSection
                    title={content.whatDoesJunctionXOfferSecondTitle}
                    content={content.whatDoesJunctionXOfferSecondBody}
                />
                <BorderedSection
                    title={content.whatDoesJunctionXOfferThirdTitle}
                    content={content.whatDoesJunctionXOfferThirdBody}
                />
            </SingleColumnSection>
            <Divider lg />
            <CenteredBlock>
                <Image
                    className="OrganisersPage--junctionx-timeline-image"
                    alt="JunctionX timeline"
                    image={junctionXTimelineImage}
                    width={980}
                />
            </CenteredBlock>
            <Divider lg />
            <ImageBlockSection
                image={interestedInOrganisingImage}
                imageAlt={content.interestedInOrganisingTitle}
                title={content.interestedInOrganisingTitle}
                subtitle={content.interestedInOrganisingSubtitle}
            >
                <Markdown source={content.interestedInOrganisingBody} />
            </ImageBlockSection>
            <Divider lg />
            <BlockSection title={content.joinCommunity} subtitle={content.joinCommunityBody}>
                <ContactForm />
            </BlockSection>
            <Divider lg />
        </Page>
    );
};

const mapStateToProps = state => ({
    testimonials: ContentSelectors.testimonialsOfType('organiser')(state),
    testimonialsShouldUpdate: ContentSelectors.testimonialsShouldUpdate(state),
    headerImage: MediaSelectors.mediaByKey(MEDIA_KEYS.organiserPageHeaderImage)(state),
    interestedInOrganisingImage: MediaSelectors.mediaByKey(MEDIA_KEYS.interestedInOrganisingImage)(state),
    junctionXTimelineImage: MediaSelectors.mediaByKey(MEDIA_KEYS.junctionXTimelineImage)(state),
    kpis: ContentSelectors.kpisOfType('organiser')(state),
    content: StaticContentSelectors.objectWithKeys([
        KEYS.organisersPageTitle,
        KEYS.organisersPageSubtitle,
        KEYS.whatIsJunctionXTitle,
        KEYS.whatIsJunctionXSubtitle,
        KEYS.whatIsJunctionXBody,
        KEYS.whatDoesJunctionXOfferTitle,
        KEYS.whatDoesJunctionXOfferSubtitle,
        KEYS.whatDoesJunctionXOfferFirstTitle,
        KEYS.whatDoesJunctionXOfferFirstBody,
        KEYS.whatDoesJunctionXOfferSecondTitle,
        KEYS.whatDoesJunctionXOfferSecondBody,
        KEYS.whatDoesJunctionXOfferThirdTitle,
        KEYS.whatDoesJunctionXOfferThirdBody,
        KEYS.interestedInOrganisingTitle,
        KEYS.interestedInOrganisingSubtitle,
        KEYS.interestedInOrganisingBody,
        KEYS.joinCommunity,
        KEYS.joinCommunityBody
    ])(state)
});

const mapDispatchToProps = dispatch => ({
    updateTestimonials: () => dispatch(ContentActions.updateTestimonials())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrganisersPage);
