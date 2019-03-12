import React, { Component } from 'react';
import './App.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './pages/Home'
import ParticipantsPage from './pages/Participants'
import PartnersPage from './pages/Partners'
import EventsPage from './pages/Events'
import CalendarPage from './pages/Calendar'
import TeamPage from './pages/Team'
import ConceptPage from './pages/Concept'
import NotFoundPage from './pages/NotFound'

import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="App--Main">
            <Switch>
              {/* Static pages */}
              <Route exact path="/" component={HomePage} />
              <Route exact path="/participants" component={ParticipantsPage} />
              <Route exact path="/partners" component={PartnersPage} />
              <Route exact path="/concepts" component={EventsPage} />
              <Route exact path="/calendar" component={CalendarPage} />
              <Route exact path="/team" component={TeamPage} />

              {/* Concept pages (JunctionX, HelTech, etc..) */}
              <Route path="/concepts/:id" component={ConceptPage} />

              {/* Other pages */}
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App
