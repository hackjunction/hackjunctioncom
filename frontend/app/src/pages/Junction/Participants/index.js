import React, { PureComponent } from "react";
import "./style.scss";

import { connect } from "react-redux";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import HeaderSection from "../../../components/HeaderSection";
import SectionImage from "../../../components/SectionImage";
import ImageBlockSection from "../../../components/ImageBlockSection";
import DividerLine from "../../../components/DividerLine";
import Markdown from "../../../components/Markdown";
import EventCalendar from "../../../components/EventCalendar";

import Page from "../../PageHOC";

import { participantTestimonials } from "../../../redux/testimonials/selectors";
import SingleColumnSection from "../../../components/SingleColumnSection";

class ParticipantsPage extends PureComponent {
    render() {
        const { testimonials } = this.props;
        const testimonial = testimonials.length > 0 ? testimonials[0] : null;

        return (
            <Page
                className="ParticipantsPage"
                pageTitle="For participants"
                metaDescKey={KEYS.participantsPageSubtitle}
                ogImageKey={MEDIA_KEYS.participantPageHeaderImage}
            >
                <HeaderSection />
                <DividerLine />
                <SectionImage
                    image={{
                        url: require("../../../assets/images/connected_main.jpg"),
                    }}
                    alt="Header image"
                ></SectionImage>
                <DividerLine stop />
                <SingleColumnSection center>
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
                        </React.Fragment>
                    ) : null}
                    <EventCalendar title="Upcoming events" hideOnEmpty={true} />
                </SingleColumnSection>
            </Page>
        );
    }
}

const mapStateToProps = (state) => ({
    testimonials: participantTestimonials(state),
});

export default connect(mapStateToProps)(ParticipantsPage);
