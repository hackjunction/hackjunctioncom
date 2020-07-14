import React, { PureComponent } from "react";
import "./style.scss";

import { connect } from "react-redux";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import HeaderImage from "../../../components/HeaderImage";
import BasicHeader from "../../../components/HeaderImage/BasicHeader";
import BlockSection from "../../../components/BlockSection";
import ImageBlockSection from "../../../components/ImageBlockSection";
import SingleColumnSection from "../../../components/SingleColumnSection";
import BorderedSection from "../../../components/BorderedSection";
import ContactForm from "../../../components/ContactForm";
import StatBlocks from "../../../components/StatBlocks";
import Divider from "../../../components/Divider";
import Markdown from "../../../components/Markdown";
import PartnerLogoGrid from "../../../components/LinkGrid/PartnerLogoGrid";
import LinkButton from "../../../components/LinkButton";

import Page from "../../PageHOC";
import CenteredBlock from "../../../components/CenteredBlock/index";

import { partnerTestimonials } from "../../../redux/testimonials/selectors";

const images = {
    benefits: require("../../../assets/images/partners/benefits.png"),
    offer: require("../../../assets/images/partners/offer.png"),
    faq: require("../../../assets/images/partners/faq.png"),
    references: require("../../../assets/images/partners/references.png"),
};

class EventsPage extends PureComponent {
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
                className="EventsPage" // This is needed for the css to work correctly with the images
                pageTitle="For Events"
                metaDescKey={KEYS.EventsPageSubtitle}
                ogImageKey={MEDIA_KEYS.partnerPageHeaderImage}
            >
                <a href={"ADDLINKHERE"}>
                    <div className="EventsPage--TopContent">
                        <div className="EventsPage--textAndArrowDiv">
                            <h1 className="topic">Junction 2020 Connected</h1>
                            <img
                                src={require("../../../assets/icons/story_arrow.png")}
                            />
                            <p>
                                Junction 2020 Connected is a new take on the
                                established concept of a hackathon; to
                                compliment its online aspect, participants all
                                over the world can join physical locations
                                hosted by Junction and other organizations. The
                                physical hubs give the concept of a normal
                                online hackathon a twist by increasing the sense
                                of community, and making physical interaction
                                possible when needed.
                            </p>
                        </div>
                        <div className="EventsPage--ImageBlock">
                            <img
                                src={require("../../../assets/images/events/j2020c.png")}
                                width="80%"
                                height="100%"
                            />
                        </div>
                    </div>
                </a>

                <a href={"ADDLINKHERE"}>
                    <div className="EventsPage--TopContent">
                        <div className="EventsPage--ImageBlock--left">
                            <img
                                src={require("../../../assets/images/events/junctionx.jpg")}
                                width="80%"
                                height="100%"
                            />
                        </div>
                        <div className="EventsPage--textAndArrowDiv">
                            <h1 className="topic">JunctionX</h1>
                            <img
                                src={require("../../../assets/icons/story_arrow.png")}
                            />
                            <p>
                                Hackathons organized around the world in local
                                tech hubs, by local teams. Organized since 2018,
                                our global teams have created their JunctionX
                                hackathons with their personal twist, but all
                                with the same Junction mentality. Spreading the
                                hackathon movement across the globe.
                            </p>
                        </div>
                    </div>
                </a>
                <a href={"ADDLINKHERE"}>
                    <div className="EventsPage--TopContent--last">
                        <div className="EventsPage--textAndArrowDiv">
                            <h1 className="topic">Hel Tech</h1>
                            <img
                                src={require("../../../assets/icons/story_arrow.png")}
                            />
                            <p>
                                Monthly gathering the Helsinki area tech crowd
                                for a meetup: an evening of the latest research,
                                keynotes, demos and discussions. Bringing people
                                together to meet, learn and network around a
                                monthly changing tech topic.
                            </p>
                        </div>
                        <div className="EventsPage--ImageBlock">
                            <img
                                src={require("../../../assets/images/events/heltech.jpg")}
                                width="80%"
                                height="100%"
                            />
                        </div>
                    </div>
                </a>
            </Page>
        );
    }
}

const mapStateToProps = (state) => ({
    testimonials: partnerTestimonials(state),
});

export default connect(mapStateToProps)(EventsPage);
