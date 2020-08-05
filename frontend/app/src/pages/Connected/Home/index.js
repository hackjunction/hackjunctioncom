import React from "react";
import "./style.scss";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import SectionImage from "../../../components/SectionImage";
import NewsLetterForm from "../../../components/NewsLetterForm";
import BlockSection from "../../../components/BlockSection";
import Timeline from "../Components/Timeline";
import DividerLine from "../../../components/DividerLine";
import HeaderSection from "../../../components/HeaderSection";
import HeaderVideo from "../../../components/HeaderVideo";

import { Link, Element } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Page from "../../PageHOC";
import Button from "../../../components/Button";

import { content as selectContent } from "../../redux/staticcontent/selectors";

const ConnectedHome = ({ state }) => {
    return (
        <Page
            metaDescKey={KEYS.whoAreWeBody}
            className="Connected ConnectedContent ConnectedHome"
            pageTitle="Junction 2020 Connected"
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
                <HeaderVideo
                    src={require("../../../assets/videos/J2020C_Animation_Main.mp4")}
                />
            </div>
            <DividerLine />
            <Element name="mainContent" />
            <HeaderSection
                className="ScrollSnapElem wholePage"
                logo={require("../../../assets/logos/connected_logo.svg")}
                title={content["WhoAreWeBody"]}
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
                    url: require("../../../assets/images/connected/website5.jpg"),
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
                        to="/info"
                        text="Learn more about the event"
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
                        text="Learn more about Hubs"
                    />
                }
            >
                <img
                    src={require("../../../assets/images/hub_globe.svg")}
                    alt="connected-logo-here"
                />
            </BlockSection>
            <div className="hide">
                {" "}
                <DividerLine />
            </div>

            <BlockSection
                halfpage
                title="Stay connected."
                subtitle="Sign up and be the first one to hear all the news."
                className="ScrollSnapElem Footer RemoveBorder"
                extra={
                    <div className="RemoveBorder--flex">
                        <NewsLetterForm />
                    </div>
                }
            >
                <img
                    src={require("../../../assets/images/3part-chain.svg")}
                    alt="connected-logo-here"
                />
            </BlockSection>
            <DividerLine />

            <div className="YouTube--wrapper">
                <div className="YouTube--inside">
                    <h2>An experience like no other.</h2>
                    <h3>
                        It’s epic, we promise. More information to come. While
                        waiting, check out last year’s after movie.
                    </h3>
                    <iframe
                        style={{
                            width: "70%",
                            height: "70%",
                        }}
                        src={`https://www.youtube.com/embed/O2BCwUS6B7Q?vq=hd1080`}
                        frameBorder="0"
                    />
                </div>
            </div>
        </Page>
    );
};
