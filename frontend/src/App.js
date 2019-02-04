import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App--Header">
          <header><h1>Header</h1></header>
        </div>
        <div className="App--Main">
          <img className="App--Main_logo" src={require('./assets/logos/emblem_white.png')} alt="emblem" />
          <h2 className="App--Main_title">React + Strapi boilerplate</h2>
          <p className="App--Main_body">
            This is a simple starter project for a React app powered by the Strapi CMS
            for getting started with any Junction-branded website projects.
            </p>
          <ul>
            <li>A fresh installation of Strapi (Node.js), connected to the React frontend</li>
            <li>SCSS-config with Junction brand colors, fonts and breakpoints and useful small tweaks</li>
            <li>Junction logos and other assets</li>
          </ul>
          <p>Visit <a href="http://localhost:1337/admin">http://localhost:1337/admin</a> to access the admin panel</p>
        </div>
        <div className="App--Footer">
          <footer>
            <small>Powered by Junction</small>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
