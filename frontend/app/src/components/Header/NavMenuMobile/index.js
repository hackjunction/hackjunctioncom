import React from "react";

import "./style.scss";

import { connect } from "react-redux";

import SocialMediaIcons from "../../SocialMediaIcons";

import { eventconceptsForNav } from "../../../redux/eventconcepts/selectors";
import { toggleSidebar } from "../../../redux/nav/actions";
import { isSidebarOpen } from "../../../redux/nav/selectors";

import { NavMenuInner } from "../NavMenu";

import {
    homePages,
    eventPages,
    communityPages,
} from "../../../redux/pages/selectors";

const mapStateToPropsInner = (state) => ({
    eventConcepts: eventconceptsForNav(state),
    homePages: homePages(state),
    eventPages: eventPages(state),
    communityPages: communityPages(state),
});

const ConnectedNavMenuInner = connect(mapStateToPropsInner)(NavMenuInner);

const NavMenuMobile = ({ isSidebarOpen, connected }) => {
    return (
        <div>
            <div
                className={`NavMenuMobile ${
                    isSidebarOpen ? "NavMenuMobile-open" : ""
                }`}
            >
                {isSidebarOpen ? (
                    <>
                        <ConnectedNavMenuInner connected={connected} />
                        <SocialMediaIcons />
                    </>
                ) : null}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isSidebarOpen: isSidebarOpen(state),
});

const mapDispatchToProps = (dispatch) => ({
    toggleSidebar: (open) => dispatch(toggleSidebar(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavMenuMobile);
