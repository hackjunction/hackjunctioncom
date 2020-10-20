import React from 'react'

import './style.scss'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { map } from 'lodash-es'

import { eventconceptsForNav } from '../../../redux/eventconcepts/selectors'
import { toggleSidebar } from '../../../redux/nav/actions'
import { isSidebarOpen } from '../../../redux/nav/selectors'
import { HashLink } from 'react-router-hash-link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  homePages,
  eventPages,
  communityPages,
} from '../../../redux/pages/selectors'

const ExtraPagesSection = React.memo(({ pages }) => {
  return map(pages, (page) => {
    return (
      <Link
        key={page.slug}
        className="NavMenu--inner__menu-item"
        to={'/' + page.slug}
      >
        {page.navTitle}
      </Link>
    )
  })
})

const ConceptPagesSection = React.memo(({ concepts }) => {
  const conceptLinks = map(concepts, (concept) => {
    return (
      <Link
        key={concept.slug}
        className="NavMenu--inner__menu-item"
        to={`/concepts/${concept.slug}`}
      >
        {concept.name}
      </Link>
    )
  })

  return <React.Fragment>{conceptLinks}</React.Fragment>
})

const NavLink = ({ to, children, key, title = false, toggleSidebar }) => {
  if (title) {
    return (
      <HashLink to={to} key={key} onClick={() => toggleSidebar(false)}>
        <h6 className="NavMenu--inner__menu-title">{children}</h6>
      </HashLink>
    )
  }
  return (
    <HashLink
      className="NavMenu--inner__menu-item"
      to={to}
      key={key}
      onClick={() => toggleSidebar(false)}
    >
      {children}
    </HashLink>
  )
}

const ConnectedContent = () => {
  return (
    <>
      <a href="https://hackjunction.com">
        <FontAwesomeIcon icon="long-arrow-alt-left" size="1x" />
        <span className="toHome">Back to Junction</span>
      </a>
      <ConnectedNavLink to="/" title>
        Home
      </ConnectedNavLink>
      <ConnectedNavLink to="/info" title>
        Event info
      </ConnectedNavLink>
      <ConnectedNavLink to="/info/#timeline">
        The Junction Journey
      </ConnectedNavLink>
      <ConnectedNavLink to="/info/#faq">FAQ</ConnectedNavLink>

      <ConnectedNavLink title to="/hubs">
        Hubs
      </ConnectedNavLink>
      <ConnectedNavLink title to="/challenges">
        Challenges
      </ConnectedNavLink>
      <ConnectedNavLink title to="/jobs">
        Jobs
      </ConnectedNavLink>
      {/*
            <ConnectedNavLink to="/hubs">
                Hub locations
            </ConnectedNavLink>
            <ConnectedNavLink to="/connected/hubs">
                What is a hub
            </ConnectedNavLink>
            <ConnectedNavLink to="/connected/hubs">
                Hub stories
            </ConnectedNavLink>

            <ConnectedNavLink to="/challenges" title>
                Challenges
            </ConnectedNavLink>
            <ConnectedNavLink to="/partners">Event partners</ConnectedNavLink>
            <ConnectedNavLink to="/challenges">Challenges</ConnectedNavLink> */}

      {/*
            <ConnectedNavLink title>Important links</ConnectedNavLink>
            <ConnectedNavLink to="/participants">Registration</ConnectedNavLink>
            <ConnectedNavLink to="/volunteers">Submissions</ConnectedNavLink>
            <ConnectedNavLink to="/volunteers">All projects</ConnectedNavLink>
            <ConnectedNavLink to="/volunteers">Hackerpack</ConnectedNavLink>
            <ConnectedNavLink to="/volunteers">Brella</ConnectedNavLink>
            */}
    </>
  )
}

const MainContent = React.memo(
  ({ eventConcepts, homePages, eventPages, communityPages }) => {
    return (
      <>
        <ConnectedNavLink to="/" title>
          About us
        </ConnectedNavLink>
        <ConnectedNavLink to="/story">Our story</ConnectedNavLink>
        <ConnectedNavLink to="/contact">Contact us</ConnectedNavLink>

        <ConnectedNavLink title to="/partners">
          For partners
        </ConnectedNavLink>
        <ConnectedNavLink to="/why">Benefits of a hackathon</ConnectedNavLink>
        <ConnectedNavLink to="/services">What we offer</ConnectedNavLink>
        <ConnectedNavLink to="/references">References</ConnectedNavLink>
        <ConnectedNavLink to="/frequently-asked-questions">
          FAQ
        </ConnectedNavLink>

        <ConnectedNavLink to="/events" title>
          Events
        </ConnectedNavLink>
        <ConnectedNavLink key={'Connected'} to={`/connected`}>
          Connected
        </ConnectedNavLink>
        <ConceptPagesSection concepts={eventConcepts} />
        <ExtraPagesSection pages={eventPages} />

        <ConnectedNavLink to="/community" title>
          Community
        </ConnectedNavLink>
        <ConnectedNavLink to="/participants">For participants</ConnectedNavLink>
        <ConnectedNavLink to="/volunteers">For volunteers</ConnectedNavLink>
      </>
    )
  }
)

export const NavMenuInner = ({ connected }) => {
  return (
    <div className="NavMenu--inner">
      <nav className="NavMenu--inner__menu">
        {connected ? <ConnectedContent /> : <MainContent />}
      </nav>
      <div className="top" />
      <div className="bottom" />
      <div className="left" />
      <div className="right" />
    </div>
  )
}

const mapStateToPropsInner = (state) => ({
  eventConcepts: eventconceptsForNav(state),
  homePages: homePages(state),
  eventPages: eventPages(state),
  communityPages: communityPages(state),
})

const ConnectedNavMenuInner = connect(mapStateToPropsInner)(NavMenuInner)

const NavMenu = ({ isSidebarOpen, toggleSidebar, connected }) => {
  return (
    <div className="NavMenuWrapper">
      <div
        className={`NavMenuOverlay ${
          isSidebarOpen ? 'NavMenuOverlay-open' : ''
        }`}
        onClick={() => toggleSidebar(false)}
      />
      <div
        className={`NavMenu ${isSidebarOpen ? 'NavMenu-open' : ''} ${
          connected ? 'Connected' : 'Junction'
        }`}
      >
        <div className="NavMenu--exit">
          <button
            className={
              isSidebarOpen
                ? 'hamburger hamburger--spin is-active'
                : 'hamburger hamburger--spin'
            }
            onClick={() => toggleSidebar(isSidebarOpen ? false : true)}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        {isSidebarOpen && <ConnectedNavMenuInner connected={connected} />}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isSidebarOpen: isSidebarOpen(state),
})

const mapDispatchToProps = (dispatch) => ({
  toggleSidebar: (open) => dispatch(toggleSidebar(open)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu)

const ConnectedNavLink = connect(null, mapDispatchToProps)(NavLink)
