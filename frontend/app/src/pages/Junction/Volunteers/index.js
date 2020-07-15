import React, { PureComponent } from "react";
import "./style.scss";

import { connect } from "react-redux";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import HeaderSection from "../../../components/HeaderSection";
import SectionImage from "../../../components/SectionImage";
import Button from "../../../components/Button";
import DividerLine from "../../../components/DividerLine";
import SingleColumnSection from "../../../components/SingleColumnSection";

import Page from "../../PageHOC";

import { volunteerTestimonials } from "../../../redux/testimonials/selectors";

class VolunteersPage extends PureComponent {
    render() {
        const { testimonials } = this.props;
        const testimonial = testimonials.length > 0 ? testimonials[0] : null;

        return (
            <Page
                className="VolunteersPage Junction-Default"
                pageTitle="For volunteers"
                metaDescKey={KEYS.volunteersPageSubtitle}
                ogImageKey={MEDIA_KEYS.volunteerPageHeaderImage}
            >
                <HeaderSection
                    title="Join the Junction family."
                    body="We are Junction – a volunteer-lead community effort around the world. Our headquarters is located in Finland, but the Junction team spreads out all around the globe. The thing that connects us all? A passion for empowering people to create with technology. Join us!"
                >
                    <div>
                        <Button
                            className="Default-button width"
                            to
                            text="Fill the volunteer form"
                        />
                        <Button
                            className="Default-button width"
                            to
                            text="Become a JunctionX organizer"
                        />
                    </div>
                </HeaderSection>
                <DividerLine />
                <SectionImage
                    imageKey={MEDIA_KEYS.homePageHeaderImage}
                    alt="Header image"
                />
                <DividerLine />
                <SingleColumnSection halfpage>
                    <div className="VolunteersPage--container--left">
                        <img
                            src={require("../../../assets/images/volunteers/volunteer.png")}
                            width="80%"
                        />
                    </div>
                    <div className="VolunteersPage--container--right">
                        <p>
                            By volunteering in Junction you get to work with an
                            incredible team and meet inspiring people from all
                            over the world. Working in the main event is
                            rewarding and the atmosphere is very unique and
                            intensive in a good way. It’s not only about
                            volunteering, it’s the whole experience.
                        </p>
                        {/* <img
                            src={require("../../../assets/images/quotation.png")}
                        /> */}
                        <p className="notbolded">
                            - Nora Nummentalo & Berit Aliforsti, Cloakroom 2019
                        </p>
                    </div>
                </SingleColumnSection>
                <DividerLine />
                <SectionImage
                    imageKey={MEDIA_KEYS.homePageHeaderImage}
                    alt="Header image"
                />
                <DividerLine />
                <SingleColumnSection halfpage>
                    <div className="VolunteersPage--lowercontainer--upper">
                        <div className="VolunteersPage--lowercontainer--upper--left">
                            <h1>A diverse team</h1>
                            <h3>
                                Ambitious and enthusiastic people are at the
                                core of everything we do.
                            </h3>
                        </div>
                        <div className="VolunteersPage--lowercontainer--upper--right">
                            <p>
                                Our volunteers are involved in all parts of the
                                production, from partnership and website teams
                                to marketing and branding. As a volunteer you
                                get a unique opportunity to learn how to
                                organize world-class events and a chance to join
                                an awesome community of people from all over the
                                world. What do we expect from you? Nothing but
                                enthusiasm and eagerness to learn.
                            </p>
                        </div>
                    </div>
                    <div className="VolunteersPage--lowercontainer--down">
                        <div className="VolunteersPage--lowercontainer--down--left">
                            <h1>Why volunteering?</h1>
                        </div>
                        <div className="VolunteersPage--lowercontainer--down--right">
                            <p>
                                Our volunteers are involved in all parts of the
                                production, from partnership and website teams
                                to marketing and branding. As a volunteer you
                                get a unique opportunity to learn how to
                                organize world-class events and a chance to join
                                an awesome community of people from all over the
                                world. What do we expect from you? Nothing but
                                enthusiasm and eagerness to learn.
                            </p>
                        </div>
                    </div>
                </SingleColumnSection>
                <DividerLine />
                <SectionImage
                    imageKey={MEDIA_KEYS.homePageHeaderImage}
                    alt="Header image"
                />
                <DividerLine />
                <SingleColumnSection halfpage>
                    <div className="VolunteersPage--interestedcontainer">
                        <div>
                            <h1>Interested in joining?</h1>
                        </div>
                        <div>
                            <Button
                                text="Fill the volunteer form"
                                to
                                className="Default-button"
                            />
                        </div>

                        <div>
                            <p>
                                If you have any questions regarding volunteering
                                at Junction, you can send a message to our Head
                                of People, Veera Kallio, through email
                                veera.kallio(at)hackjunction.com
                            </p>
                        </div>
                        <div className="VolunteersPage--interestedcontainer--row">
                            <div>
                                <img
                                    src={require("../../../assets/images/volunteers/veera.png")}
                                />
                            </div>
                            <div className="VolunteersPage--veera-box">
                                <p className="VolunteersPage--name">
                                    Veera Kallio
                                </p>
                                <p className="VolunteersPage--mail">
                                    veera.kallio(at)hackjunction.com
                                </p>
                            </div>
                        </div>
                    </div>
                </SingleColumnSection>
            </Page>
        );
    }
}

const mapStateToProps = (state) => ({
    testimonials: volunteerTestimonials(state),
});

export default connect(mapStateToProps)(VolunteersPage);
