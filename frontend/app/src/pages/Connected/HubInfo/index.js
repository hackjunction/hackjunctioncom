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
                    enjoy. Junction is usually held Espoo, Finland, to where
                    participants have travelled from all around the world. This
                    year, we have turned the tables, by bringing the event chez
                    you. We've gathered amazing organizers and spaces for all
                    accepted applicants to join, from Cambridge to New Delhi. If
                    you'd like to join the community by organizing a hub
                    yourself, shoot us a message at hello(at)hackjunction.com!
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
                subtitle="The organizational hub located in the center of  well Finland"
                halfpage
                center
                className="ScrollSnapElem"
            >
                <p className="align">
                    The Central hub is from where Junction will coordinate the
                    world's leading hackathon of 2020 and the stream studio
                    which connects all the hub will be hosted from at the
                    central hub. For once, Finland gets to be the center of
                    anything, as the Central Hub is located in the Helsinki
                    metropolitan area. To be eligible for attendance, you need
                    to apply for the hub separately.
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
                    Junction Hubs are locations all over Tellus, to which you
                    can apply to or join freely, depending on the hub. These
                    official hacking centers are organized by independent,
                    remarkable hackathon organizers who have taken action and
                    joined to build this year's finest hackathon.
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
                subtitle="Brought to you by Junction's official partners"
                className="ScrollSnapElem"
            >
                <p className="align">
                    Some of our outstanding partners will open up their work
                    spaces for your team to enjoy a weekend full of hacking! The
                    best part? You could be hacking at your future office.
                </p>
            </SingleColumnSection>
        </Page>
    )
}
