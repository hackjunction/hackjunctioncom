import React, { PureComponent } from 'react';
import './style.scss';

import HeaderImage from '../../components/HeaderImage';
import BasicHeader from '../../components/HeaderImage/BasicHeader';
import Divider from '../../components/Divider';
import Page from '../PageHOC';

import MEDIA_KEYS from '../../redux/staticmedia/keys';

class ErrorPage extends PureComponent {
    render() {
        return (
            <Page className="ErrorPage" pageTitle="Error" metaDesc="">
                <HeaderImage
                    imageKey={MEDIA_KEYS.errorPageHeaderImage}
                    alt="Header image"
                >
                    <BasicHeader title={'Oops, something went wrong'} body={
                        "Something went wrong and we're unable to show you anything meaningful here - please reload the page to try again"
                    } />
                </HeaderImage>
                <Divider lg />
            </Page>
        );
    }
}

export default ErrorPage
