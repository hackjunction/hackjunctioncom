import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import HeaderImage from '../../components/HeaderImage';
import Divider from '../../components/Divider';
import Page from '../PageHOC';

import * as MediaSelectors from '../../redux/media/selectors';
import MEDIA_KEYS from '../../redux/media/keys';

const ErrorPage = ({ headerImage }) => {
    return (
        <Page className="ErrorPage" pageTitle="Error" metaDesc="">
            <HeaderImage
                image={headerImage}
                alt="Header image"
                mainTitle={'Oops, something went wrong'}
                bodyText={
                    "Something went wrong and we're unable to show you anything meaningful here - please reload the page to try again"
                }
            />
            <Divider lg />
        </Page>
    );
};

const mapStateToProps = state => ({
    headerImage: MediaSelectors.mediaByKey(MEDIA_KEYS.errorPageHeaderImage)(state)
});

export default connect(mapStateToProps)(ErrorPage);
