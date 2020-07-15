import React, { PureComponent } from "react";
import "./style.scss";

import { connect } from "react-redux";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import Page from "../../PageHOC";

import { partnerTestimonials } from "../../../redux/testimonials/selectors";
import ImgBlock from "../../../components/ImgBlock";
import SingleColumnSection from "../../../components/SingleColumnSection";

const images = {
    participants: require("../../../assets/images/community/participants.png"),
    volunteers: require("../../../assets/images/community/volunteers.png"),
    faq: require("../../../assets/images/partners/faq.png"),
    references: require("../../../assets/images/partners/references.png"),
};

class CommunityPage extends PureComponent {
    constructor(props) {
        super(props);

        this.scrollToContact = this.scrollToContact.bind(this);
        this.contactForm = null;
    }

    scrollToContact() {
        if (this.contactForm) {
            window.scrollTo({
                top: this.contactForm.offsetTop - 100,
                left: 0,
                behavior: "smooth",
            });
        }
    }

    render() {
        const { testimonials } = this.props;
        const firstTestimonial =
            testimonials.length > 0 ? testimonials[0] : null;
        const secondTestimonial =
            testimonials.length > 1 ? testimonials[1] : null;

        return (
            <Page
                className="ImgBlock"
                pageTitle="For Community"
                metaDescKey={KEYS.CommunityPageSubtitle}
                ogImageKey={MEDIA_KEYS.partnerPageHeaderImage}
            >
                <SingleColumnSection>
                    <ImgBlock
                        topic="For participants"
                        link="ADDLINKHERE"
                        left
                        image={images.participants}
                    />
                    <ImgBlock
                        topic="For volunteers"
                        link="ADDLINKHERE"
                        image={images.volunteers}
                    />
                </SingleColumnSection>
                {/* <BlockSection
                    titleKey={KEYS.previousPartnersTitle}
                    subtitleKey={KEYS.previousPartnersSubtitle}
                >
                    <PartnerLogoGrid />
                </BlockSection> */}
            </Page>
        );
    }
}

const mapStateToProps = (state) => ({
    testimonials: partnerTestimonials(state),
});

export default connect(mapStateToProps)(CommunityPage);
