import React from "react";
import "./style.scss";

import { connect } from "react-redux";
import { content as selectContent } from "../../redux/staticcontent/selectors";
import { Grid } from "@material-ui/core";

const HeaderSection = ({ title, body, logo, children, className }) => {
    return (
        <Grid container className={`HeaderSection ${className && className}`}>
            {logo && <img src={logo} />}
            {title && <h2 className="HeaderSection--title">{title}</h2>}
            {body && <h3 className="HeaderSection--body">{body}</h3>}
            {children && (
                <div className="HeaderSection--content">{children}</div>
            )}
        </Grid>
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
