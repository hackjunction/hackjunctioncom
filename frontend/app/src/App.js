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
import {
    faTimes,
    faBars,
    faArrowLeft,
    faLongArrowAltLeft,
    faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import PrivacyBanner from "./components/PrivacyBanner";
import ScrollToTop from "./components/ScrollToTop";
import GlobalLifecycle from "./GlobalLifecycle";
import config from "./services/config";

import BasicPage from "./pages/BasicPage";
import NotFoundPage from "./pages/Connected/NotFound";

import Connected from "./pages/Connected";
import Junction from "./pages/Junction";

library.add(fab, faTimes, faBars, faLongArrowAltLeft, faAngleDown);

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
                    <Switch>
                        {/*Connected module */}
                        <Route path="/" component={Connected} />
                        {/*Junction Base module */}
                        <Junction />
                    </Switch>
                </div>
                <ScrollToTop />
                <GlobalLifecycle />
                <PrivacyBanner />
            </main>
        );
    }
}

export default withRouter(App);
