import React, { useEffect } from 'react';
import './style.scss';
import _ from 'lodash';
import moment from 'moment-timezone';
import { connect } from 'react-redux';

import EventCalendarYear from './EventCalendarYear';
import LinkButton from '../LinkButton';

import { filterEvents } from '../../redux/events/helpers';

import {
    upcomingEvents,
    eventsLoading,
    eventsError,
} from '../../redux/events/selectors';

const EventCalendar = ({ events, loading, error, title, concept = null, category = null }) => {
    const filtered = filterEvents(events, concept, category);

    function renderEvents() {

        if (filtered.length === 0) {
            return (
                <div className="EventCalendar--no-events">
                    <p className="EventCalendar--no-events__body">No events scheduled yet. Check back here later!</p>
                </div>
            );
        }

        const sorted = _.sortBy(filtered, e => e.begins);
        const groupedByYear = _.groupBy(sorted, e => moment(e.begins).format('YYYY'));

        const calendarYears = [];

        _.forOwn(groupedByYear, (events, year) => {
            calendarYears.push(<EventCalendarYear key={year} year={year} events={events} />);
        });

        return calendarYears;
    }

    return (
        <div className="EventCalendar">
            {filtered.length > 0 ? <h3 className="EventCalendar--title">{title}</h3> : null}
            <div className="EventCalendar--events">{renderEvents()}</div>
            <div className="EventCalendar--more">
                {concept || category ? (
                    <LinkButton to="/calendar" text="See all events" />
                ) : null}
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    events: upcomingEvents(state),
    loading: eventsLoading(state),
    error: eventsError(state)
});

export default connect(
    mapStateToProps
)(EventCalendar);
