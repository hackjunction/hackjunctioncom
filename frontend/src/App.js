import React, { Component } from 'react';
import './App.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import HomePage from './pages/Home'
import ParticipantsPage from './pages/Participants'
import PartnersPage from './pages/Partners'
import ConceptsPage from './pages/Concepts'
import CalendarPage from './pages/Calendar'
import TeamPage from './pages/Team'
import ConceptPage from './pages/Concept'
import NotFoundPage from './pages/NotFound'
import VolunteersPage from './pages/Volunteers'
import OrganisersPage from './pages/Organisers'
import StoryPage from './pages/Story'

import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import GlobalLifecycle from './GlobalLifecycle'

class App extends Component {

  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div className="App">
          <Header />
          <div className="App--Main">
            <Switch>
              {/* Static pages */}
              <Route exact path="/" component={HomePage} />
              <Route exact path="/story" component={StoryPage} />
              <Route exact path="/participants" component={ParticipantsPage} />
              <Route exact path="/partners" component={PartnersPage} />
              <Route exact path="/concepts" component={ConceptsPage} />
              <Route exact path="/calendar" component={CalendarPage} />
              <Route exact path="/team" component={TeamPage} />
              <Route exact path="/volunteers" component={VolunteersPage} />
              <Route exact path="/organisers" component={OrganisersPage} />

              {/* Concept pages (JunctionX, HelTech, etc..) */}
              <Route path="/concepts/:slug" component={ConceptPage} />

              {/* Other pages */}
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </div>
          <Footer />
          <ScrollToTop />
          <GlobalLifecycle />
        </div>
      </ConnectedRouter>
    );
  }
}

export default App
