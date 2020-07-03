import React, { PureComponent } from "react";
import "./style.scss";

import { connect } from "react-redux";

import HeaderImage from "../../../components/HeaderImage";
import BasicHeader from "../../../components/HeaderImage/BasicHeader";
import BlockSection from "../../../components/BlockSection/";
import ImageBlockSection from "../../../components/ImageBlockSection/";
import SingleColumnSection from "../../../components/SingleColumnSection/";
import BorderedSection from "../../../components/BorderedSection/";
import StatBlocks from "../../../components/StatBlocks";
import Divider from "../../../components/Divider";
import NewsLetterForm from "../../../components/NewsLetterForm";
import Markdown from "../../../components/Markdown";
import CenteredBlock from "../../../components/CenteredBlock";
import Page from "../../PageHOC";

import MEDIA_KEYS from "../../../redux/staticmedia/keys";
import KEYS from "../../../redux/staticcontent/keys";

import { organiserTestimonials } from "../../../redux/testimonials/selectors";

class OrganisersPage extends PureComponent {
    render() {
        const { testimonials } = this.props;
        const testimonial = testimonials.length > 0 ? testimonials[0] : null;

        return (
            <Page
                className="OrganisersPage"
                pageTitle="For organizers"
                metaDescKey={KEYS.organisersPageSubtitle}
                ogImageKey={MEDIA_KEYS.organiserPageHeaderImage}
            >
                <HeaderImage
                    imageKey={MEDIA_KEYS.organiserPageHeaderImage}
                    alt="Header image"
                >
                    <BasicHeader
                        titleKey={KEYS.organisersPageTitle}
                        bodyKey={KEYS.organisersPageSubtitle}
                    />
                </HeaderImage>
                <BlockSection
                    titleKey={KEYS.whatIsJunctionXTitle}
                    subtitleKey={KEYS.whatIsJunctionXSubtitle}
                >
                    <Markdown sourceKey={KEYS.whatIsJunctionXBody} />
                    <StatBlocks type="organiser" />
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
                    titleKey={KEYS.whatDoesJunctionXOfferTitle}
                    subtitleKey={KEYS.whatDoesJunctionXOfferSubtitle}
                >
                    <BorderedSection
                        titleKey={KEYS.whatDoesJunctionXOfferFirstTitle}
                        contentKey={KEYS.whatDoesJunctionXOfferFirstBody}
                    />
                    <BorderedSection
                        titleKey={KEYS.whatDoesJunctionXOfferSecondTitle}
                        contentKey={KEYS.whatDoesJunctionXOfferSecondBody}
                    />
                    <BorderedSection
                        titleKey={KEYS.whatDoesJunctionXOfferThirdTitle}
                        contentKey={KEYS.whatDoesJunctionXOfferThirdBody}
                    />
                    <BorderedSection
                        titleKey={KEYS.whatDoesJunctionXOfferFourthTitle}
                        contentKey={KEYS.whatDoesJunctionXOfferFourthBody}
                    />
                </SingleColumnSection>
                <Divider lg />
                <CenteredBlock>
                    <Markdown sourceKey={KEYS.organiserPageBottomContent} />
                </CenteredBlock>
                <ImageBlockSection
                    imageKey={MEDIA_KEYS.interestedInOrganisingImage}
                    imageAltKey={KEYS.interestedInOrganisingTitle}
                    titleKey={KEYS.interestedInOrganisingTitle}
                    subtitleKey={KEYS.interestedInOrganisingSubtitle}
                >
                    <Markdown sourceKey={KEYS.interestedInOrganisingBody} />
                </ImageBlockSection>
                <Divider lg />
                <NewsLetterForm />
                <Divider lg />
            </Page>
        );
    }
}

const mapStateToProps = (state) => ({
    testimonials: organiserTestimonials(state),
});

export default connect(mapStateToProps)(OrganisersPage);
