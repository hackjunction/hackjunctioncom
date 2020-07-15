import React, { PureComponent, Suspense } from "react";
import "./style.scss";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";
import HeaderSection from "../../../components/HeaderSection";
import SectionImage from "../../../components/SectionImage";
import Button from "../../../components/Button";
import Divider from "../../../components/Divider";
import Page from "../../PageHOC";
import TeamCard from "../../../components/TeamCard";
import TeamMemberGrid from "../../../components/TeamMemberGrid";

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

class ContactPage extends PureComponent {
    render() {
        return (
            <Page
                className="ContactPage"
                pageTitle="Our story"
                metaDescKey={KEYS.StoryPageSubtitle}
                ogImageKey={MEDIA_KEYS.StoryPageHeaderImage}
            >
                <p className="topic">Contact us</p>
                <HeaderSection
                    body=" We are Junction – a volunteer-led community effort around the world.
Need to get in touch with us? Drop us a line, we're all ears."
                >
                    <div>
                        <Button className="Button-small" to text="Contact us" />

                        <Button
                            className="Button-small"
                            to
                            text="Finland Team"
                        />

                        <Button
                            className="Button-small"
                            to
                            text="JunctionX Teams"
                        />
                    </div>
                </HeaderSection>

                <div className="ContactPage--TopContent">
                    <TeamMemberGrid type="finland" />
                </div>
            </Page>
        );
    }
}

export default ContactPage;
