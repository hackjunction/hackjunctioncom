import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import LoadingPage from '../Loading';
import ErrorPage from '../Error';
import NotFoundPage from '../NotFound';
import Page from '../PageHOC';

class OnlineEventPage extends PureComponent {

    render() {
        const { loading, error, page } = this.props;

        if (loading) {
            return <LoadingPage />;
        }

        if (error) {
            return <ErrorPage />;
        }

        if (!page) {
            return <NotFoundPage />;
        }

        return (
            <Page
                pageTitle={page.navTitle || page.pageTitle}
                metaDesc={page.pageSubtitle}
                ogImageUrl={page.headerImage ? page.headerImage.url : null}
            >
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
    // const { match } = ownProps
    // const pages = selectPages(state);

    // return {
    //     page: find(pages, p => p.slug === match.params.slug),
    //     loading: pagesLoading(state),
    //     error: pagesError(state),
    // }

    return {}
}

export default connect(
    mapStateToProps
)(OnlineEventPage);
