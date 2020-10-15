import React, { PureComponent } from "react"
import "./style.scss"

import { connect } from "react-redux"
import { Link } from "react-router-dom"

import ContactForm from "../ContactForm"
import NewsLetterForm from "../NewsLetterForm"

import { content as selectContent } from "../../redux/staticcontent/selectors"
import KEYS from "../../redux/staticcontent/keys"
import {
    homePages,
    eventPages,
    communityPages,
} from "../../redux/pages/selectors"

import { eventconceptsByPriority } from "../../redux/eventconcepts/selectors"
import { Typography, Grid } from "@material-ui/core"
import DividerLine from "../DividerLine"

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
            )
        })
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
            )
        })
    }

    render() {
        return (
            <footer className="Footer">
                <div className="Footer--left">
                    <div className="Footer--left-first subscribe-text">
                        <h2>ابقى على تواصل</h2>
                        <span>
                            سجل الآن في نشرتنا البريدية ليصلك تحديث شهري حول ما يحدث في مجتمع جانكشن
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
                                    <a href="https://hackjunction.com/codeofconduct">
                                        ميثاق اخلاقيات العمل
                                    </a>
                                </span>
                                <span>
                                    <a href="https://hackjunction.com/policy">
                                        سياسة الخصوصية
                                    </a>
                                </span>
                                <span>
                                    <a href="https://hackjunction.com/terms">
                                        الشروط والأحكام
                                    </a>
                                </span>
                            </div>
                            <div className="FooterListRight">
                                <span>
                                    <a href="https://hackjunction.com/press">
                                        أدوات النشر
                                    </a>
                                </span>
                                {/* <span>
                                    <Link to="/media">Press kit (fin)</Link>
                                </span> */}
                                <span>
                                    <a
                                        href="https://www.flickr.com/photos/151708924@N07/albums/"
                                        alt="flickr"
                                    >
                                        مكتبة الصور
                                    </a>
                                </span>
                                <span>
                                    <a
                                        href="https://blog.hackjunction.com"
                                        alt="medium"
                                    >
                                        المدونة
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="Footer--left--margin" dir="rtl" lang="ar">
                            {" "}تم تصميمه وتطويره
                            <span role="img" aria-label="love">
                                🧡
                            </span>{" "}
                            &{" "}
                            <span role="img" aria-label="coffee">
                                ☕
                            </span>{" "}
                            بواسطة
                            Junction Team.
                        </div>
                    </div>
                </div>
                <div className="Footer--divider" />
                <div className="Footer--right">
                    <h2>أتصل بنا</h2>
                    <span dir="rtl">

                        {" "}ارسل لنا رسالة على البريد
                        <a href="mailto:hello@hackjunction.com">
                            hello@hackjunction.com
                        </a>{" "}
                        أو قم بتعبئة هذا النموذج، سنتواصل معك في اقرب فرصة
                    </span>
                    <ContactForm />
                </div>
                <div className="Footer--mobile-divider" />
                <div className="Footer--mobile-links">
                    <div className="Footer--left-second__FooterLinkList">
                        <div className="FooterListLeft">
                            <span>
                                {/* use Link when the CoC PP and TC are on same site */}
                                <a href="https://hackjunction.com/codeofconduct">
                                    Code of Conduct
                                </a>
                            </span>
                            <span>
                                <a href="https://hackjunction.com/policy">
                                    Privacy Policy
                                </a>
                            </span>
                            <span>
                                <a href="https://hackjunction.com/terms">
                                    Terms & Conditions
                                </a>
                            </span>
                        </div>
                        <div className="FooterListRight">
                            <span>
                                <a href="https://hackjunction.com/press">
                                    Press kit
                                </a>
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
                            🧡
                        </span>{" "}
                        &{" "}
                        <span role="img" aria-label="coffee">
                            ☕
                        </span>{" "}
                        by the Junction Team.
                    </div>
                </div>
            </footer>
        )
    }
}

const mapStateToProps = (state) => {
    const content = selectContent(state)

    return {
        siteSlogan: content[KEYS.siteSlogan],
        siteContactEmail: content[KEYS.siteContactEmail],
        homePages: homePages(state),
        eventPages: eventPages(state),
        communityPages: communityPages(state),
        eventConcepts: eventconceptsByPriority(state),
    }
}

export default connect(mapStateToProps)(Footer)
