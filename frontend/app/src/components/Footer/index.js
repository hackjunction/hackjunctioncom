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
        const {} = this.props;
        return (
            <footer className="Footer">
                <div className="Footer--left">
                    <div className="Footer--left-first">
                        <NewsLetterForm />
                    </div>
                    <div className="Footer--left-second">
                        <div className="Footer--left-second__FooterLinkList">
                            <div className="FooterListLeft">
                                <p>
                                    <Link to="/codeofconduct">
                                        Code of Conduct
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/policy">Privacy Policy</Link>
                                </p>
                                <p>
                                    <Link to="/terms">Terms & Conditions</Link>
                                </p>
                            </div>
                            <div className="FooterListRight">
                                <p>
                                    <Link to="/press">Press kit (eng)</Link>
                                </p>
                                <p>
                                    <Link to="/media">Press kit (fin)</Link>
                                </p>
                                <p>
                                    <a
                                        href="https://www.flickr.com/photos/151708924@N07/albums/"
                                        alt="flickr"
                                    >
                                        Photo Gallery
                                    </a>
                                </p>
                                <p>
                                    <a
                                        href="https://blog.hackjunction.com"
                                        alt="medium"
                                    >
                                        Blog
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div>
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
                <div className="Footer--right">
                    <h2>Contact us</h2>
                    <p>Fill the contact form and we'll get back to you asap!</p>
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
