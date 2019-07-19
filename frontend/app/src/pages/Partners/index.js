import React, { PureComponent } from 'react';
import './style.scss';

import { connect } from 'react-redux';

import KEYS from '../../redux/staticcontent/keys';
import MEDIA_KEYS from '../../redux/staticmedia/keys';

import HeaderImage from '../../components/HeaderImage';
import BasicHeader from '../../components/HeaderImage/BasicHeader';
import BlockSection from '../../components/BlockSection/';
import ImageBlockSection from '../../components/ImageBlockSection/';
import SingleColumnSection from '../../components/SingleColumnSection/';
import BorderedSection from '../../components/BorderedSection/';
import ContactForm from '../../components/ContactForm/';
import StatBlocks from '../../components/StatBlocks';
import Divider from '../../components/Divider';
import Markdown from '../../components/Markdown';
import PartnerLogoGrid from '../../components/LinkGrid/PartnerLogoGrid';
import LinkButton from '../../components/LinkButton';

import Page from '../PageHOC';
import CenteredBlock from '../../components/CenteredBlock/index';

import { partnerTestimonials } from '../../redux/testimonials/selectors';

class PartnersPage extends PureComponent {
    constructor(props) {
        super(props);

        this.scrollToContact = this.scrollToContact.bind(this);
        this.contactForm = null;
    }

    scrollToContact() {
        if (this.contactForm) {
            window.scrollTo({ top: this.contactForm.offsetTop - 100, left: 0, behavior: 'smooth' });
        }
    }

    render() {
        const { testimonials } = this.props;
        const firstTestimonial = testimonials.length > 0 ? testimonials[0] : null;
        const secondTestimonial = testimonials.length > 1 ? testimonials[1] : null;

        return (
            <Page
                className="PartnersPage"
                pageTitle="For partners"
                metaDescKey={KEYS.partnersPageSubtitle}
                ogImageKey={MEDIA_KEYS.partnerPageHeaderImage}
            >
                <HeaderImage imageKey={MEDIA_KEYS.partnerPageHeaderImage} alt="Header image">
                    <BasicHeader titleKey={KEYS.partnersPageTitle} bodyKey={KEYS.partnersPageSubtitle} />
                </HeaderImage>
                <BlockSection titleKey={KEYS.partnersPageFirstTitle} subtitleKey={KEYS.partnersPageFirstSubtitle}>
                    <Markdown sourceKey={KEYS.partnersPageFirstBody} />
                    <StatBlocks type="partner" />
                </BlockSection>
                <Divider lg />
                {firstTestimonial ? (
                    <React.Fragment>
                        <ImageBlockSection
                            image={firstTestimonial.image}
                            imageAlt={firstTestimonial.name}
                            title={firstTestimonial.name}
                            subtitle={firstTestimonial.subtitle}
                        >
                            <Markdown source={firstTestimonial.quote} />
                        </ImageBlockSection>
                        <Divider lg />
                    </React.Fragment>
                ) : null}
                <BlockSection titleKey={KEYS.contactFormTitle}>
                    <Markdown sourceKey={KEYS.contactFormSubtitle} />
                    <LinkButton to="#" text="Get in touch" onClick={this.scrollToContact} />
                </BlockSection>
                <Divider lg />
                <SingleColumnSection titleKey={KEYS.whyPartnerWithUsTitle}>
                    <BorderedSection
                        titleKey={KEYS.whyPartnerWithUsFirstTitle}
                        contentKey={KEYS.whyPartnerWithUsFirstBody}
                    />
                    <BorderedSection
                        titleKey={KEYS.whyPartnerWithUsSecondTitle}
                        contentKey={KEYS.whyPartnerWithUsSecondBody}
                    />
                    <BorderedSection
                        titleKey={KEYS.whyPartnerWithUsThirdTitle}
                        contentKey={KEYS.whyPartnerWithUsThirdBody}
                    />
                </SingleColumnSection>
                <Divider lg />
                <React.Fragment>
                    <CenteredBlock>
                        <Markdown sourceKey={KEYS.partnersPageVideo} />
                    </CenteredBlock>
                    <Divider lg />
                </React.Fragment>
                {secondTestimonial ? (
                    <React.Fragment>
                        <ImageBlockSection
                            image={secondTestimonial.image}
                            imageAlt={secondTestimonial.name}
                            title={secondTestimonial.name}
                            subtitle={secondTestimonial.subtitle}
                        >
                            <Markdown source={secondTestimonial.quote} />
                        </ImageBlockSection>
                        <Divider lg />
                    </React.Fragment>
                ) : null}
                <BlockSection titleKey={KEYS.whatMakesUsDifferentTitle} subtitleKey={KEYS.whatMakesUsDifferentSubtitle}>
                    <Markdown sourceKey={KEYS.whatMakesUsDifferentBody} />
                </BlockSection>
                <Divider lg />
                <BlockSection titleKey={KEYS.previousPartnersTitle} subtitleKey={KEYS.previousPartnersSubtitle}>
                    <PartnerLogoGrid />
                </BlockSection>
                <Divider lg />
                <div ref={ref => (this.contactForm = ref)} />
                <ContactForm />
                <Divider lg />
                <BlockSection title="Community support partner" subtitle="Become a community support partner">
                    <p>
                        Can't partner with us but want to support the community and see what Junction is all about? We
                        offer a community support package for companies and individuals. All proceeds will be used
                        towards building an even better event for our most important customers: the hackers. Check out
                        the link below for more information:
                    </p>
                    <Divider sm />
                    <LinkButton to="https://holvi.com/shop/junction/" isExternal text="To the store" />
                </BlockSection>
                <Divider lg />
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    testimonials: partnerTestimonials(state)
});

export default connect(mapStateToProps)(PartnersPage);
