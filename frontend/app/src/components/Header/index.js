import React, { useEffect, useState } from "react";
import "./style.scss";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import NavMenu from "./NavMenu";

import * as NavActions from "../../redux/nav/actions";
import * as NavSelectors from "../../redux/nav/selectors";

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
    );
};

const mapStateToProps = (state) => ({
    navTitle: NavSelectors.navTitle(state),
});
const mapDispatchToProps = (dispatch) => ({
    toggleSidebar: (open) => dispatch(NavActions.toggleSidebar(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
