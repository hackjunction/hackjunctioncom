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

import Page from '../PageHOC';

import * as ContentSelectors from '../../redux/content/selectors';
import * as ContentActions from '../../redux/content/actions';
import * as MediaSelectors from '../../redux/media/selectors';
import MEDIA_KEYS from '../../redux/media/keys';

const OrganisersPage = ({ testimonials, testimonialsShouldUpdate, updateTestimonials, headerImage, kpis = [] }) => {
    useEffect(() => {
        if (testimonialsShouldUpdate) {
            updateTestimonials();
        }
    }, []);

    const testimonial = testimonials.length > 0 ? testimonials[0] : null;
    const secondTestimonial = testimonials.length > 1 ? testimonials[1] : null;

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
                mainTitle={'Bring JunctionX to your city.'}
                bodyText={
                    'Junction provides a unique opportunity to work and interact with thousands of developers for your company. In a mere three years Junction has created a vibrant community of over 20 000 enthusiastic tech talents. Along the journey we have connected our partners with new audiences and helped them to build their own developer community. Junction has grown into an access point to emerging top tech talents from all over the world. In a mere three years Junction has created a vibrant community of over 20 000 enthusiastic tech talents. Along the journey we have connected our partners with new audiences and helped them to build their own developer community.'
                }
            />
            <BlockSection title="What is JunctionX?" subtitle="">
                <p>
                    JunctionX is the entry point on your path to creating your own hackathon. We want to provide you
                    with the necessary tools, guidelines, and especially our JunctionX brand to help you avoid the
                    biggest pitfalls. This way you can concentrate on making your own JunctionX unique for participants,
                    partners and especially for your organising team. We want people to join our community and to
                    empower more people to use technology as a tool to solve problems and face challenges.
                </p>
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
            <SingleColumnSection title="What does JunctionX offer?">
                <BorderedSection
                    title="1. Organizers handbook"
                    content="Tap into all of our knowledge on our way of organizing a Junction hackathon. It contains practical information and instructions on all aspects of the hackathon."
                />
                <BorderedSection
                    title="2. Use of our Brand"
                    content="We have built our brand to a point where it is one of the most recognised hackathons in the world. The JunctionX brand will ease your job in many ways, such as reaching applicants and partners from our global community. Being able to show what we have created in the Nordics will be really valuable on making your own JunctionX a ground-breaking event."
                />
                <BorderedSection
                    title="3. Templates to ease your life"
                    content="Website template and design templates such as poster designs, so you can get your event viral straight away."
                />
            </SingleColumnSection>
            <Divider lg />
            {secondTestimonial ? (
                <React.Fragment>
                    <ImageBlockSection
                        image={secondTestimonial.image}
                        imageAlt={secondTestimonial.name}
                        title={secondTestimonial.name}
                        subtitle={secondTestimonial.subtitle}
                    >
                        <p>{secondTestimonial.quote}</p>
                    </ImageBlockSection>
                    <Divider lg />
                </React.Fragment>
            ) : (
                <DebugPlaceholder
                    title="Organiser testimonial"
                    description="The second testimonial of type 'organiser' will be shown here"
                />
            )}
            <BlockSection title="What makes us different?">
                <p>
                    Nam tellus tortor, consectetur sed elementum non, consectetur varius libero. Aliquam venenatis lacus
                    luctus, eleifend libero commodo, suscipit nisi. Aliquam erat volutpat. Vivamus dignissim eros quis
                    gravida vulputate. Nam viverra massa ut purus dapibus, eget dapibus eros vulputate. Sed eget erat
                    aliquet, blandit purus venenatis, pulvinar lorem. Aliquam lectus tortor, fermentum non elit aliquet,
                    tristique viverra eros. Sed eget vulputate eros. Aenean congue volutpat neque, scelerisque gravida
                    felis lobortis nec. Duis sed pretium ante, at porttitor risus.
                </p>
            </BlockSection>
            <Divider lg />
            <BlockSection title="Partners" subtitle="Some of our partners from previous years">
                <p>
                    Nam tellus tortor, consectetur sed elementum non, consectetur varius libero. Aliquam venenatis lacus
                    luctus, eleifend libero commodo, suscipit nisi. Aliquam erat volutpat. Vivamus dignissim eros quis
                    gravida vulputate. Nam viverra massa ut purus dapibus, eget dapibus eros vulputate. Sed eget erat
                    aliquet, blandit purus venenatis, pulvinar lorem. Aliquam lectus tortor, fermentum non elit aliquet,
                    tristique viverra eros. Sed eget vulputate eros. Aenean congue volutpat neque, scelerisque gravida
                    felis lobortis nec. Duis sed pretium ante, at porttitor risus.
                </p>
            </BlockSection>
            <Divider lg />
            <BlockSection title="Join the community" subtitle="Shoot us a message! We'll be sure to answer asap.">
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
    kpis: ContentSelectors.kpisOfType('organiser')(state)
});

const mapDispatchToProps = dispatch => ({
    updateTestimonials: () => dispatch(ContentActions.updateTestimonials())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrganisersPage);
