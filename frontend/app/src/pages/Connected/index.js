import React from "react";
import "./style.scss";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import ConnectedHome from "./Home";
import EventInfo from "./EventInfo";
import HubInfo from "./HubInfo";
import Challenges from "./Challenges";

import NotFoundPage from "../NotFound";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";

const Connected = () => {
    return (
        <div className="Connected">
            <Header connected />
            <div className="App--Content">
                <Switch>
                    <Route exact path="/connected" component={ConnectedHome} />
                    <Route exact path="/connected/info" component={EventInfo} />
                    <Route exact path="/connected/hubs" component={HubInfo} />
                    <Route
                        exact
                        path="/connected/challenges"
                        component={Challenges}
                    />
                    <Route path="/connected/*" component={NotFoundPage} />
                </Switch>
                <Footer connected />
            </div>
        </div>
    );
};

export default withRouter(Connected);
