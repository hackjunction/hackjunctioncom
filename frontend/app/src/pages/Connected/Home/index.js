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

import { content as selectContent } from "../../../redux/staticcontent/selectors";
import { connect } from "react-redux";

import { Link, Element } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Page from "../../PageHOC";
import Button from "../../../components/Button";

const textsJSON = require("./texts.json");

const ConnectedHome = (props) => {
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
                title={props.HeaderTitle}
                body={props.HeaderBody}
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
                title={props.Section1Title}
                subtitle={props.Section1Body}
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
                title={props.Section2Title}
                subtitle={props.Section2Body}
                extra={
                    <Button
                        className="Button-default"
                        to="/hubs"
                        text="Learn more about hubs"
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
                title={props.Section3Title}
                subtitle={props.Section3Body}
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
                    <h2>{props.YouTubeWrapperTitle}</h2>
                    <h3>{props.YouTubeWrapperBody}</h3>
                    <iframe
                        style={{
                            width: "70%",
                            height: "70%",
                        }}
                        src={props.YouTubeWrapperLink}
                        frameBorder="0"
                    />
                </div>
            </div>
        </Page>
    );
};

const mapStateToProps = (state) => {
    const content = selectContent(state);
    let contentTexts = {};
    for (let key of Object.keys(textsJSON)) {
        //Find key in strapi if exists, else use fallback in texts.json
        contentTexts[key] = content[textsJSON.prefix+key] || textsJSON[key];
    }

    return contentTexts;
};

export default connect(mapStateToProps)(ConnectedHome);
