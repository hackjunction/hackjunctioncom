import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SocialMediaIcons from '../SocialMediaIcons';
import Divider from '../Divider';

import { content as selectContent } from '../../redux/staticcontent/selectors';
import KEYS from '../../redux/staticcontent/keys';
import {
    homePages,
    eventPages,
    communityPages,
} from '../../redux/pages/selectors';

import {
    eventconceptsByPriority,
} from '../../redux/eventconcepts/selectors'

const Footer = React.memo(({ siteSlogan, siteContactEmail, eventConcepts, homePages, eventPages, communityPages }) => {

    function renderConceptLinks() {
        return eventConcepts.map(concept => {
            return (
                <Link key={concept.slug} className="FooterInner--right__section-link" to={`/concepts/${concept.slug}`}>
                    {concept.name}
                </Link>
            );
        });
    }

    function renderExtraPageLinks(pages) {
        return pages.map(page => {
            return (
                <Link key={page.slug} className="FooterInner--right__section-link" to={`/${page.slug}`}>
                    {page.navTitle}
                </Link>
            );
        });
    }

    return (
        <footer className="Footer">
            <div className="FooterInner">
                <div className="FooterInner--left">
                    <img
                        className="FooterInner--left__logo"
                        src={require('../../assets/logos/text_black.png')}
                        alt="Junction logo"
                    />
                    <p className="FooterInner--left__slogan">{siteSlogan}</p>
                    <a className="FooterInner--left__contact" href={`mailto:${siteContactEmail}`}>
                        {siteContactEmail}
                    </a>
                    <Divider sm />
                    <SocialMediaIcons />
                </div>
                <div className="FooterInner--separator" />
                <nav className="FooterInner--right">
                    <div className="FooterInner--right__section">
                        <Link to="/">
                            <h5 className="FooterInner--right__section-title">Home</h5>
                        </Link>
                        <Link className="FooterInner--right__section-link" to="/story">
                            Story
                        </Link>
                        <Link className="FooterInner--right__section-link" to="/calendar">
                            Calendar
                        </Link>
                        <Link className="FooterInner--right__section-link" to="/team">
                            Team
                        </Link>
                        {renderExtraPageLinks(homePages)}
                    </div>
                    <div className="FooterInner--right__section">
                        <Link to="/concepts">
                            <h5 className="FooterInner--right__section-title">Events & Concepts</h5>
                        </Link>
                        {renderConceptLinks()}
                        {renderExtraPageLinks(eventPages)}
                    </div>
                    <div className="FooterInner--right__section">
                        <h5 className="FooterInner--right__section-title">Community</h5>
                        <Link className="FooterInner--right__section-link" to="/partners">
                            For partners
                        </Link>
                        <Link className="FooterInner--right__section-link" to="/participants">
                            For participants
                        </Link>
                        <Link className="FooterInner--right__section-link" to="/volunteers">
                            For volunteers
                        </Link>
                        <Link className="FooterInner--right__section-link" to="/organisers">
                            For organisers
                        </Link>
                        {renderExtraPageLinks(communityPages)}
                    </div>
                    <div className="FooterInner--right__section">
                        {/* <Link to="/press">
                            <h5 className="FooterInner--right__section-title">Press Kit</h5>
                        </Link> */}
                        <a href="https://blog.hackjunction.com" alt="medium">
                            <h5 className="FooterInner--right__section-title">Blog</h5>
                        </a>
                        <a href="https://www.flickr.com/photos/151708924@N07/albums/" alt="flickr">
                            <h5 className="FooterInner--right__section-title">Photo Gallery</h5>
                        </a>
                        <h5 className="FooterInner--right__section-title">Legal</h5>
                        <Link className="FooterInner--right__section-link" to="/policy">
                            Privacy Policy
                        </Link>
                        <Link className="FooterInner--right__section-link" to="/terms">
                            Terms & Conditions
                        </Link>
                    </div>
                </nav>
            </div>
            <div className="FooterBottom">
                <span className="FooterBottom--text">
                    Designed and developed with{' '}
                    <span role="img" aria-label="love">
                        💕
                    </span>{' '}
                    &{' '}
                    <span role="img" aria-label="coffee">
                        ☕
                    </span>{' '}
                    by the Junction Team.
                </span>
            </div>
        </footer>
    );
});

const mapStateToProps = (state) => {
    const content = selectContent(state);

    return {
        siteSlogan: content[KEYS.siteSlogan],
        siteContactEmail: content[KEYS.siteContactEmail],
        homePages: homePages(state),
        eventPages: eventPages(state),
        communityPages: communityPages(state),
        eventConcepts: eventconceptsByPriority(state),
    }
}

export default connect(mapStateToProps)(Footer);
