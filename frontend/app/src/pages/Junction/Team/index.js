import React, { PureComponent } from "react";
import "./style.scss";

import HeaderImage from "../../../components/HeaderImage";
import BasicHeader from "../../../components/HeaderImage/BasicHeader";
import TeamMemberGrid from "../../../components/TeamMemberGrid";
import BlockSection from "../../../components/BlockSection";
import ContactForm from "../../../components/ContactForm";
import Divider from "../../../components/Divider";

import Page from "../../PageHOC";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";
import CenteredBlock from "../../../components/CenteredBlock/";
import LinkButton from "../../../components/LinkButton";
import Markdown from "../../../components/Markdown";

class TeamPage extends PureComponent {
    render() {
        return (
            <Page
                className="TeamPage"
                pageTitle="Team"
                metaDescKey={KEYS.teamPageSubtitle}
                ogImageKey={MEDIA_KEYS.teamPageHeaderImage}
            >
                <HeaderImage
                    imageKey={MEDIA_KEYS.teamPageHeaderImage}
                    alt="Header image"
                >
                    <BasicHeader
                        titleKey={KEYS.teamPageTitle}
                        bodyKey={KEYS.teamPageSubtitle}
                    />
                </HeaderImage>
                <TeamMemberGrid type="finland" />
                <Divider lg />
                <TeamMemberGrid type="global" />
                <Divider lg />
                <BlockSection
                    titleKey={KEYS.teamPageVolunteerTitle}
                    subtitleKey={KEYS.teamPageVolunteerSubtitle}
                >
                    <Markdown sourceKey={KEYS.teamPageVolunteerBody} />
                    <LinkButton
                        to="/volunteers"
                        text="More about volunteering"
                    />
                </BlockSection>
                <CenteredBlock></CenteredBlock>
                <Divider lg />
                <ContactForm />
                <Divider lg />
            </Page>
        );
    }
}

export default TeamPage;
