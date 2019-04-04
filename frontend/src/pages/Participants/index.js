import React, { PureComponent } from 'react';
import './style.scss';

import { connect } from 'react-redux';

import KEYS from '../../redux/staticcontent/keys';
import MEDIA_KEYS from '../../redux/staticmedia/keys';

import HeaderImage from '../../components/HeaderImage';
import BasicHeader from '../../components/HeaderImage/BasicHeader';
import BlockSection from '../../components/BlockSection';
import RomanNumeralList from '../../components/RomanNumeralList';
import ImageBlockSection from '../../components/ImageBlockSection';
import Divider from '../../components/Divider';
import Markdown from '../../components/Markdown';
import NewsLetterForm from '../../components/NewsLetterForm';

import Page from '../PageHOC';

import {
    participantTestimonials,
} from '../../redux/testimonials/selectors';

class ParticipantsPage extends PureComponent {
    render() {

        const { testimonials } = this.props;
        const testimonial = testimonials.length > 0 ? testimonials[0] : null;

        return (
            <Page className="ParticipantsPage" pageTitle="For participants" metaDescKey={KEYS.participantsPageSubtitle}>
                <HeaderImage
                    imageKey={MEDIA_KEYS.participantPageHeaderImage}
                    alt="Header image"
                >
                    <BasicHeader titleKey={KEYS.participantsPageTitle} bodyKey={KEYS.participantsPageSubtitle} />
                </HeaderImage>
                <BlockSection titleKey={KEYS.howToJoinTitle} subtitleKey={KEYS.howToJoinSubtitle}>
                    <RomanNumeralList itemKeys={[
                        KEYS.howToJoinStepOne,
                        KEYS.howToJoinStepTwo,
                        KEYS.howToJoinStepThree,
                        KEYS.howToJoinStepFour,
                        KEYS.howToJoinStepFive
                    ]} />
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
                <BlockSection titleKey={KEYS.getHiredTitle} subtitleKey={KEYS.getHiredSubtitle}>
                    <Markdown sourceKey={KEYS.getHiredBody} />
                </BlockSection>
                <Divider lg />
                <NewsLetterForm />
                <Divider lg />
            </Page>
        )
    }
}

const mapStateToProps = state => ({
    testimonials: participantTestimonials(state),
});

export default connect(
    mapStateToProps
)(ParticipantsPage);
