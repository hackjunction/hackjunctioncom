import React, { PureComponent } from "react";
import "./style.scss";

import { connect } from "react-redux";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import BlockSection from "../../../components/BlockSection";
import SectionImage from "../../../components/SectionImage";
import DividerLine from "../../../components/DividerLine";

import HeaderSection from "../../../components/HeaderSection";
import SingleColumnSection from "../../../components/SingleColumnSection";
import Page from "../../PageHOC";

import { volunteerTestimonials } from "../../../redux/testimonials/selectors";
import { requirePropFactory } from "@material-ui/core";

class VolunteersPage extends PureComponent {
    render() {
        const { testimonials } = this.props;
        const testimonial = testimonials.length > 0 ? testimonials[0] : null;

        return (
            <Page
                className="VolunteersPage"
                pageTitle="For volunteers"
                metaDescKey={KEYS.volunteersPageSubtitle}
                ogImageKey={MEDIA_KEYS.volunteerPageHeaderImage}
            >
                <HeaderSection />
                <DividerLine />
                <SectionImage
                    image={{
                        url: require("../../../assets/images/connected_main.jpg"),
                    }}
                />
                <DividerLine stop />
                <BlockSection
                    halfpage
                    titleKey={KEYS.volunteeringTitle}
                    subtitleKey={KEYS.volunteeringSubtitle}
                ></BlockSection>
                <DividerLine />
                <SectionImage
                    image={{
                        url: require("../../../assets/images/connected_main.jpg"),
                    }}
                />
                <DividerLine stop />
                <BlockSection
                    halfpage
                    titleKey={KEYS.volunteeringTitle}
                    subtitleKey={KEYS.volunteeringSubtitle}
                ></BlockSection>
                <DividerLine />
                <SectionImage
                    image={{
                        url: require("../../../assets/images/connected_main.jpg"),
                    }}
                />
                <DividerLine stop />
                <SingleColumnSection halfpage center />
            </Page>
        );
    }
}

const mapStateToProps = (state) => ({
    testimonials: volunteerTestimonials(state),
});

export default connect(mapStateToProps)(VolunteersPage);
