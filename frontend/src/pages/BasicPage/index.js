import React, { useEffect } from 'react';
import './style.scss';
import { connect } from 'react-redux';

import LoadingPage from '../Loading';
import ErrorPage from '../Error';
import NotFoundPage from '../NotFound';

import HeaderImage from '../../components/HeaderImage';
import Divider from '../../components/Divider';
import Markdown from '../../components/Markdown';

import Page from '../PageHOC';

import * as ContentSelectors from '../../redux/content/selectors';
import * as ContentActions from '../../redux/content/actions';
import CenteredBlock from '../../components/CenteredBlock';

const BasicPage = ({ match, shouldUpdate, updatePages, loading, error, getPage }) => {
    const slug = match.params.slug;

    useEffect(() => {
        if (shouldUpdate) {
            updatePages();
        }
    }, []);

    if (loading) {
        return <LoadingPage />;
    }

    if (error) {
        return <ErrorPage />;
    }

    const page = getPage(slug);

    if (!page) {
        return <NotFoundPage />;
    }

    return (
        <Page className="BasicPage" pageTitle={page.pageTitle} metaDesc={page.pageSubtitle}>
            <HeaderImage
                src={require('../../assets/images/default_image.jpg')}
                alt="Header image"
                navTitle={page.navTitle}
                mainTitle={page.pageTitle}
                bodyText={page.pageSubtitle}
            />
            <CenteredBlock>
                <Markdown source={page.body} />
            </CenteredBlock>
            <Divider lg />
        </Page>
    );
};

const mapStateToProps = state => ({
    getPage: slug => ContentSelectors.pageBySlug(slug)(state),
    loading: ContentSelectors.pagesLoading(state),
    error: ContentSelectors.pagesError(state),
    shouldUpdate: ContentSelectors.pagesShouldUpdate(state)
});

const mapDispatchToProps = dispatch => ({
    updatePages: () => dispatch(ContentActions.updatePages())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BasicPage);
