import React, { PureComponent } from "react";
import "./style.scss";

import { connect } from "react-redux";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import HeaderSection from "../../../components/HeaderSection";
import SectionImage from "../../../components/SectionImage";
import Button from "../../../components/Button";
import DividerLine from "../../../components/DividerLine";
import Planet from "../../../components/Planet";
import Page from "../../PageHOC";

import { volunteerTestimonials } from "../../../redux/testimonials/selectors";

class JunctionXPage extends PureComponent {
    render() {
        const { testimonials } = this.props;
        const testimonial = testimonials.length > 0 ? testimonials[0] : null;

        return (
            <Page
                className="JunctionXPage Junction-Default"
                pageTitle="For JunctionX"
                metaDescKey={KEYS.JunctionXPageSubtitle}
                ogImageKey={MEDIA_KEYS.volunteerPageHeaderImage}
            >
                <HeaderSection
                    logo={require("../../../assets/logos/junctionx.png")}
                    body="Hackathons around the globe, with the same Junction mentality."
                >
                    <div>
                        <Button
                            className="Default-button width"
                            to
                            text="Organize JunctionX"
                        />
                    </div>
                </HeaderSection>
                <DividerLine stop />
                <div className="JunctionXPage--planetwrapper">
                    <div className="JunctionXPage--planetwrapper--left">
                        <h2>What is JunctionX?</h2>
                        <p>
                            Junction started out in Finland, but over the years
                            our community has spread worldwide. We wanted to
                            share what we had learned about organizing
                            hackathons, as well as spread the hackathon movement
                            internationally.
                        </p>
                        <p>
                            Since 2018, our teams around the world have created
                            their own hackathons through the JunctionX program:
                            the same Junction mentality, but all events with a
                            personal touch of the local teams.
                        </p>
                    </div>
                    <div className="JunctionXPage--planetwrapper--right">
                        <Planet />
                    </div>
                </div>
                <DividerLine />
                <div className="JunctionXPage--container">
                    <div className="JunctionXPage--container--left">
                        <img
                            src={require("../../../assets/images/junctionx/bryan.png")}
                            width="80%"
                        />
                    </div>
                    <div className="JunctionXPage--container--right">
                        <p>
                            I believe, that if we can have international,
                            cross-border exchanges through events like
                            hackathons, we are bound to create a world where all
                            ideas can become reality.
                        </p>
                        {/* <img
                            src={require("../../../assets/images/quotation.png")}
                        /> */}
                        <p className="notbolded">
                            - Bryan David, JunctionX Singapore{" "}
                        </p>
                    </div>
                </div>

                <div className="JunctionXPage--wrapper">
                    <div className="JunctionXPage--interestedcontainer">
                        <div>
                            <h1>
                                Interested in bringing JunctionX to your own
                                city?
                            </h1>
                        </div>
                        <div className="JunctionXPage--interestedcontainer--wrapper">
                            <div className="JunctionXPage--interestedcontainer--left">
                                <div className="circle">
                                    <img
                                        src={require("../../../assets/images/junctionx/kasper.png")}
                                    />
                                </div>
                            </div>
                            <div className="JunctionXPage--interestedcontainer--right">
                                <p>
                                    Don't hesitate to contact us, if you believe
                                    your home city should have it's very own
                                    JunctionX hackathon as well!
                                </p>

                                <p>
                                    If you're interested in organizing your own
                                    JunctionX hackathon, fill out our JunctionX
                                    organizer application. If you have any
                                    additional questions, feel free to contact
                                    our team member handling our global events:
                                </p>
                                <p className="nomargin">Kasper Henriksson</p>
                                <p className="nomargin">
                                    kasper.henriksson(at)hackjunction.com
                                </p>
                            </div>
                        </div>
                        <div className="JunctionXPage--interestedcontainer--wrapper">
                            <div className="JunctionXPage--interestedcontainer--left">
                                <h3>The selection process</h3>
                            </div>
                            <div className="JunctionXPage--interestedcontainer--right">
                                <p>1. Fill in the application form.</p>
                                <p>2. We'll review your application asap</p>
                                <p>
                                    3. Junction team contacts you for a video
                                    call to talk things further.
                                </p>
                                <p>
                                    4. The process might take several calls and
                                    some time, while we discuss things.
                                </p>
                                <p>
                                    5. After the discussions, we’ll let you know
                                    how we should continue.
                                </p>
                                <p>
                                    6. If you’re accepted into the JunctionX
                                    program, we’ll share the organizer handbook
                                    and other materials with you and warmly
                                    welcome you into the community!
                                </p>
                            </div>
                        </div>
                        <div className="JunctionXPage--interestedcontainer--wrapper">
                            <div className="JunctionXPage--interestedcontainer--left">
                                <h3>What does JunctionX offer?</h3>
                            </div>
                            <div className="JunctionXPage--interestedcontainer--right">
                                <h4>Organizer handbook</h4>
                                <p className="notbolded">
                                    Includes all of our knowledge on our way of
                                    organizing a Junction hackathon. It contains
                                    practical information and instructions on
                                    all aspects of the hackathon.
                                </p>
                                <h4>
                                    Use of our brand & templates to ease your
                                    life
                                </h4>
                                <p className="notbolded">
                                    We have built our brand to a point where it
                                    is one of the most recognised hackathons in
                                    the world. The JunctionX brand will ease
                                    your job in many ways, such as reaching
                                    applicants and partners from our global
                                    community. We also offer website and design
                                    templates, so you can get your event viral
                                    straight away.
                                </p>
                                <h4>
                                    Love & support from othe Junction organizers
                                    💕
                                </h4>
                                <p className="notbolded">
                                    Our team in Finland as well as other
                                    JunctionX organizers are always there to
                                    support you with your own hackathon. We have
                                    an active global organizer community, and
                                    there's always someone to bounce ideas with
                                    and ask questions from.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Page>
        );
    }
}

const mapStateToProps = (state) => ({
    testimonials: volunteerTestimonials(state),
});

export default connect(mapStateToProps)(JunctionXPage);
