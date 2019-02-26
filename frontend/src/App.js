import React, { Component } from 'react';
import './App.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './pages/Home'

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
              <Route path="/" component={HomePage} />
              <Route path="*" component={null} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App
