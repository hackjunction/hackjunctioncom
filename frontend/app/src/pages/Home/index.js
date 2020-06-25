import React, { PureComponent, Suspense } from "react";
import "./style.scss";

import KEYS from "../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../redux/staticmedia/keys";

import BlockSection from "../../components/BlockSection";
import StatBlocks from "../../components/StatBlocks";
import Divider from "../../components/Divider";
import Markdown from "../../components/Markdown";
import CenteredBlock from "../../components/CenteredBlock";
import PartnerLogoGrid from "../../components/LinkGrid/PartnerLogoGrid";
import StoryGrid from "../../components/LinkGrid/StoryGrid";
import HeaderImage from "../../components/HeaderImage";
import BasicHeader from "../../components/HeaderImage/BasicHeader";
import Planet from "../../components/Planet";

import Page from "../PageHOC";
import LinkButton from "../../components/LinkButton/index";
import Button from "../../components/Button";
const EventsMap = React.lazy(() => import("../../components/EventsMap"));

const BOTTOM_LINKS = [
    {
        imageKey: MEDIA_KEYS.calendarPageHeaderImage,
        imageAlt: "Link",
        linkTo: "/calendar",
        linkText: "Calendar",
    },
    {
        imageKey: MEDIA_KEYS.partnerPageHeaderImage,
        imageAlt: "Link",
        linkTo: "/partners",
        linkText: "For partners",
    },
    {
        imageKey: MEDIA_KEYS.volunteerPageHeaderImage,
        imageAlt: "Link",
        linkTo: "/volunteers",
        linkText: "For volunteers",
    },
];

class HomePage extends PureComponent {
    render() {
        return (
            <Page
                className="HomePage"
                pageTitle="Hack the Future"
                metaDescKey={KEYS.whoAreWeBody}
                ogImageKey={MEDIA_KEYS.homePageHeaderImage}
            >
                <div className="HomePage--TopContent">
                    <img
                        className="HomePage--logo"
                        src={require("../../assets/logos/text_black.png")}
                        alt="junction-wordmark"
                    />
                    <p className="HomePage-subtitle">
                        We organise epic hackathons etc
                    </p>
                    <Button text="Read More"></Button>
                    <Divider sm />
                    <LinkButton to text="Junction App" />
                    <Divider sm />
                    <LinkButton to text="Organize a hackathon" />
                    <Divider sm />
                    <br />
                    <LinkButton to text="Junction 2020 Connected" />
                    <Divider sm />
                </div>
                <HeaderImage
                    imageKey={MEDIA_KEYS.participantPageHeaderImage}
                    alt="Header image"
                >
                    <BasicHeader
                        titleKey={KEYS.participantsPageTitle}
                        bodyKey={KEYS.participantsPageSubtitle}
                    />
                </HeaderImage>
                <h3>Tähän Visan planeettaprojekti</h3>
                <Planet />
                <Divider lg />
                <HeaderImage
                    imageKey={MEDIA_KEYS.participantPageHeaderImage}
                    alt="Header image"
                >
                    <BasicHeader
                        titleKey={KEYS.participantsPageTitle}
                        bodyKey={KEYS.participantsPageSubtitle}
                    />
                </HeaderImage>
                <Divider lg />
                <BlockSection
                    titleKey={KEYS.previousPartnersTitle}
                    subtitleKey={KEYS.previousPartnersSubtitle}
                >
                    <PartnerLogoGrid />
                    <Divider sm />
                    <LinkButton to="/partners" text="More about partnering" />
                </BlockSection>
                <Divider lg />
                <BlockSection
                    titleKey={KEYS.storiesAboutUsTitle}
                    subtitleKey={KEYS.storiesAboutUsSubtitle}
                >
                    <StoryGrid />
                </BlockSection>
            </Page>
        );
    }
}

export default HomePage;
