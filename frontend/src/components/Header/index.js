import React, { useEffect, useState } from 'react';
import './style.scss';

import { connect } from 'react-redux';
import _ from 'lodash';

import NavMenu from './NavMenu';

import * as NavActions from '../../redux/nav/actions';
import * as NavSelectors from '../../redux/nav/selectors';

const Header = ({ toggleSidebar, navTitle }) => {

    const [transparentNav, setTransparentNav] = useState(isTransparentNav());

    function isTransparentNav() {
        return window.scrollY <= 200;
    }

    function handleScroll(e) {
        setTransparentNav(isTransparentNav());
    }

    useEffect(() => {
        const throttledScroll = _.throttle(handleScroll, 200);
        window.addEventListener('scroll', throttledScroll);

        return () => {
            window.removeEventListener('scroll', throttledScroll);
        };
    }, []);


    return (
        <header className={`Header ${transparentNav ? 'Header-is-transparent' : ''}`}>
            <div className="Header--menu-button" onClick={() => toggleSidebar(true)}>
                <i className="Header--menu-button fas fa-bars" />
            </div>
            <div className="Header--nav-title">
                <h1 className="Header--nav-title__text">{navTitle}</h1>
            </div>
            <div className="Header--emblem">
                <img
                    className="Header--emblem__image"
                    src={require('../../assets/logos/emblem_white.png')}
                    alt="Junction logo"
                />
            </div>
            <NavMenu />
        </header>
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
