import React, { PureComponent, Suspense } from "react";
import "./style.scss";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";
import HeaderSection from "../../../components/HeaderSection";

import SmallButton from "../../../components/SmallButton";
import DividerLine from "../../../components/DividerLine";
import Page from "../../PageHOC";
import TeamCard from "../../../components/TeamCard";
import TeamMemberGrid from "../../../components/TeamMemberGrid";
import BlockSection from "../../../components/BlockSection";
import SingleColumnSection from "../../../components/SingleColumnSection";

export default () => {
    return (
        <Page
            className="ContactPage"
            pageTitle="Our story"
            metaDescKey={KEYS.StoryPageSubtitle}
            ogImageKey={MEDIA_KEYS.StoryPageHeaderImage}
        >
            <HeaderSection
                title="Contact us"
                body=" We are Junction – a volunteer-led community effort around the world.
Need to get in touch with us? Drop us a line, we're all ears."
            >
                <div>
                    <SmallButton
                        className="Default-button-small"
                        to
                        text="Contact us"
                    />

                    <SmallButton
                        className="Default-button-small"
                        to
                        text="Finland Team"
                    />

                    <SmallButton
                        className="Default-button-small"
                        to
                        text="JunctionX Teams"
                    />
                </div>
            </HeaderSection>
            <DividerLine />
            <SingleColumnSection>
                <TeamMemberGrid type="finland" />
            </SingleColumnSection>
        </Page>
    );
};
