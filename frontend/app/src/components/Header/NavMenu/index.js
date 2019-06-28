import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { map } from 'lodash-es';

import { eventconceptsForNav } from '../../../redux/eventconcepts/selectors';
import { toggleSidebar } from '../../../redux/nav/actions';
import { isSidebarOpen } from '../../../redux/nav/selectors';

import { homePages, eventPages, communityPages } from '../../../redux/pages/selectors';

const ExtraPagesSection = React.memo(({ pages }) => {
    return map(pages, page => {
        return (
            <Link key={page.slug} className="NavMenu--inner__menu-item" to={'/' + page.slug}>
                {page.navTitle}
            </Link>
        );
    });
});

const ConceptPagesSection = React.memo(({ concepts }) => {
    const conceptLinks = map(concepts, concept => {
        return (
            <Link key={concept.slug} className="NavMenu--inner__menu-item" to={`/concepts/${concept.slug}`}>
                {concept.name}
            </Link>
        );
    });

    return <React.Fragment>{conceptLinks}</React.Fragment>;
});

const NavMenuInner = React.memo(({ eventConcepts, homePages, eventPages, communityPages }) => {
    return (
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
                <ExtraPagesSection pages={homePages} />

                <Link to="/concepts">
                    <h6 className="NavMenu--inner__menu-title">Events & Concepts</h6>
                </Link>
                <ConceptPagesSection concepts={eventConcepts} />
                <ExtraPagesSection pages={eventPages} />

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
                <Link className="NavMenu--inner__menu-item" to="/organizers">
                    For organizers
                </Link>
                <ExtraPagesSection pages={communityPages} />
                <Link to="/team">
                    <h6 className="NavMenu--inner__menu-title">Contact</h6>
                </Link>
            </nav>
        </div>
    );
});
const mapStateToPropsInner = state => ({
    eventConcepts: eventconceptsForNav(state),
    homePages: homePages(state),
    eventPages: eventPages(state),
    communityPages: communityPages(state)
});

const ConnectedNavMenuInner = connect(mapStateToPropsInner)(NavMenuInner);

const NavMenu = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <div className="NavMenuWrapper">
            <div
                className={`NavMenuOverlay ${isSidebarOpen ? 'NavMenuOverlay-open' : ''}`}
                onClick={() => toggleSidebar(false)}
            />
            <div className={`NavMenu ${isSidebarOpen ? 'NavMenu-open' : ''}`}>
                <ConnectedNavMenuInner />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isSidebarOpen: isSidebarOpen(state)
});

const mapDispatchToProps = dispatch => ({
    toggleSidebar: open => dispatch(toggleSidebar(open))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavMenu);
