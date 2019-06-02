import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash-es';

import LoadingPage from '../Loading';
import ErrorPage from '../Error';
import NotFoundPage from '../NotFound';
import Page from '../PageHOC';

import {
    onlineEvents,
    onlineEventsLoading,
    onlineEventsError,
} from '../../redux/onlineevents/selectors';

class OnlineEventPage extends PureComponent {

    render() {
        const { loading, error, event } = this.props;

        if (loading) {
            return <LoadingPage />;
        }

        if (error) {
            return <ErrorPage />;
        }

        if (!event) {
            return <NotFoundPage />;
        }

        return (
            <Page
                pageTitle={event.navTitle || event.name}
                metaDesc={event.punchline}
                ogImageUrl={event.headerImage ? event.headerImage.url : null}
            >
                <h1>{event.name}</h1>
                {/* <HeaderImage
                    image={page.headerImage}
                    alt="Header image"
                >
                    <BasicHeader title={page.pageTitle} body={page.pageSubtitle} />
                </HeaderImage>
                <BlockSection title={page.topSectionTitle} subtitle={page.topSectionSubtitle}>
                    {page.topSectionBody ? <Markdown source={page.topSectionBody} /> : null}
                </BlockSection>
                <Divider lg />
                <CenteredBlock>
                    <Markdown source={page.body} />
                </CenteredBlock>
                <Divider lg /> */}
            </Page>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { match } = ownProps;
    const events = onlineEvents(state);

    return {
        event: find(events, e => e.slug === match.params.slug),
        loading: onlineEventsLoading(state),
        error: onlineEventsError(state),
    }
}

export default connect(
    mapStateToProps
)(OnlineEventPage);
