import React, { PureComponent } from "react";
import "./style.scss";

import { connect } from "react-redux";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import SingleColumnSection from "../../../components/SingleColumnSection/";
import BlockSection from "../../../components/BlockSection/";

import Page from "../../PageHOC";

import { partnerTestimonials } from "../../../redux/testimonials/selectors";
import ImgBlock from "../../../components/ImgBlock";

const images = {
    benefits: require("../../../assets/images/partners/benefits.png"),
    offer: require("../../../assets/images/partners/offer.png"),
    faq: require("../../../assets/images/partners/faq.png"),
    references: require("../../../assets/images/partners/references.png"),
};

class PartnersPage extends PureComponent {
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
                className="ImgBlock" // This is needed for the css to work correctly with the images
                pageTitle="For partners"
                metaDescKey={KEYS.partnersPageSubtitle}
                ogImageKey={MEDIA_KEYS.partnerPageHeaderImage}
            >
                <ImgBlock
                    topic="Innovation through hackathons"
                    link="/why"
                    image={images.benefits}
                />
                <ImgBlock
                    topic="What we offer"
                    link="/services"
                    left
                    image={images.offer}
                />
                <ImgBlock
                    topic="References"
                    link="/references"
                    image={images.references}
                />
                <ImgBlock
                    topic="FAQ"
                    link="/frequently-asked-questions"
                    left
                    image={images.faq}
                />

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

export default connect(mapStateToProps)(PartnersPage);
