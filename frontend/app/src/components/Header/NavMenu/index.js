import React from "react";

import "./style.scss";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { map } from "lodash-es";

import { eventconceptsForNav } from "../../../redux/eventconcepts/selectors";
import { toggleSidebar } from "../../../redux/nav/actions";
import { isSidebarOpen } from "../../../redux/nav/selectors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    homePages,
    eventPages,
    communityPages,
} from "../../../redux/pages/selectors";

const ExtraPagesSection = React.memo(({ pages }) => {
    return map(pages, (page) => {
        return (
            <Link
                key={page.slug}
                className="NavMenu--inner__menu-item"
                to={"/" + page.slug}
            >
                {page.navTitle}
            </Link>
        );
    });
});

const ConceptPagesSection = React.memo(({ concepts }) => {
    const conceptLinks = map(concepts, (concept) => {
        return (
            <Link
                key={concept.slug}
                className="NavMenu--inner__menu-item"
                to={`/concepts/${concept.slug}`}
            >
                {concept.name}
            </Link>
        );
    });

    return <React.Fragment>{conceptLinks}</React.Fragment>;
});

const NavLink = ({ to, children, key, title = false, toggleSidebar }) => {
    if (title) {
        return (
            <Link to={to} key={key} onClick={() => toggleSidebar(false)}>
                <h6 className="NavMenu--inner__menu-title">{children}</h6>
            </Link>
        );
    }
    return (
        <Link
            className="NavMenu--inner__menu-item"
            to={to}
            key={key}
            onClick={() => toggleSidebar(false)}
        >
            {children}
        </Link>
    );
};

export const NavMenuInner = React.memo(
    ({ eventConcepts, homePages, eventPages, communityPages }) => {
        return (
            <div className="NavMenu--inner">
                <nav className="NavMenu--inner__menu">
                    <ConnectedNavLink to="/" title>
                        About us
                    </ConnectedNavLink>
                    <ConnectedNavLink to="/story">Our story</ConnectedNavLink>
                    <ConnectedNavLink to="/story">Contact us</ConnectedNavLink>

                    <ConnectedNavLink title to="/partners">
                        For partners
                    </ConnectedNavLink>
                    <ConnectedNavLink to="/partners">
                        Benefits of a hackathon
                    </ConnectedNavLink>
                    <ConnectedNavLink to="/partners">
                        Our products
                    </ConnectedNavLink>
                    <ConnectedNavLink to="/partners">
                        References
                    </ConnectedNavLink>
                    <ConnectedNavLink to="/partners">FAQ</ConnectedNavLink>

                    <h6 className="NavMenu--inner__menu-title">Events</h6>
                    <ConnectedNavLink
                        key={"Connected"}
                        className="NavMenu--inner__menu-item"
                        to={`/connected`}
                    >
                        Connected
                    </ConnectedNavLink>
                    <ConceptPagesSection concepts={eventConcepts} />
                    <ExtraPagesSection pages={eventPages} />

                    <ConnectedNavLink title>Community</ConnectedNavLink>

                    <ConnectedNavLink to="/participants">
                        For participants
                    </ConnectedNavLink>
                    <ConnectedNavLink to="/volunteers">
                        For volunteers
                    </ConnectedNavLink>
                </nav>
                <div className="top" />
                <div className="bottom" />
                <div className="left" />
                <div className="right" />
            </div>
        );
    },
);
const mapStateToPropsInner = (state) => ({
    eventConcepts: eventconceptsForNav(state),
    homePages: homePages(state),
    eventPages: eventPages(state),
    communityPages: communityPages(state),
});

const ConnectedNavMenuInner = connect(mapStateToPropsInner)(NavMenuInner);

const NavMenu = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <div className="NavMenuWrapper">
            <div
                className={`NavMenuOverlay ${
                    isSidebarOpen ? "NavMenuOverlay-open" : ""
                }`}
                onClick={() => toggleSidebar(false)}
            />
            <div className={`NavMenu ${isSidebarOpen ? "NavMenu-open" : ""}`}>
                <div className="NavMenu--exit">
                    <button
                        className={
                            isSidebarOpen
                                ? "hamburger hamburger--spin is-active"
                                : "hamburger hamburger--spin"
                        }
                        onClick={() =>
                            toggleSidebar(isSidebarOpen ? false : true)
                        }
                        type="button"
                    >
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
                {isSidebarOpen && <ConnectedNavMenuInner />}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isSidebarOpen: isSidebarOpen(state),
});

const mapDispatchToProps = (dispatch) => ({
    toggleSidebar: (open) => dispatch(toggleSidebar(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);

const ConnectedNavLink = connect(null, mapDispatchToProps)(NavLink);
