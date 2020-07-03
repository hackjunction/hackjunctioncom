import React, { PureComponent } from "react";
import "./style.scss";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import HomePage from "./Home";
import ParticipantsPage from "./Participants";
import PartnersPage from "./Partners";
import ConceptsPage from "./Concepts";
import CalendarPage from "./Calendar";
import TeamPage from "./Team";
import ConceptPage from "./Concept";
import OnlineEventPage from "./OnlineEventPage";
import VolunteersPage from "./Volunteers";
import OrganisersPage from "./Organisers";
import AboutPage from "./About";
import StoryPage from "./Story";

import BasicPage from "../BasicPage";
import NotFoundPage from "../NotFound";

import { withRouter } from "react-router";

const Junction = () => {
    return (
        <>
            <Header />
            <div className="App--Content">
                <Switch>
                    {/* Static pages */}
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/story" component={StoryPage} />
                    <Route
                        exact
                        path="/participants"
                        component={ParticipantsPage}
                    />
                    <Route exact path="/partners" component={PartnersPage} />
                    <Route exact path="/concepts" component={ConceptsPage} />
                    <Route exact path="/calendar" component={CalendarPage} />
                    <Route exact path="/team" component={TeamPage} />
                    <Route
                        exact
                        path="/volunteers"
                        component={VolunteersPage}
                    />
                    <Route
                        exact
                        path="/organizers"
                        component={OrganisersPage}
                    />
                    {/* Concept pages (JunctionX, HelTech, etc..) */}
                    <Route path="/concepts/:slug" component={ConceptPage} />
                    {/* Online event pages */}
                    <Route path="/online/:slug" component={OnlineEventPage} />
                    <Route path="/:slug" component={BasicPage} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
                <Footer />
            </div>
        </>
    );
};

export default withRouter(Junction);
