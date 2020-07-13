import React, { PureComponent } from "react";
import "./style.scss";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ContactForm from "../ContactForm";
import NewsLetterForm from "../NewsLetterForm";

import { content as selectContent } from "../../redux/staticcontent/selectors";
import KEYS from "../../redux/staticcontent/keys";
import {
    homePages,
    eventPages,
    communityPages,
} from "../../redux/pages/selectors";

import { eventconceptsByPriority } from "../../redux/eventconcepts/selectors";
import { Typography, Grid } from "@material-ui/core";

class Footer extends PureComponent {
    renderConceptLinks(eventConcepts) {
        return eventConcepts.map((concept) => {
            return (
                <Link
                    key={concept.slug}
                    className="Footer--left_section-link"
                    to={`/concepts/${concept.slug}`}
                >
                    {concept.name}
                </Link>
            );
        });
    }

    renderExtraPageLinks(pages) {
        return pages.map((page) => {
            return (
                <Link
                    key={page.slug}
                    className="Footer--left_section-link"
                    to={`/${page.slug}`}
                >
                    {page.navTitle}
                </Link>
            );
        });
    }

    render() {
        const { connected } = this.props;
        return (
            <footer className={`Footer ${connected ? "Connected" : ""}`}>
                <div className="Footer--left">
                    <div className="Footer--left-first subscribe-text">
                        <h2>Stay up to date</h2>
                        <span>
                            Subscribe to our newsletter to get monthly updates{" "}
                            <br></br>
                            about what’s happening in the Junction community.{" "}
                        </span>
                        <div>
                            <NewsLetterForm />
                        </div>
                    </div>
                    <div className="Footer--left-divider" />
                    <div className="Footer--left-second">
                        <div className="Footer--left-second__FooterLinkList">
                            <div className="FooterListLeft">
                                <span>
                                    <Link to="/codeofconduct">
                                        Code of Conduct
                                    </Link>
                                </span>
                                <span>
                                    <Link to="/policy">Privacy Policy</Link>
                                </span>
                                <span>
                                    <Link to="/terms">Terms & Conditions</Link>
                                </span>
                            </div>
                            <div className="FooterListRight">
                                <span>
                                    <Link to="/press">Press kit</Link>
                                </span>
                                {/* <span>
                                    <Link to="/media">Press kit (fin)</Link>
                                </span> */}
                                <span>
                                    <a
                                        href="https://www.flickr.com/photos/151708924@N07/albums/"
                                        alt="flickr"
                                    >
                                        Photo Gallery
                                    </a>
                                </span>
                                <span>
                                    <a
                                        href="https://blog.hackjunction.com"
                                        alt="medium"
                                    >
                                        Blog
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="Footer--left--margin">
                            Designed and developed with{" "}
                            <span role="img" aria-label="love">
                                💕
                            </span>{" "}
                            &{" "}
                            <span role="img" aria-label="coffee">
                                ☕
                            </span>{" "}
                            by the Junction Team.
                        </div>
                    </div>
                </div>
                <div className="Footer--divider" />
                <div className="Footer--right">
                    <h2>Contact us</h2>
                    <span>
                        Send us an email to hello@hackjunction.com or fill in
                        the <br></br> contact form and we’ll get back to asap!
                    </span>
                    <ContactForm />
                </div>
            </footer>
        );
    }
}

const mapStateToProps = (state) => {
    const content = selectContent(state);

    return {
        siteSlogan: content[KEYS.siteSlogan],
        siteContactEmail: content[KEYS.siteContactEmail],
        homePages: homePages(state),
        eventPages: eventPages(state),
        communityPages: communityPages(state),
        eventConcepts: eventconceptsByPriority(state),
    };
};

export default connect(mapStateToProps)(Footer);
