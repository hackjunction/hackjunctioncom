import React, { PureComponent } from "react";
import "./style.scss";

import Page from "../../PageHOC";

import { connect } from "react-redux";
import ERROR_KEYS from "../../../redux/errormessages/keys";
import { errormessages } from "../../../redux/errormessages/selectors";

import MEDIA_KEYS from "../../../redux/staticmedia/keys";
import HeaderSection from "../../../components/HeaderSection";

const NotFound = (props) => {
    return (
        <Page
            className="NotFoundConnected"
            pageTitle={props.eNotFound.title}
            metaDesc={props.eNotFound.message}
        >
            <HeaderSection
                title={props.eNotFound.title}
                body={props.eNotFound.message}
            >
                <a href="/">Back to Connected frontpage</a>
            </HeaderSection>
        </Page>
    );
};

const mapStateToProps = (state, ownProps) => {
    const content = errormessages(state);
    return {
        eNotFound: content[ERROR_KEYS["404"]] || ownProps.eNotFound
    };
};

export default connect(mapStateToProps)(NotFound);
