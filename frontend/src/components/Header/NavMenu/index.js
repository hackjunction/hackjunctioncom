import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as ContentSelectors from '../../../redux/content/selectors';

import * as NavSelectors from '../../../redux/nav/selectors';
import * as NavActions from '../../../redux/nav/actions';

const NavMenu = ({ isSidebarOpen, toggleSidebar, eventConcepts, extraPages }) => {
    function renderConceptLinks() {
        if (!Array.isArray(eventConcepts) || eventConcepts.length === 0) {
            return null;
        }

        return eventConcepts.map(concept => {
            return (
                <Link key={concept.slug} className="NavMenu--inner__menu-item" to={`/concepts/${concept.slug}`}>
                    {concept.name}
                </Link>
            );
        });
    }

    function renderExtraPageLinks(pages) {
        if (!Array.isArray(pages) || pages.length === 0) {
            return null;
        }

        return pages.map(page => {
            return (
                <Link key={page.slug} className="NavMenu--inner__menu-item" to={'/' + page.slug}>
                    {page.navTitle}
                </Link>
            );
        });
    }

    return (
        <div className="NavMenuWrapper">
            <div
                className={`NavMenuOverlay ${isSidebarOpen ? 'NavMenuOverlay-open' : ''}`}
                onClick={() => toggleSidebar(false)}
            />
            <div className={`NavMenu ${isSidebarOpen ? 'NavMenu-open' : ''}`}>
                <div className="NavMenu--inner">
                    <Link to="/">
                        <img
                            className="NavMenu--inner__logo"
                            src={require('../../../assets/logos/text_black.png')}
                            alt="Junction text logo"
                        />
                    </Link>
                    <nav className="NavMenu--inner__menu">
                        <Link to="/">
                            <h6 className="NavMenu--inner__menu-title">Home</h6>
                        </Link>
                        <Link className="NavMenu--inner__menu-item" to="/story">
                            Story
                        </Link>
                        <Link className="NavMenu--inner__menu-item" to="/calendar">
                            Calendar
                        </Link>
                        <Link className="NavMenu--inner__menu-item" to="/team">
                            Team
                        </Link>
                        {renderExtraPageLinks(extraPages.home)}

                        <Link to="/concepts">
                            <h6 className="NavMenu--inner__menu-title">Events & Concepts</h6>
                        </Link>
                        {renderConceptLinks()}
                        {renderExtraPageLinks(extraPages.events)}

                        <h6 className="NavMenu--inner__menu-title">Community</h6>
                        <Link className="NavMenu--inner__menu-item" to="/partners">
                            For partners
                        </Link>
                        <Link className="NavMenu--inner__menu-item" to="/participants">
                            For participants
                        </Link>
                        <Link className="NavMenu--inner__menu-item" to="/volunteers">
                            For volunteers
                        </Link>
                        <Link className="NavMenu--inner__menu-item" to="/organisers">
                            For organisers
                        </Link>
                        {renderExtraPageLinks(extraPages.community)}

                        <Link to="/team">
                            <h6 className="NavMenu--inner__menu-title">Contact</h6>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    eventConcepts: ContentSelectors.eventconceptsByPriority(state),
    extraPages: {
        home: ContentSelectors.homePages(state),
        events: ContentSelectors.eventPages(state),
        community: ContentSelectors.communityPages(state)
    },
    isSidebarOpen: NavSelectors.isSidebarOpen(state)
});

const mapDispatchToProps = dispatch => ({
    toggleSidebar: open => dispatch(NavActions.toggleSidebar(open))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavMenu);
