import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import HeaderImage from '../../components/HeaderImage';
import Divider from '../../components/Divider';
import Page from '../PageHOC';

import * as MediaSelectors from '../../redux/media/selectors';
import MEDIA_KEYS from '../../redux/media/keys';
import { mediaByKey } from '../../redux/media/helpers';

const ErrorPage = ({ allMedia }) => {
    const headerImage = mediaByKey(allMedia, MEDIA_KEYS.errorPageHeaderImage);
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
    allMedia: MediaSelectors.media(state)
});

export default connect(mapStateToProps)(ErrorPage);
