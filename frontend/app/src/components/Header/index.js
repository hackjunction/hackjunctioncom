import React, { useEffect, useState } from "react";
import "./style.scss";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import NavMenu from "./NavMenu";

import NavMenuMobile from "./NavMenuMobile";

import SocialMediaIcons from "../SocialMediaIcons";

import * as NavActions from "../../redux/nav/actions";
import * as NavSelectors from "../../redux/nav/selectors";
import MenuIcon from "@material-ui/icons/Menu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ navTitle, toggleSidebar, isSidebarOpen, connected }) => {
    const [isScrolled, setScrolled] = useState(window.scrollY >= 400);

    function handleScroll() {
        if (window.scrollY >= 400) {
            if (!isScrolled) {
                setScrolled(true);
            }
        } else {
            if (isScrolled) {
                setScrolled(false);
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    let headerClass = "HeaderMobile";
    if (isSidebarOpen) {
        headerClass += " HeaderMobile--open";
    }

    return (
        <>
            <header className={`Header ${connected ? "Connected" : ""}`}>
                {connected ? (
                    <Link to="/" className="Header--connected">
                        <img
                            className="Header--connected__image"
                            src={require("../../assets/logos/connected_logo.svg")}
                            alt="Junction 2020 Connected logo"
                            onClick={() => toggleSidebar(false)}
                        />
                    </Link>
                ) : (
                    <Link to="/" className="Header--emblem">
                        <img
                            className="Header--emblem__image"
                            src={require("../../assets/logos/emblem_black.png")}
                            alt="Junction logo"
                            onClick={() => toggleSidebar(false)}
                        />
                    </Link>
                )}

                <SocialMediaIcons />
                <NavMenu connected={connected} />
            </header>
            <header className={headerClass}>
                <div className="HeaderMobileRow">
                    {connected ? (
                        <Link to="/" className="HeaderMobile--connected">
                            <img
                                className="HeaderMobile--connected__image"
                                src={require("../../assets/logos/header-j2020c-logo.svg")}
                                alt="Junction 2020 Connected logo"
                                onClick={() => toggleSidebar(false)}
                            />
                        </Link>
                    ) : (
                        <Link
                            to="/"
                            className="HeaderMobile--emblem"
                            onClick={() => toggleSidebar(false)}
                        >
                            <img
                                className="HeaderMobile--emblem__image"
                                src={require("../../assets/logos/emblem_white.png")}
                                alt="Junction logo"
                                onClick={() => toggleSidebar(false)}
                            />
                        </Link>
                    )}
                    <div className="HeaderMobile--icon">
                        <FontAwesomeIcon
                            icon={isSidebarOpen ? "times" : "bars"}
                            size="2x"
                            color="#f5d2a2"
                            onClick={() =>
                                toggleSidebar(isSidebarOpen ? false : true)
                            }
                        />
                    </div>
                </div>
                <NavMenuMobile connected={connected} />
            </header>
        </>
    );
};

const mapStateToProps = (state) => ({
    navTitle: NavSelectors.navTitle(state),
    isSidebarOpen: NavSelectors.isSidebarOpen(state),
});
const mapDispatchToProps = (dispatch) => ({
    toggleSidebar: (open) => dispatch(NavActions.toggleSidebar(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
