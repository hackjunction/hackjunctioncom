import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import * as StaticContentSelectors from '../../redux/static/selectors';
import * as MediaSelectors from '../../redux/media/selectors';
import { objectWithKeys } from '../../redux/static/helpers';
import { mediaByKey } from '../../redux/media/helpers';
import KEYS from '../../redux/static/keys';
import MEDIA_KEYS from '../../redux/media/keys';

import HeaderImage from '../../components/HeaderImage';
import BasicHeader from '../../components/HeaderImage/BasicHeader';
import EventCalendar from '../../components/EventCalendar';
import Divider from '../../components/Divider';
import NewsLetterForm from '../../components/NewsLetterForm';

import Page from '../PageHOC';

const CONTENT_KEYS = [KEYS.calendarPageTitle, KEYS.calendarPageSubtitle];

const CalendarPage = ({ allContent, allMedia }) => {
    const content = objectWithKeys(allContent, CONTENT_KEYS);
    const headerImage = mediaByKey(allMedia, MEDIA_KEYS.calendarPageHeaderImage);
    return (
        <Page className="CalendarPage" pageTitle="Calendar" metaDesc={content.calendarPageSubtitle}>
            <HeaderImage
                image={headerImage}
                alt="Header image"
            >
                <BasicHeader title={content.calendarPageTitle} body={content.calendarPageSubtitle} />
            </HeaderImage>
            <EventCalendar />
            <Divider lg />
            <NewsLetterForm />
            <Divider lg />
        </Page>
    );
};

const mapStateToProps = state => ({
    allContent: StaticContentSelectors.content(state),
    allMedia: MediaSelectors.media(state)
});

export default connect(mapStateToProps)(CalendarPage);
