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

export const NavMenuInner = React.memo(
    ({ eventConcepts, homePages, eventPages, communityPages }) => {
        return (
            <div className="NavMenu--inner">
                <nav className="NavMenu--inner__menu">
                    <Link to="/">
                        <h6 className="NavMenu--inner__menu-title">About us</h6>
                    </Link>
                    <Link className="NavMenu--inner__menu-item" to="/story">
                        Our story
                    </Link>
                    <Link className="NavMenu--inner__menu-item" to="/story">
                        Contact us
                    </Link>

                    <h6 className="NavMenu--inner__menu-title">For partners</h6>
                    <Link className="NavMenu--inner__menu-item" to="/partners">
                        Benefits of a hackathon
                    </Link>
                    <Link className="NavMenu--inner__menu-item" to="/partners">
                        Our products
                    </Link>
                    <Link className="NavMenu--inner__menu-item" to="/partners">
                        References
                    </Link>
                    <Link className="NavMenu--inner__menu-item" to="/partners">
                        FAQ
                    </Link>

                    <h6 className="NavMenu--inner__menu-title">Events</h6>
                    <Link
                        key={"Connected"}
                        className="NavMenu--inner__menu-item"
                        to={`/connected`}
                    >
                        Connected
                    </Link>
                    <ConceptPagesSection concepts={eventConcepts} />
                    <ExtraPagesSection pages={eventPages} />

                    <h6 className="NavMenu--inner__menu-title">Community</h6>

                    <Link
                        className="NavMenu--inner__menu-item"
                        to="/participants"
                    >
                        For participants
                    </Link>
                    <Link
                        className="NavMenu--inner__menu-item"
                        to="/volunteers"
                    >
                        For volunteers
                    </Link>
                </nav>
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
                    <FontAwesomeIcon
                        icon={isSidebarOpen ? "times" : "bars"}
                        size="2x"
                        color="white"
                        onClick={() =>
                            toggleSidebar(isSidebarOpen ? false : true)
                        }
                    />
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
