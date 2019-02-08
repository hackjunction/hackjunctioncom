import React, { Component } from 'react';
import './App.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import EventsPage from './pages/Events'

import Header from './components/Header'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="App--Main">
            <Route path="/" component={EventsPage} />
          </div>
          <div className="App--Footer">
            <footer>
              <small>Powered by Junction</small>
            </footer>
          </div>
        </div>
      </Router>
    );
  }
}

export default App
