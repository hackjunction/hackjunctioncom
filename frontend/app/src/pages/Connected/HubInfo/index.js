import React from "react"
import "./style.scss"

import KEYS from "../../../redux/staticcontent/keys"
import MEDIA_KEYS from "../../../redux/staticmedia/keys"

import SectionImage from "../../../components/SectionImage"
import Page from "../../PageHOC"
import HeaderSection from "../../../components/HeaderSection"
import SingleColumnSection from "../../../components/SingleColumnSection"
import DividerLine from "../../../components/DividerLine"
import Button from "../../../components/Button"
import { Link, Element } from "react-scroll"

export default ({}) => {
    return (
        <Page
            className="Connected ConnectedContent Hubs"
            pageTitle="Hub Info"
            metaDescKey={KEYS.whoAreWeBody}
            ogImageKey={MEDIA_KEYS.homePageHeaderImage}
        >
            <HeaderSection
                title="Hubs"
                body="Participants can join physical hacking hubs or participate in the event online. This global-online approach will make our event more accessible for everyone."
            >
                <Link
                    activeClass="active"
                    to="whatishub"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <Button className="Button-default" text="What is a hub" />
                </Link>
                <Link
                    activeClass="active"
                    to="central"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <Button className="Button-default" text="Central hub" />
                </Link>
                <Link
                    activeClass="active"
                    to="hubstories"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <Button className="Button-default" text="Hub locations" />
                </Link>
            </HeaderSection>
            <DividerLine />
            <SectionImage
                image={{
                    url: require("../../../assets/images/hubs/Stockholm_hub.JPG"),
                }}
                alt="Stockholm hub"
            ></SectionImage>
            <DividerLine />
            <Element name="whatishub" />
            <SingleColumnSection
                title="What is a hub"
                center
                halfpage
                className="ScrollSnapElem"
            >
                <p className="align">
                    A hub is a physical location for all our participants to
                    enjoy. The world's leading hackathon is usually held Espoo,
                    Finland, but who says we cannot bring the venue to your
                    city? We've gathered amazing organizers and spaces for all
                    accepted applicants to join, from Cambridge to New Delhi. If
                    you'd like to help us out by organizing a hub in your
                    co-working space or office, shoot us a mail at
                    hello(at)hackjunction.com!
                </p>
                <p className="align">
                    So gather your friends, and come join us for an awesome
                    weekend!
                </p>
            </SingleColumnSection>
            <DividerLine />
            <SectionImage
                image={{
                    url: require("../../../assets/images/hubs/Helsinki_hub.JPG"),
                }}
                alt="Helsinki hub"
            />
            <DividerLine />
            <Element name="central" />
            <SingleColumnSection
                title="Junction Central Hub"
                subtitle="The organizational hub in Finland"
                halfpage
                center
                className="ScrollSnapElem"
            >
                <p className="align">
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
                image={{
                    url: require("../../../assets/images/hubs/Chengdu_hub.JPG"),
                }}
                alt="Chengdu hub"
            />
            <DividerLine />
            <Element name="hubstories" />

            <SingleColumnSection
                title="Junction Hubs all over the world"
                subtitle="Your official Junction location"
                center
                halfpage
                className="ScrollSnapElem"
            >
                <p className="align">
                    Junction Hubs are locations all over Tellus where you as a
                    participant can apply to join one of our official venues.
                    These are organized by independent remarkable hackathon
                    organizers that we gathered together to join this year's
                    finest online hackathon.
                </p>
            </SingleColumnSection>
            <DividerLine />
            <SectionImage
                image={{
                    url: require("../../../assets/images/hubs/Cambridge_hub.JPG"),
                }}
                alt="Cambridge hub"
            />
            <DividerLine />
            <SingleColumnSection
                center
                halfpage
                title="Junction Partner Hubs"
                subtitle="Offered to you by Junction's official partners"
                className="ScrollSnapElem"
            >
                <p className="align">
                    It doesn't just stop at Junction hubs, we even managed to
                    find outstanding partners that opened up their offices for
                    your team to enjoy a weekend full of coding! At these
                    locations, our partners stand for the physical organisation.
                </p>
            </SingleColumnSection>
        </Page>
    )
}
