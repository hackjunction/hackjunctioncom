import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import * as StaticContentSelectors from '../../redux/static/selectors';
import * as MediaSelectors from '../../redux/media/selectors';
import KEYS from '../../redux/static/keys';
import MEDIA_KEYS from '../../redux/media/keys';

import HeaderImage from '../../components/HeaderImage';
import EventCalendar from '../../components/EventCalendar';
import Divider from '../../components/Divider';

import Page from '../PageHOC';

const CalendarPage = ({ content, headerImage }) => {
    return (
        <Page className="CalendarPage" pageTitle="Calendar" metaDesc={content.calendarPageSubtitle}>
            <HeaderImage
                image={headerImage}
                alt="Header image"
                mainTitle={content.calendarPageTitle}
                bodyText={content.calendarPageSubtitle}
            />
            <EventCalendar />
            <Divider lg />
        </Page>
    );
};

const mapStateToProps = state => ({
    content: StaticContentSelectors.objectWithKeys([KEYS.calendarPageTitle, KEYS.calendarPageSubtitle])(state),
    headerImage: MediaSelectors.mediaByKey(MEDIA_KEYS.calendarPageHeaderImage)(state)
});

export default connect(mapStateToProps)(CalendarPage);
