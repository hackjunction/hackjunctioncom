import React, { useEffect } from 'react';
import './style.scss';

import { connect } from 'react-redux';

import HeaderImage from '../../components/HeaderImage';
import BasicHeader from '../../components/HeaderImage/BasicHeader';
import BlockSection from '../../components/BlockSection/';
import ImageBlockSection from '../../components/ImageBlockSection/';
import SingleColumnSection from '../../components/SingleColumnSection/';
import BorderedSection from '../../components/BorderedSection/';
import ContactForm from '../../components/ContactForm/';
import StatBlocks from '../../components/StatBlocks';
import Divider from '../../components/Divider';
import NewsLetterForm from '../../components/NewsLetterForm';
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
import { objectWithKeys } from '../../redux/static/helpers';
import { mediaObjectWithKeys } from '../../redux/media/helpers';

const CONTENT_KEYS = [
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
    KEYS.interestedInOrganisingBody
];

const SELECT_MEDIA_KEYS = [
    MEDIA_KEYS.organiserPageHeaderImage,
    MEDIA_KEYS.interestedInOrganisingImage,
    MEDIA_KEYS.junctionXTimelineImage
];

const OrganisersPage = ({
    allContent,
    allMedia,
    testimonials,
    testimonialsShouldUpdate,
    updateTestimonials,
    kpis = []
}) => {
    const content = objectWithKeys(allContent, CONTENT_KEYS);
    const media = mediaObjectWithKeys(allMedia, SELECT_MEDIA_KEYS);
    const testimonial = testimonials.length > 0 ? testimonials[0] : null;

    useEffect(() => {
        if (testimonialsShouldUpdate) {
            updateTestimonials();
        }
    }, []);

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
        <Page className="OrganisersPage" pageTitle="For organisers" metaDesc={content.organisersPageSubtitle}>
            <HeaderImage
                image={media.organiserPageHeaderImage}
                alt="Header image"
            >
                <BasicHeader title={content.organisersPageTitle} body={content.organisersPageSubtitle} />
            </HeaderImage>
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
                        <Markdown source={testimonial.quote} />
                    </ImageBlockSection>
                    <Divider lg />
                </React.Fragment>
            ) : null}
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
                    image={media.junctionXTimelineImage}
                    width={980}
                />
            </CenteredBlock>
            <Divider lg />
            <ImageBlockSection
                image={media.interestedInOrganisingImage}
                imageAlt={content.interestedInOrganisingTitle}
                title={content.interestedInOrganisingTitle}
                subtitle={content.interestedInOrganisingSubtitle}
            >
                <Markdown source={content.interestedInOrganisingBody} />
            </ImageBlockSection>
            <Divider lg />
            <NewsLetterForm />
            <Divider lg />
        </Page>
    );
};

const mapStateToProps = state => ({
    testimonials: ContentSelectors.organiserTestimonials(state),
    testimonialsShouldUpdate: ContentSelectors.testimonialsShouldUpdate(state),
    kpis: ContentSelectors.organiserKpis(state),
    allContent: StaticContentSelectors.content(state),
    allMedia: MediaSelectors.media(state)
});

const mapDispatchToProps = dispatch => ({
    updateTestimonials: () => dispatch(ContentActions.updateTestimonials())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrganisersPage);
