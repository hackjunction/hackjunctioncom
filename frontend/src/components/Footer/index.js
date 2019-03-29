import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as StaticContentSelectors from '../../redux/static/selectors';
import * as ContentSelectors from '../../redux/content/selectors';
import KEYS from '../../redux/static/keys';
import { objectWithKeys } from '../../redux/static/helpers';

import SocialMediaIcons from '../SocialMediaIcons';
import Divider from '../Divider';

const CONTENT_KEYS = [KEYS.siteSlogan, KEYS.siteContactEmail];

const Footer = ({ allContent, eventConcepts, socialMedias, extraPages }) => {
    const content = objectWithKeys(allContent, CONTENT_KEYS);

    function renderConceptLinks() {
        if (!Array.isArray(eventConcepts) || eventConcepts.length === 0) {
            return null;
        }

        return eventConcepts.map(concept => {
            return (
                <Link key={concept.slug} className="FooterInner--right__section-link" to={`/concepts/${concept.slug}`}>
                    {concept.name}
                </Link>
            );
        });
    }

    function renderSocialMedias() {
        if (!Array.isArray(socialMedias) || socialMedias.length === 0) {
            return null;
        }

        return <SocialMediaIcons data={socialMedias} />;
    }

    function renderExtraPageLinks(pages) {
        if (!Array.isArray(pages) || pages.length === 0) {
            return null;
        }

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
                    <p className="FooterInner--left__slogan">{content.siteSlogan}</p>
                    <a className="FooterInner--left__contact" href={`mailto:${content.siteContactEmail}`}>
                        {content.siteContactEmail}
                    </a>
                    <Divider sm />
                    {renderSocialMedias()}
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
                        {renderExtraPageLinks(extraPages.home)}
                    </div>
                    <div className="FooterInner--right__section">
                        <Link to="/concepts">
                            <h5 className="FooterInner--right__section-title">Events & Concepts</h5>
                        </Link>
                        {renderConceptLinks()}
                        {renderExtraPageLinks(extraPages.events)}
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
                        {renderExtraPageLinks(extraPages.community)}
                    </div>
                    <div className="FooterInner--right__section">
                        {/* <Link to="/press">
                            <h5 className="FooterInner--right__section-title">Press Kit</h5>
                        </Link> */}
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
                    by the amazing Junction Team.
                </span>
            </div>
        </footer>
    );
};

const mapStateToProps = state => ({
    allContent: StaticContentSelectors.content(state),
    extraPages: {
        home: ContentSelectors.homePages(state),
        events: ContentSelectors.eventPages(state),
        community: ContentSelectors.communityPages(state)
    },
    eventConcepts: ContentSelectors.eventconceptsByPriority(state),
    socialMedias: ContentSelectors.socialmedias(state)
});

export default connect(mapStateToProps)(Footer);
