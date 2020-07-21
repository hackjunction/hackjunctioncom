import React from "react"
import "./style.scss"

import KEYS from "../../../redux/staticcontent/keys"
import MEDIA_KEYS from "../../../redux/staticmedia/keys"

import SectionImage from "../../../components/SectionImage"
import NewsLetterForm from "../../../components/NewsLetterForm"
import BlockSection from "../../../components/BlockSection"
import Timeline from "../Components/Timeline"
import DividerLine from "../../../components/DividerLine"
import HeaderSection from "../../../components/HeaderSection"
import HeaderVideo from "../../../components/HeaderVideo"

import { Link, Element } from "react-scroll"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Page from "../../PageHOC"
import Button from "../../../components/Button"

const ConnectedHome = ({}) => {
    return (
        <Page
            metaDescKey={KEYS.whoAreWeBody}
            className="Connected ConnectedContent ConnectedHome"
            pageTitle="Hack the Future"
            metaDescKey={KEYS.whoAreWeBody}
            ogImageKey={MEDIA_KEYS.ConnectedHeaderImage}
        >
            <div className="Connected-parallax">
                <Link
                    activeClass="active"
                    to="mainContent"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <FontAwesomeIcon
                        icon="angle-down"
                        size="4x"
                        color="#f5d2a2"
                    />
                </Link>
                <HeaderVideo />
            </div>
            <DividerLine />
            <Element name="mainContent" />
            <HeaderSection
                className="ScrollSnapElem"
                logo={require("../../../assets/logos/connected_logo.svg")}
                title="6-8 November"
                body="A hackathon like no other, gathering people all over the
                    world to simultaneously hack in both physical locations and
                    online."
            >
                <div className="Button-row">
                    <Button
                        className="Button-small"
                        to="/info"
                        text="Event info"
                    />

                    <Button
                        className="Button-small"
                        to="https://hackjunction.com/partners"
                        text="Partner with us"
                    />
                </div>
            </HeaderSection>
            <DividerLine />
            <SectionImage
                image={{
                    url: require("../../../assets/images/connected/landing.JPG"),
                }}
                alt="Junction 2020 Connected"
            />
            <DividerLine />

            <BlockSection
                className="ScrollSnapElem"
                halfpage
                title="Introducing Hubs"
                subtitle="Junction 2020 Connected is a new take on the established
                        concept of a hackathon; participants all over the world
                        can join physical locations hosted by Junction and other
                        organizations, or participate in the event fully online."
                extra={
                    <Button
                        className="Button-default"
                        to="/hubs"
                        text="Learn more about Hubs"
                    />
                }
            >
                <img
                    src={require("../../../assets/images/photo-hub-visualisation.svg")}
                    alt="connected-logo-here"
                />
            </BlockSection>
            <BlockSection
                halfpage
                inverted
                title="30 countries, 1 hackathon"
                subtitle="The local hubs give the concept of a normal online
                        hackathon a twist by increasing the sense of community
                        and making physical interaction possible when needed.
                        Check out your nearest hub or organize one yourself!"
                extra={
                    <Button
                        className="Button-default"
                        to="/hubs"
                        text="Hub locations"
                    />
                }
            >
                <img
                    src={require("../../../assets/images/hub_globe.svg")}
                    alt="connected-logo-here"
                />
            </BlockSection>
            <DividerLine />
            <BlockSection
                title="Be the bird"
                className="TimeLineSection ScrollSnapElem Footer RemoveBorder"
            >
                <NewsLetterForm />
            </BlockSection>
            <DividerLine />
            <BlockSection
                title="The Junction Journey"
                className="TimeLineSection ScrollSnapElem"
                extra={
                    <img
                        src={require("../../../assets/images/3part-chain.svg")}
                        alt="connected-logo-here"
                    />
                }
            >
                <Timeline date="September 1st">
                    Application period begins
                </Timeline>
                <Timeline date="October 1st">
                    Virtual matchmaking begins
                </Timeline>
                <Timeline date="October 9th">Application period ends</Timeline>
                <Timeline date="October 18th">
                    Deadline for participants to confirm their place
                </Timeline>
                <Timeline date="November 6th">
                    Junction 2020 Connected begins
                </Timeline>
                <Timeline date="November 8th" last>
                    Junction 2020 Connected ends
                </Timeline>
            </BlockSection>
        </Page>
    )
}

export default ConnectedHome
