import React from "react";

import ConnectedHome from "./Home";
import EventInfo from "./EventInfo";
import HubInfo from "./HubInfo";
import Challenges from "./Challenges";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";

const Connected = () => {
    return (
        <Switch>
            <Route exact path="/connected" component={ConnectedHome} />
            <Route exact path="/connected/info" component={EventInfo} />
            <Route exact path="/connected/hubs" component={HubInfo} />
            <Route exact path="/connected/challenges" component={Challenges} />
        </Switch>
    );
};

export default withRouter(Connected);
