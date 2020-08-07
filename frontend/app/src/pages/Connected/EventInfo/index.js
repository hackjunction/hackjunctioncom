import React from "react"
import "./style.scss"

import { Link, Element, animateScroll as scroll } from "react-scroll"

import KEYS from "../../../redux/staticcontent/keys"
import MEDIA_KEYS from "../../../redux/staticmedia/keys"

import SectionImage from "../../../components/SectionImage"
import Page from "../../PageHOC"
import HeaderSection from "../../../components/HeaderSection"
import SingleColumnSection from "../../../components/SingleColumnSection"
import BlockSection from "../../../components/BlockSection"
import DividerLine from "../../../components/DividerLine"
import Button from "../../../components/Button"

import Timeline from "../Components/Timeline"
import FaqSection from "../Components/FaqSection"

import { connect } from "react-redux";
import { faq as selectQuestions } from "../../../redux/faq/selectors";

const itemsOld = [
    {
        title: "General",
        questions: [],
    },
    {
        title: "Schedule",
        questions: [
            {
                question:
                    "When and where will Junction 2020 Connected take place?",
                answer:
                    "The hackathon will take place November 6th to 8th and it will be all-digital, with an addition of physical hacking hubs all around the world. The Central Hub with 350 participants - where also the main stream-studio and the main partners are located - will be in the Helsinki area.",
                key: "1",
            },

            {
                question: "When is the application period?",
                answer:
                    "The application period takes place from the 1st of September to the 9th of October. ",
                key: "2",
            },
            {
                question: "When will I know if I got accepted?",
                answer:
                    "Junction team will start the reviewing of the applications already during the application period - and you might be accepted already before the application deadline. You'll be informed a couple of days after the application deadline, at the latest. ",
                key: "3",
            },
            {
                question:
                    "How are time zones handled in Junction 2020 Connected?",
                answer:
                    "The schedule is planned so that the critical program will take place at times, which are the most reasonable for the parts of the world where the most of the hubs are located (UTC+0 - UTC+9). And although allnighters tend to be a part of all hackathon experiences, the live stream content will be available to be watched later for those who prefer sleeping over watching them live at 4 am. ",
                key: "4",
            },
        ],
    },

    {
        title: "Partners",
        title: "Submissions",
        questions: [
            {
                question: "Who owns the intellectual property of a hack?",
                answer:
                    "Always the team who created the project - not Junction nor our partner companies.",
                key: "1",
            },
            {
                question: "What type of projects are expected?",
                answer:
                    "The challenges come readymade from our partners, but the projects can be what ever you come up with, ranging from physical hardware prototypes to new games, software and concepts.",
                key: "2",
            },
            {
                question: "What programming language can I use?",
                answer: "This is completely up to you!",
                key: "3",
            },
        ],
    },
    {
        title: "Hubs",
        questions: [
            {
                question: "How do I attend a hub during the hackathon?",
                answer:
                    "You can either apply to a Junction Hub (organized by a local Junction team), or freely attend a hub hosted by our partners and other community members. You can organize a community hub yourself as well. More information on attending and hosting hubs to come.",
                key: "1",
            },
            {
                question:
                    "I live in country X, but I would like to travel to a hub in country Y. Is this possible?",
                answer:
                    "On behalf of Junction, you are free to travel to the moon and back if you want to, but please make sure that you follow all governmental instructions and rules when travelling.",
                key: "2",
            },
            {
                question:
                    "Are people allowed to participate outside their own home town/state/country?",
                answer:
                    "As long as you follow all local, national and international regulations and instructions of that time, yes. To ensure everyone's safety, Junction has the rights to prohibit participants from attending the hubs in case of known risks.",
                key: "3",
            },
            {
                question:
                    "Does Junction provide accomodation for hub participants?",
                answer:
                    "Some of the hubs will be open 24/7, but we recommend you to get your rest outside the hubs. Not outside outside, but trust us, sleeping surrounded by stressed, sweaty hackers does not fill up your batteries that well. ",
                key: "4",
            },

            {
                question: "Does Junction provide food for hub participants?",
                answer: "Depending on the hub, yes.",
                key: "5",
            },
        ],
    },

    {
        title: "Online",
        questions: [
            {
                question:
                    "If I attend the event online, will I get the same possibilities to interact with other participants?",
                answer:
                    "Yes. You can interact with all participants - hacking from any hub or home - on the virtual event platform, Brella. You can conveniently chat and book video calls on the platform with other participants. ",
                key: "1",
            },
            {
                question:
                    "If I attend the event online, will I get the same possibilities to interact with other partners?",
                answer:
                    "Yes. Each partner will have a virtual partner booth in Brella, where you can ask questions from the partner representatives in the public chat or book private video calls with them. Many partner companies are seeking for talents to recruit with the help of Brella's matchmaking system, so partners might wan to book quick recruitment meetings with you as well - especially if you've stated your interest in new opportunities in your profile. ",
                key: "2",
            },
        ],
    },
    {
        title: "Tracks & Challenges",
        questions: [
            {
                question: "How does it work?",
                answer:
                    "The hackathon is divided into challenges from our partner companies, and tracks based on different industries and themes. You are free to choose the challenges and track you want to compete in.",
                key: "1",
            },

            {
                question: "I want to know more about the challenges",
                answer:
                    "Challenge winners and their prizes are determined by the partner companies. You can submit your project to multiple challenges, which can be on different tracks - this means you can also win multiple challenges, which can be in different tracks.\nThe challenges will be revealed a bit closer to the event.",
                key: "2",
            },
            {
                question: "I want to know more about the tracks",
                answer:
                    "Track winners are determined by peer reviewing. When submitting your project, you need to choose the track you want to compete in - this means you can compete in and win only one track.\nThe tracks will be revealed a bit closer to the event.",
                key: "3",
            },
        ],
    },
]

