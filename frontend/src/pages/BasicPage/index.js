import React, { useEffect } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import _ from 'lodash';

import LoadingPage from '../Loading';
import ErrorPage from '../Error';
import NotFoundPage from '../NotFound';

import HeaderImage from '../../components/HeaderImage';
import BasicHeader from '../../components/HeaderImage/BasicHeader'
import Divider from '../../components/Divider';
import Markdown from '../../components/Markdown';
import BlockSection from '../../components/BlockSection';

import Page from '../PageHOC';

import CenteredBlock from '../../components/CenteredBlock';

import {
    pages as selectPages,
    pagesLoading,
    pagesError,
} from '../../redux/pages/selectors';

const BasicPage = ({ loading, error, page }) => {

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
        <Page className="BasicPage" pageTitle={page.navTitle || page.pageTitle} metaDesc={page.pageSubtitle}>
            <HeaderImage
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
            <Divider lg />
        </Page>
    );
};

const mapStateToProps = (state, ownProps) => {
    const { match } = ownProps
    const pages = selectPages(state);

    return {
        page: _.find(pages, p => p.slug === match.params.slug),
        loading: pagesLoading(state),
        error: pagesError(state),
    }
}

export default connect(
    mapStateToProps
)(BasicPage);
