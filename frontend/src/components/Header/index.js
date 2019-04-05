import React, { useEffect, useState } from 'react';
import './style.scss';

import { connect } from 'react-redux';
import _ from 'lodash';

import NavMenu from './NavMenu';

import * as NavActions from '../../redux/nav/actions';
import * as NavSelectors from '../../redux/nav/selectors';

const Header = ({ toggleSidebar, navTitle }) => {
    return (
        <React.Fragment>
            <header className={'Header'}>
                <div className="Header--menu-button" onClick={() => toggleSidebar(true)}>
                    <i className="Header--menu-button icon-menu" />
                </div>
                <div className="Header--nav-title">
                    <h1 className="Header--nav-title__text">{navTitle}</h1>
                </div>
                <div className="Header--emblem">
                    <img
                        className="Header--emblem__image"
                        src={require('../../assets/logos/emblem_white_small.png')}
                        alt="Junction logo"
                    />
                </div>
                <NavMenu />
            </header>
            <div className="Header--to-top" />
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
