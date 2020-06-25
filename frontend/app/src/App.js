import React, { PureComponent } from "react";
import "./App.scss";
import "./styles/global.scss";
import "./assets/fontello/css/fontello.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import ReactGA from "react-ga";
import WebFont from "webfontloader";
import { hotjar } from "react-hotjar";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivacyBanner from "./components/PrivacyBanner";
import ScrollToTop from "./components/ScrollToTop";
import GlobalLifecycle from "./GlobalLifecycle";
import config from "./services/config";

import HomePage from "./pages/Home";
import ParticipantsPage from "./pages/Participants";
import PartnersPage from "./pages/Partners";
import ConceptsPage from "./pages/Concepts";
import CalendarPage from "./pages/Calendar";
import TeamPage from "./pages/Team";
import ConceptPage from "./pages/Concept";
import BasicPage from "./pages/BasicPage";
import OnlineEventPage from "./pages/OnlineEventPage";
import VolunteersPage from "./pages/Volunteers";
import OrganisersPage from "./pages/Organisers";
import StoryPage from "./pages/Story";
import NotFoundPage from "./pages/NotFound";

library.add(fab, faTimes, faBars);

WebFont.load({
    google: {
        families: ["Montserrat:400,400i,700,700i", "Lato:400,400i,700,700i"],
    },
});

class App extends PureComponent {
    componentDidMount() {
        if (config.GOOGLE_ANALYTICS_ID) {
            ReactGA.initialize(config.GOOGLE_ANALYTICS_ID);
        }

        if (config.HOTJAR_ID && config.HOTJAR_SV) {
            hotjar.initialize(config.HOTJAR_ID, config.HOTJAR_SV);
        }

        this.handleRouteChange(this.props.history.location);
        this.unlisten = this.props.history.listen(this.handleRouteChange);
    }

    componentWillUnmount() {
        this.unlisten();
    }

    handleRouteChange(location) {
        if (config.GOOGLE_ANALYTICS_ID) {
            ReactGA.pageview(location.pathname);
        }
    }

    render() {
        return (
            <main className="App">
                <div className="App--Main">
                    <Header />
                    <div className="App--Content">
                        <Switch>
                            {/* Redirects */}
                            <Redirect path="/privacy" to="/policy" />
                            <Redirect path="/organisers" to="/organizers" />

                            {/* Static pages */}
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/story" component={StoryPage} />
                            <Route
                                exact
                                path="/participants"
                                component={ParticipantsPage}
                            />
                            <Route
                                exact
                                path="/partners"
                                component={PartnersPage}
                            />
                            <Route
                                exact
                                path="/concepts"
                                component={ConceptsPage}
                            />
                            <Route
                                exact
                                path="/calendar"
                                component={CalendarPage}
                            />
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
                            <Route
                                path="/concepts/:slug"
                                component={ConceptPage}
                            />

                            {/* Online event pages */}
                            <Route
                                path="/online/:slug"
                                component={OnlineEventPage}
                            />

                            {/* Other pages */}
                            <Route path="/:slug" component={BasicPage} />

                            <Route path="*" component={NotFoundPage} />
                        </Switch>
                        <Footer />
                    </div>
                </div>
                <ScrollToTop />
                <GlobalLifecycle />
                <PrivacyBanner />
            </main>
        );
    }
}

export default withRouter(App);
