import React from 'react';
import './style.scss';

import LogoSpinner from '../../components/LogoSpinner';
import Page from '../PageHOC';

const LoadingPage = () => {
    return (
        <Page className="LoadingPage">
            <LogoSpinner />
        </Page>
    );
};

export default LoadingPage;