const EventInfo = (props) => {
    return (
        <Page
            className="Connected ConnectedContent EventInfo"
            pageTitle="Event Info"
            metaDescKey={KEYS.whoAreWeBody}
            ogImageKey={MEDIA_KEYS.homePageHeaderImage}
        >
            <HeaderSection
                title="Event information"
                body="Happening simultaneously both virtually and physically, Junction 2020 Connected has the best of both worlds: the spirit of a traditional Junction hackathon with the fresh possibilities that online hackathons have to offer."
            >
                <div className="Button-row">
                    {/*
                    <Button
                        className="Button-default"
                        text="General Information"
                    />
                    <Button className="Button-default" text="For Partners" />*/}

                    <Link
                        activeClass="active"
                        to="timeline"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <Button
                            className="Button-default"
                            text="The Junction Journey"
                        />
                    </Link>

                    <Link
                        activeClass="active"
                        to="faq"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <Button className="Button-default" text="FAQ" />
                    </Link>
                </div>
            </HeaderSection>
            <DividerLine />
            <SectionImage
                image={{
                    url: require("../../../assets/images/connected/info/timeline.JPG"),
                }}
                alt="Junction Journey"
            />
            <DividerLine />
            <Element class="MobileLink" name="timeline" id="timeline" />
            <BlockSection
                name="timelineElement"
                id="timelineElement"
                title="The Junction Journey"
                className="TimeLineSection ScrollSnapElem"
                extra={
                    <img
                        src={require("../../../assets/images/3part-chain.svg")}
                    />
                }
            >
                {/* <h1 className="TimeLineTitle">The Junction Journey</h1>
                <h2 className="MobileTitle">the Junction Journey</h2> */}
                <Timeline date="September 1st">
                    Application period begins
                </Timeline>
                <Timeline date="September H2">
                    Virtual event platform opens
                </Timeline>
                <Timeline date="October 9th">Application period ends</Timeline>
                <Timeline date="October 18th">
                    Attendance confirmation deadline
                </Timeline>
                <Timeline date="November 6th-8th" last>
                    Junction 2020 Connected
                </Timeline>
                {/* <Timeline date="November 8th" last>
                    Junction 2020 Connected ends
                </Timeline> */}
            </BlockSection>
            {/* Not relevant yet
            <SingleColumnSection
                title="Schedule of the weekend"
                halfpage
            ></SingleColumnSection>
            */}
            <DividerLine />
            <SectionImage
                image={{
                    url: require("../../../assets/images/connected/info/website6.jpg"),
                }}
                alt="FAQ"
            />
            <DividerLine />
            <Element class="MobileLink" name="faq" id="faq" />
            <SingleColumnSection
                name="faqElement"
                id="faqElement"
                title="FAQ"
                center
                nolimit
                className="ScrollSnapElem"
            >
                <FaqSection items={props.items} />
                <div className="ContactUsFaq">
                    <p>
                        Didn’t find what you were looking for? Our team is happy
                        to help you with anything and everything, just shoot us
                        a message!
                    </p>
                    <div>
                        <a href="mailto:hello@hackjunction.com">
                            <Button
                                className="Button-default"
                                text="Contact us"
                            />
                        </a>
                    </div>
                </div>
            </SingleColumnSection>
        </Page>
    )
}

const mapStateToProps = (state, ownProps) => {
    var items = itemsOld;
    var questions = selectQuestions(state);
    console.log(state);
    console.log(questions);

    return {
        items: items
    };
};

export default connect(mapStateToProps)(EventInfo)