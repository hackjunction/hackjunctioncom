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

const items = [
    {
        title: "General",
        questions: [
            {
                question: "What is Junction?",
                answer:
                    "Junction is a global tech community, organizing hackathons and tech events around the year and around the world - both offline and online.",
                key: "1",
            },

            {
                question: "What is Junction 2020 Connected?",
                answer:
                    "Junction 2020 Connected is a new take on the established concept of a hackathon; participants all over the world can join physical locations hosted by Junction and other organizations, or participate in the event fully online.",
                key: "2",
            },
            {
                question: "How do I attend Junction 2020 Connected?",
                answer:
                    "The application period takes place from the 1st of September until the 9th of October on our very own, handcrafted Junction App. You can apply either alone or as a team. You can edit your application until the 9th of October, but Junction team will accept the best applicants already during the application period. You'll be informed at the latest within a couple of days after the application deadline whether you're accepted to the hackathon or not. Information about acceptance to hubs will follow later.",
                key: "3",
            },
            {
                question: "Does it cost to attend?",
                answer:
                    "Nope! The event is free of charge for all accepted participants.Of course not, this hackathon is completely free for participants!",
                key: "4",
            },
            {
                question: "Who can attend Junction 2020 Connected?",
                answer:
                    "Junction 2020 Connected is for anyone and everyone passionate about creating with technology.",
                key: "5",
            },
            {
                question:
                    "When and where will Junction 2020 Connected take place?",
                answer:
                    "The hackathon will take place November 6th to 8th and it will be hosted online, with an addition of physical hacking hubs all around the world.",
                key: "6",
            },
            {
                question: "What size can a team be?",
                answer:
                    "1 to 5 people - we suggest having a minimum of 3 people in a team. The Junction team will organize matchmaking at the start of the hackathon, so no need to worry if you don't have a team before the event. All team members must be accepted to the hackathon.",
                key: "7",
            },
            {
                question: "Who are the people behind Junction?",
                answer:
                    "Junction is run by a student and volunteer-based team, passionate about organizing the most epic hackathons in the world!",
                key: "8",
            },
            {
                question:
                    "How can I get the latest news and updates on Junction 2020 Connected?",
                answer:
                    "Subscribe to our newsletter and follow us on social media @hackjunction to get the latest news and updates!",
                key: "9",
            },
            {
                question:
                    "What kind of measurements are taken to prevent coronavirus infections?  ",
                answer:
                    "For each physical hub, Junction follows the guidelines set by the officials of the country, where the hub is organized. If it's not safe to organize a hub, the hub will cancelled and the corresponding participants will get to participate the event from some other hub or online.  \n In Finland, Junction follows the [guidelines given by the Finnish government](https://valtioneuvosto.fi/en/information-on-coronavirus/current-restrictions). This means that Junction will arrange the Central Hub in accordance with the [instructions given by The Ministry of Education and Culture and the Institute for Health and Welfare](https://minedu.fi/documents/1410845/22330894/Ohje+yleis%C3%B6tilaisuuksiin%2C+yleisiin+kokoontumisiin+ja+julkisten+tilojen+k%C3%A4ytt%C3%B6%C3%B6n/2b13eaca-ab49-9dda-3edf-65cb22fb65ac/Ohje+yleis%C3%B6tilaisuuksiin%2C+yleisiin+kokoontumisiin+ja+julkisten+tilojen+k%C3%A4ytt%C3%B6%C3%B6n.pdf). Here are the key measurements that Junction is going to take in Finland:\n\n- people that feel sick are not allowed to attend\n- possibility to wash or disinfect hands is always available when needed\n- the facilities are cleaned with extra caution and frequency\n- team-specific hacking tables are placed with 1-2 m safety distance to other tables\n- queuing is minimized by distributing people to arrive and leave gradually\n- the unavoidable queuing is arranged in a way that the 1-2 m safety distances can be maintained \n\nJunction is prepared to downsize the Central Hub according to the epidemiological situation - either by not welcoming any participants physically to the event venue or by not taking participants nor partners to the venue and arranging the stream-studio under the 10 people restriction on gatherings.",
                key: "10",
            },
        ],
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
                question:
                    "I live in country X, but I would like to travel to a hub in country Y. Is this possible?",
                answer:
                    "On behalf of Junction, you are free to travel to the moon and back if you want to, but please make sure that you follow all governmental instructions and rules when travelling.",
                key: "1",
            },
            {
                question:
                    "Does Junction provide accomodation for hub participants?",
                answer:
                    "Some of the hubs will be open 24/7, but we recommend you to get your rest outside the hubs. Not outside outside, but trust us, sleeping surrounded by stressed, sweaty hackers does not fill up your batteries that well. ",
                key: "2",
            },
            {
                question: "Does Junction provide food for hub participants?",
                answer: "Depending on the hub, yes.",
                key: "3",
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
        ],
    },
]

export default ({}) => {
    return (
        <Page
            className="Connected ConnectedContent EventInfo"
            pageTitle="Event Info"
            metaDescKey={KEYS.whoAreWeBody}
            ogImageKey={MEDIA_KEYS.homePageHeaderImage}
        >
            <HeaderSection
                title="Event information"
                body="Junction 2020 Connected has the best of both worlds: the spirit of a traditional Junction and the new possibilities online-hackathons have to offer. Happening simultaneously both virtually and physically all over the world, Junction 2020 Connected is the leading hybrid event of the year. Local physical hubs bring the hackathon closer to you and allows the event to adapt to possible Covid-19 restrictions. You'll be able to attend the hackathon from your home couch, but you are also welcome to join our local hubs - all around the world."
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
                        <Button className="Button-default" text="Timeline" />
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
                alt="Timeline"
            />
            <DividerLine />
            <Element class="MobileLink" name="timeline" id="timeline" />
            <BlockSection
                name="timelineElement"
                id="timelineElement"
                className="TimelineSection ScrollSnapElem"
                inverted
                extra={
                    <img
                        className="Connected-chains"
                        src={require("../../../assets/images/3part-chain.svg")}
                    />
                }
            >
                <h1 className="TimeLineTitle">Important dates & timeline</h1>
                <h2 className="MobileTitle">Timeline</h2>
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
            {/* Not relevant yet
            <SingleColumnSection
                title="Schedule of the weekend"
                halfpage
            ></SingleColumnSection>
            */}
            <DividerLine />
            <SectionImage
                image={{
                    url: require("../../../assets/images/connected/info/faq.JPG"),
                }}
                alt="FAQ"
            />
            <DividerLine />
            <Element class="MobileLink" name="faq" id="faq" />
            <SingleColumnSection
                name="faqElement"
                id="faqElement"
                title="FAQ"
                subtitle="Click to filter frequently asked questions!"
                center
                nolimit
                className="ScrollSnapElem"
            >
                <FaqSection items={items} />
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
