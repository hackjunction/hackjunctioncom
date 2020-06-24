import React, { useEffect, useState } from 'react';
import './style.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import NavMenu from './NavMenu';

import * as NavActions from '../../redux/nav/actions';
import * as NavSelectors from '../../redux/nav/selectors';

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
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <React.Fragment>
            <header className={`Header ${isScrolled ? 'Header-scrolled' : ''}`}>
                <div className="Header--menu-button" onClick={() => toggleSidebar(true)}>
                    <i className="icon-menu" />
                </div>
              
                
                <NavMenu />
            </header>
        </React.Fragment>
    );
};

const mapStateToProps = state => ({
    navTitle: NavSelectors.navTitle(state)
});
const mapDispatchToProps = dispatch => ({
    toggleSidebar: open => dispatch(NavActions.toggleSidebar(open))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
