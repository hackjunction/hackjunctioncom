import React, { useState } from "react";
import "./style.scss";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import cloudinary from "cloudinary-core";

import config from "../../services/config";

import * as NavActions from "../../redux/nav/actions";
import { content as selectContent } from "../../redux/staticcontent/selectors";
import { media as selectMedia } from "../../redux/staticmedia/selectors";

const cl = cloudinary.Cloudinary.new({
    cloud_name: config.CLOUDINARY_CLOUD_NAME,
});

const PageHOC = (props) => {
    const { setNavTitle, pageTitle, toggleSidebar } = props;
    setNavTitle(pageTitle);

    const {
        className,
        children,
        metaDesc,
        ogImageUrl,
        ogImageTwitterUrl,
    } = props;
    const canonicalUrl =
        "https://" + window.location.hostname + window.location.pathname;

    return (
        <div className={"Page--wrapper " + className ? className : ""}>
            <Helmet
                defaultTitle="Junction | Hack the Future"
                titleTemplate="Junction | %s"
            >
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:url" content={canonicalUrl} />
                <title>{pageTitle}</title>
                <meta name="robots" content="index,follow" />
                <meta name="description" content={metaDesc} />
                {/* OpenGraph properties */}
                <meta property="og:title" content={"Junction | " + pageTitle} />
                <meta property="og:description" content={metaDesc} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={ogImageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                {/* Twitter cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@hackJunction" />
                <meta name="twitter:creator" content="@hackJunction" />
                <meta
                    name="twitter:title"
                    content={"Junction | " + pageTitle}
                />
                <meta name="twitter:description" content={metaDesc} />
                <meta name="twitter:image" content={ogImageTwitterUrl} />
            </Helmet>
            {children}
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const { pageTitleKey, metaDescKey, ogImageKey } = ownProps;
    const content = selectContent(state);
    const media = selectMedia(state);
    let ogImageUrl = ownProps.ogImageUrl;
    let ogImageTwitterUrl = ownProps.ogImageUrl;

    if (media[ogImageKey]) {
        ogImageUrl = cl.url(media[ogImageKey].public_id, {
            width: 1200,
            height: 630,
            crop: "fill",
            gravity: "center",
        });
        ogImageTwitterUrl = cl.url(media[ogImageKey].public_id, {
            width: 1200,
            height: 600,
            crop: "fill",
            gravity: "center",
        });
    }

    return {
        pageTitle: content[pageTitleKey] || ownProps.pageTitle,
        metaDesc: content[metaDescKey] || ownProps.metaDesc,
        ogImageUrl,
        ogImageTwitterUrl,
    };
};

const mapDispatchToProps = (dispatch) => ({
    setNavTitle: (title) => dispatch(NavActions.setNavTitle(title)),
    toggleSidebar: (open) => dispatch(NavActions.toggleSidebar(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageHOC);
