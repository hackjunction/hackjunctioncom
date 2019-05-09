import React, { PureComponent, Suspense } from 'react';
import './App.scss';
import './styles/global.scss';
import './assets/fontello/css/fontello.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import ReactPixel from 'react-facebook-pixel';
import ReactGA from 'react-ga';
import WebFont from 'webfontloader';

import Header from './components/Header';
import Footer from './components/Footer';
import PrivacyBanner from './components/PrivacyBanner';
import ScrollToTop from './components/ScrollToTop';
import GlobalLifecycle from './GlobalLifecycle';
import LoadingPage from './pages/Loading';
import config from './services/config';

import HomePage from './pages/Home';
import ParticipantsPage from './pages/Participants';
import PartnersPage from './pages/Partners';
import ConceptsPage from './pages/Concepts';
import CalendarPage from './pages/Calendar';
import TeamPage from './pages/Team';
import ConceptPage from './pages/Concept';
import BasicPage from './pages/BasicPage';
import VolunteersPage from './pages/Volunteers';
import OrganisersPage from './pages/Organisers';
import StoryPage from './pages/Story';
import NotFoundPage from './pages/NotFound';

WebFont.load({
    google: {
        families: [
            'Montserrat:400,400i,700,700i',
            'Lato:400,400i,700,700i',
        ]
    }
});

class App extends PureComponent {

    componentDidMount() {

        if (config.FACEBOOK_PIXEL_ID) {
            ReactPixel.init(config.FACEBOOK_PIXEL_ID, {}, { autoConfig: true, debug: false });
        }

        if (config.GOOGLE_ANALYTICS_ID) {
            ReactGA.initialize(config.GOOGLE_ANALYTICS_ID);
        }

        this.handleRouteChange(this.props.history.location);
        this.unlisten = this.props.history.listen(this.handleRouteChange)
    }

    componentWillUnmount() {
        this.unlisten();
    }

    handleRouteChange(location) {
        if (config.GOOGLE_ANALYTICS_ID) {
            ReactGA.pageview(location.pathname);
        }

        if (config.FACEBOOK_PIXEL_ID) {
            ReactPixel.pageView();
        }
    }

    render() {
        return (
            <main className="App">
                <PrivacyBanner />
                <Header />
                <div className="App--Main">
                    <Suspense fallback={<LoadingPage />}>
                        <Switch>
                            {/* Redirects */}
                            <Redirect path="/privacy" to="/policy" />

                            {/* Static pages */}
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/story" component={StoryPage} />
                            <Route exact path="/participants" component={ParticipantsPage} />
                            <Route exact path="/partners" component={PartnersPage} />
                            <Route exact path="/concepts" component={ConceptsPage} />
                            <Route exact path="/calendar" component={CalendarPage} />
                            <Route exact path="/team" component={TeamPage} />
                            <Route exact path="/volunteers" component={VolunteersPage} />
                            <Route exact path="/organisers" component={OrganisersPage} />

                            {/* Concept pages (JunctionX, HelTech, etc..) */}
                            <Route path="/concepts/:slug" component={ConceptPage} />

                            {/* Other pages */}
                            <Route path="/:slug" component={BasicPage} />

                            <Route path="*" component={NotFoundPage} />
                        </Switch>
                    </Suspense>
                </div>
                <Footer />
                <ScrollToTop />
                <GlobalLifecycle />
            </main>
        );
    }
}

export default withRouter(App);
