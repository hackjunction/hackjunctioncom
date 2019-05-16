import React, { PureComponent } from 'react';
import './style.scss';
import { sortBy, groupBy, forOwn } from 'lodash-es';
import moment from 'moment';
import { connect } from 'react-redux';

import EventCalendarYear from './EventCalendarYear';
import LinkButton from '../LinkButton';

import { filterEvents } from '../../redux/events/helpers';

import { updateEvents } from '../../redux/events/actions';

import {
    upcomingCalendarEvents,
    eventsLoading,
    eventsError,
} from '../../redux/events/selectors';

class EventCalendar extends PureComponent {

    componentDidMount() {
        this.props.updateEvents();
    }

    renderEvents(filtered) {
        if (filtered.length === 0) {
            return (
                <div className="EventCalendar--no-events">
                    <p className="EventCalendar--no-events__body">No events scheduled yet. Check back here later!</p>
                </div>
            );
        }

        const sorted = sortBy(filtered, e => e.begins);
        const groupedByYear = groupBy(sorted, e => moment(e.begins).format('YYYY'));

        const calendarYears = [];

        forOwn(groupedByYear, (events, year) => {
            calendarYears.push(<EventCalendarYear key={year} year={year} events={events} />);
        });

        return calendarYears;
    }

    render() {
        const { events, title, concept, category, hideOnEmpty } = this.props;

        const filtered = filterEvents(events, concept, category);

        if (hideOnEmpty && filtered.length === 0) {
            return null;
        }

        return (
            <div className="EventCalendar">
                {filtered.length > 0 ? <h3 className="EventCalendar--title">{title}</h3> : null}
                <div className="EventCalendar--events">{this.renderEvents(filtered)}</div>
                <div className="EventCalendar--more">
                    {concept || category ? (
                        <LinkButton to="/calendar" text="See all events" />
                    ) : null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    events: upcomingCalendarEvents(state),
    loading: eventsLoading(state),
    error: eventsError(state)
});

const mapDispatchToProps = dispatch => ({
    updateEvents: () => dispatch(updateEvents())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(EventCalendar);
