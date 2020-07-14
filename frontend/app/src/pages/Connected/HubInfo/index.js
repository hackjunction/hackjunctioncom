import React from "react";
import "./style.scss";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import SectionImage from "../../../components/SectionImage";
import Page from "../../PageHOC";
import HeaderSection from "../../../components/HeaderSection";
import SingleColumnSection from "../../../components/SingleColumnSection";
import DividerLine from "../../../components/DividerLine";
import SmallButton from "../../../components/SmallButton";
import Planet from "../../../components/Planet";

export default ({}) => {
    return (
        <Page
            className="Connected ScrollSnap"
            pageTitle="Hub Info"
            metaDescKey={KEYS.whoAreWeBody}
            ogImageKey={MEDIA_KEYS.homePageHeaderImage}
        >
            <HeaderSection
                title="Hubs"
                body="Junction 2020 Connected is a new take on the established concept of a hackathon; participants all over the world can join physical locations hosted by Junction and other organizations, or participate in the event online. This global-online approach will make our event more accessible, especially during these unusual times."
            >
                <SmallButton
                    className="Connected-blue-button"
                    text="Hub locations"
                />
                <SmallButton
                    className="Connected-blue-button"
                    text="What is a hub"
                />

                <SmallButton
                    className="Connected-blue-button"
                    text="Hub stories"
                />
            </HeaderSection>
            <DividerLine />
            <SectionImage
                imageKey={MEDIA_KEYS.homePageHeaderImage}
                alt="Header image"
            ></SectionImage>
            <DividerLine />
            <SingleColumnSection title="What is a hub" center halfpage>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </SingleColumnSection>
            <DividerLine />
            <SectionImage
                imageKey={MEDIA_KEYS.homePageHeaderImage}
                alt="Header image"
            />
            <DividerLine stop />
            <SingleColumnSection
                title="Junction Central Hub"
                subtitle="The organizational hub in Finland"
                halfpage
                center
            >
                <p>
                    The central hub is the origin of the challenges and from
                    where Junction coordinates the world's leading hackathon of
                    2020. The stream-studio connecting all the hubs over the
                    world is located at the central hub. The hub is located in
                    the Helsinki metropolitan area, Finland and requires an
                    application to be eligible for attendance. Up to 350
                    participants hack at the central hub and meet the main
                    partners there.
                </p>
            </SingleColumnSection>
            <DividerLine />
            <SectionImage
                imageKey={MEDIA_KEYS.homePageHeaderImage}
                alt="Header image"
            />
            <DividerLine stop />
            <SingleColumnSection
                title="Junction Hubs all over the world"
                subtitle="Your official Junction location"
                center
                halfpage
            >
                <p>
                    Junction Hubs are locations all over Tellus where you as a
                    participant can apply to join one of our official venues.
                    These are organized by independent remarkable hackathon
                    organizers that we gathered together to join this year's
                    finest online hackathon.
                </p>
                <p>
                    Junction Hubs are locations all over Tellus where you as a
                    participant can apply to join one of our official venues.
                    These are organized by independent remarkable hackathon
                    organizers that we gathered together to join this year's
                    finest online hackathon.
                </p>
            </SingleColumnSection>
            <DividerLine stop />
            <SectionImage
                imageKey={MEDIA_KEYS.homePageHeaderImage}
                alt="Header image"
            />
            <DividerLine stop />
            <SingleColumnSection
                center
                halfpage
                title="Junction Partner Hubs"
                subtitle="Offered to you by Junction's official partners"
            >
                <p>
                    It doesn't just stop at Junction hubs, we even managed to
                    find outstanding partners that opened up their offices for
                    your team to enjoy a weekend full of coding! At these
                    locations, our partners stand for the physical organisation.
                </p>
            </SingleColumnSection>
        </Page>
    );
};
