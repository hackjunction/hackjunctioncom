import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import HeaderImage from '../../components/HeaderImage';
import Divider from '../../components/Divider';
import Page from '../PageHOC';

import * as MediaSelectors from '../../redux/media/selectors';
import MEDIA_KEYS from '../../redux/media/keys';
import { mediaByKey } from '../../redux/media/helpers';

const NotFoundPage = ({ allMedia }) => {
    const headerImage = mediaByKey(allMedia, MEDIA_KEYS.notFoundPageHeaderImage);
    return (
        <Page className="NotFoundPage" pageTitle="404">
            <HeaderImage
                image={headerImage}
                alt="Header image"
                mainTitle={'Page not found'}
                bodyText={"It seems like the page you were looking for doesn't exist..."}
            />
            <Divider lg />
        </Page>
    );
};

const mapStateToProps = state => ({
    allMedia: MediaSelectors.media(state)
});

export default connect(mapStateToProps)(NotFoundPage);
