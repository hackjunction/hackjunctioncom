import React from "react";
import "./style.scss";

import { connect } from "react-redux";
import { content as selectContent } from "../../redux/staticcontent/selectors";

const BasicHeader = ({ title, body }) => {
    return (
        <div className="BasicHeader">
            <h2 className="BasicHeader--title">{title}</h2>
            <p className="BasicHeader--body">{body}</p>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const { titleKey, bodyKey } = ownProps;
    const content = selectContent(state);

    return {
        title: content[titleKey] || ownProps.title,
        body: content[bodyKey] || ownProps.body,
    };
};

export default connect(mapStateToProps)(BasicHeader);
