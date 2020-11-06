import React from 'react'
import './style.scss'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import ConnectedHome from './Home'
import EventInfo from './EventInfo'
import HubInfo from './HubInfo'
import Challenges from './Challenges'
import Jobs from './Jobs'
import Arabic from './Arabic'
import Live from './Live'

import NotFoundConnected from './NotFound'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'

const Connected = () => {
  return (
    <div className="Connected">
      <Header connected />
      <div className="App--Content">
        <Switch>
          <Route exact path="/" component={ConnectedHome} />
          <Route exact path="/info" component={EventInfo} />
          <Route exact path="/hubs" component={HubInfo} />
          <Route exact path="/challenges" component={Challenges} />
          <Route exact path="/jobs/:company" component={Jobs} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/arabic" component={Arabic} />
          <Route exact path="/live" component={Live} />
          <Route path="/*" component={NotFoundConnected} />
        </Switch>
        <Footer />
      </div>
    </div>
  )
}

export default withRouter(Connected)
