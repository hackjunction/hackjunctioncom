import React, { PureComponent, Suspense } from "react";
import "./style.scss";

import KEYS from "../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../redux/staticmedia/keys";

import Divider from "../../components/Divider";

import SectionImage from "../../components/SectionImage";
import Planet from "../../components/Planet";

import CenteredBlock from "../../components/CenteredBlock";
import EventCalendar from "../../components/EventCalendar";

import Page from "../PageHOC";
import LinkButton from "../../components/LinkButton/index";

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
                <CenteredBlock>
                    <div className="HomePage--TopContent">
                        <img
                            className="HomePage--logo"
                            src={require("../../assets/logos/text_black.png")}
                            alt="junction-wordmark"
                        />
                        <h3 className="HomePage-subtitle">
                            We organize epic hackathons and other tech events -
                            around the world, around the year.
                        </h3>
                        <LinkButton to text="Read More " />
                        <Divider sm />
                        <LinkButton to text="Junction App" />
                        <Divider sm />
                        <LinkButton to text="Organize a hackathon" />
                        <Divider sm />
                        <br />
                        <LinkButton to text="Junction 2020 Connected" />
                        <Divider sm />
                    </div>
                </CenteredBlock>
                <SectionImage
                    imageKey={MEDIA_KEYS.homePageHeaderImage}
                    alt="Header image"
                ></SectionImage>
                <Planet />
                <SectionImage
                    imageKey={MEDIA_KEYS.homePageHackingImage}
                    alt="People attending a hackathon"
                ></SectionImage>
                <h1>Upcoming events</h1>
                <EventCalendar />
                <SectionImage
                    imageKey={MEDIA_KEYS.homePageCommunityImage}
                    alt="Junction Community"
                ></SectionImage>
            </Page>
        );
    }
}

export default HomePage;
