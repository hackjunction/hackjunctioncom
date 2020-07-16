import React, { PureComponent } from "react";
import "./style.scss";

import Page from "../../PageHOC";

import MEDIA_KEYS from "../../../redux/staticmedia/keys";
import HeaderSection from "../../../components/HeaderSection";

export default () => {
    return (
        <Page
            className="NotFoundConnected"
            pageTitle="404"
            metaDesc="This page does not exist"
        >
            <HeaderSection
                title={"Page not found"}
                body={
                    "It seems like the page you were looking for doesn't exist..."
                }
            >
                <a href="/">Back to Connected frontpage</a>
            </HeaderSection>
        </Page>
    );
};
