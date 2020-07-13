import React, { PureComponent, Suspense } from "react";
import "./style.scss";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import SectionImage from "../../../components/SectionImage";

import Page from "../../PageHOC";

const BOTTOM_LINKS = [
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
    {
        imageKey: MEDIA_KEYS.calendarPageHeaderImage,
        imageAlt: "Link",
        linkTo: "/calendar",
        linkText: "Calendar",
    },
];

class BenefitsPage extends PureComponent {
    render() {
        return (
            <Page
                className="BenefitsPage"
                pageTitle="Our story"
                metaDescKey={KEYS.BenefitsPageSubtitle}
                ogImageKey={MEDIA_KEYS.BenefitsPageHeaderImage}
            >
                <div className="BenefitsPage--TopContent">
                    <div>
                        <p className="topic">Unlock the hackerworld.</p>
                    </div>

                    <p>
                        Hackathons are one of the best ways to rapidly innovate
                        and develop new, creative concepts and solutions for
                        your company's needs and we would love to organize one
                        together with you.{" "}
                    </p>
                </div>

                <div className="BenefitsPage--DownContent">
                    <div className="BenefitsPage--DownContent--Left">
                        <h4 className="topic-subtitle">What is a hackathon?</h4>
                        <p>
                            <span>hackathon</span> /ˈhæk.ə.θɑːn/,{" "}
                            <span>n.</span> A fast-paced, weekend-long event,
                            where participants create solutions to real
                            challenges set by our partners. Using our partners’
                            data, technology and mentoring, the weekend results
                            in advanced prototypes, fresh new concepts and
                            innovative usages of tech.
                        </p>
                    </div>
                    <div className="BenefitsPage--DownContent--Right">
                        <img
                            src={require("../../../assets/images/benefits/what-is-hackathon.png")}
                        />
                    </div>
                </div>

                <div className="BenefitsPage--DownContent">
                    <div className="BenefitsPage--DownContent--Right">
                        <img
                            src={require("../../../assets/images/benefits/benefits-of-a-hackathon.png")}
                        />
                    </div>
                    <div className="BenefitsPage--DownContent--Left">
                        <h4 className="topic-subtitle">
                            Benefits of a hackathon
                        </h4>
                        <p>
                            Think of a hackathon as the extra nudge to propel
                            your ideas into existence. Hackathons can spark and
                            boost countless positive things, such as
                        </p>

                        <ul>
                            <li>Creativity & New Innovations</li>
                            <li>Employer Branding & Visibility</li>
                            <li>Alternative Perspectives</li>
                            <li>Recruiting Possibilities</li>
                        </ul>
                    </div>
                </div>
            </Page>
        );
    }
}

export default BenefitsPage;
