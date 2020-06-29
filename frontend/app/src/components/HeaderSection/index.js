import React from "react";
import "./style.scss";

import { connect } from "react-redux";
import { content as selectContent } from "../../redux/staticcontent/selectors";

const HeaderSection = ({ title, body, children }) => {
    return (
        <div className="HeaderSection">
            <h2 className="HeaderSection--title">{title}</h2>
            <p className="HeaderSection--body">{body}</p>
            {children}
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

export default connect(mapStateToProps)(HeaderSection);
