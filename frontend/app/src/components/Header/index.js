import React, { useEffect, useState } from "react";
import "./style.scss";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import NavMenu from "./NavMenu";

import NavMenuMobile from "./NavMenu/";

import * as NavActions from "../../redux/nav/actions";
import * as NavSelectors from "../../redux/nav/selectors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleSidebar } from "../../redux/nav/actions";
import { isSidebarOpen } from "../../redux/nav/selectors";

const Header = ({ toggleSidebar, navTitle }) => {
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

    return (
        <>
            <header className={`Header ${isScrolled ? "Header-scrolled" : ""}`}>
                <Link to="/" className="Header--emblem">
                    <img
                        className="Header--emblem__image"
                        src={require("../../assets/logos/emblem_black.png")}
                        alt="Junction logo"
                    />
                </Link>
                <p>tähän ne huutis linkit</p>
                <NavMenu />
            </header>
            <header
                className={`HeaderMobile ${
                    isScrolled ? "Header-scrolled" : ""
                }`}
            >
                <Link to="/" className="HeaderMobile--emblem">
                    <img
                        className="HeaderMobile--emblem__image"
                        src={require("../../assets/logos/emblem_white.png")}
                        alt="Junction logo"
                    />
                </Link>
                <div className="HeaderMobile--icon">
                    <FontAwesomeIcon
                        icon={isSidebarOpen ? "times" : "bars"}
                        size="2x"
                        color="white"
                        onClick={() =>
                            toggleSidebar(isSidebarOpen ? false : true)
                        }
                    />
                </div>
                <NavMenuMobile />
            </header>
        </>
    );
};

const mapStateToProps = (state) => ({
    navTitle: NavSelectors.navTitle(state),
    isSidebarOpen: isSidebarOpen(state),
});
const mapDispatchToProps = (dispatch) => ({
    toggleSidebar: (open) => dispatch(NavActions.toggleSidebar(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
