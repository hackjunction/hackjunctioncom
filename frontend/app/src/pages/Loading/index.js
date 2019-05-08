import React, { PureComponent } from 'react';
import './style.scss';

import LogoSpinner from '../../components/LogoSpinner';
import Page from '../PageHOC';

class LoadingPage extends PureComponent {
    render() {
        return (
            <Page className="LoadingPage">
                <LogoSpinner />
            </Page>
        )
    }
}

export default LoadingPage;
