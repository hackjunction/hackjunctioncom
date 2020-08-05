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
                title={props.headerTitle}
                body={props.headerBody}
            >
                <div className="Button-row">
                    <Button
                        className="Button-small"
                        to="/info"
                        text={props.headerButton1}
                    />

                    <Button
                        className="Button-small"
                        to="https://hackjunction.com/partners"
                        text={props.headerButton2}
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
                title={props.sectionTitle1}
                subtitle={props.sectionBody1}
                extra={
                    <Button
                        className="Button-default"
                        to="/info"
                        text={props.section1Button1}
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
                title={props.sectionTitle2}
                subtitle={props.sectionBody2}
                extra={
                    <Button
                        className="Button-default"
                        to="/hubs"
                        text={props.section2Button1}
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

const mapStateToProps = (state) => {
    const content = selectContent(state);

    return {
        headerTitle: content["ConnectedHomeHeaderTitle"],
        headerBody: content["ConnectedHomeHeaderBody"],
        headerButton1: content["ConnectedHomeHeaderButton1"],
        headerButton2: content["ConnectedHomeHeaderButton2"],
        sectionTitle1: content["ConnectedHomeSectiont1Title"],
        sectionBody1: content["ConnectedHomeSection1Body"],
        section1Button1: content["ConnectedHomeSection1Button1"],
        sectionTitle2: content["ConnectedHomeSection2Title"],
        sectionBody2: content["ConnectedHomeSection2Body"],
        section2Button1: content["ConnectedHomeSection2Button1"],
    };
};

export default connect(mapStateToProps)(ConnectedHome);
