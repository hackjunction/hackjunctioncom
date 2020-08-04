import React, { PureComponent } from "react";
import "./style.scss";

import Page from "../../PageHOC";

import { connect } from "react-redux";
import ERROR_KEYS from "../../../redux/errors/keys";
import { content as errors } from "../../../redux/errors/selectors";

import MEDIA_KEYS from "../../../redux/staticmedia/keys";
import HeaderSection from "../../../components/HeaderSection";

const NotFound = (props) => {
    return (
        <Page
            className="NotFoundConnected"
            pageTitle="404"
            metaDesc="This page does not exist"
        >
            <HeaderSection
                title={JSON.stringify(props)}
                //title={props.eNotFound.title}
                //body={props.eNotFound.content}
            >
                <a href="/">Back to Connected frontpage</a>
            </HeaderSection>
        </Page>
    );
};

const mapStateToProps = (state, ownProps) => {
    const content = errors(state);

    return {
        eNotFound: content[ERROR_KEYS.NotFound] || ownProps.eNotFound
    };
};

export default connect(mapStateToProps)(NotFound);
