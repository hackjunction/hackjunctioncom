import React, { useState } from 'react';
import './style.scss';

import { connect } from 'react-redux';
import moment from 'moment';

import Image from '../../Image';

const EventCalendarEvent = React.memo(({ event }) => {
    const [active, setActive] = useState(false);

    let eventTime;
    if (event.timeDescription) {
        eventTime = event.timeDescription;
    } else {
        if (moment(event.begins).month() === moment(event.ends).month()) {
            eventTime = `${moment(event.begins).format('MMMM Do')} - ${moment(event.ends).format('Do')}`;
        } else {
            eventTime = `${moment(event.begins).format('MMM Do')} - ${moment(event.ends).format('MMM Do')}`;
        }
    }

    return (
        <div
            className={`EventCalendarEvent ${active ? 'EventCalendarEvent-active' : ''}`}
            onClick={() => setActive(!active)}
        >
            <div className="EventCalendarEvent--main">
                <Image className="EventCalendarEvent--image" image={event.image} width={600} height={300} />
                <div className="EventCalendarEvent--content">
                    <span className="EventCalendarEvent--content__date">{eventTime}</span>
                    <span className="EventCalendarEvent--content__title">{event.name}</span>
                    <span className="EventCalendarEvent--content__location">{event.locationDescription}</span>
                </div>
            </div>
            <div className="EventCalendarEvent--onhover">
                <div className="EventCalendarEvent--onhover-main">
                    <span className="EventCalendarEvent--onhover__title">{event.name}</span>
                    <span className="EventCalendarEvent--onhover__subtitle">
                        {eventTime} | {event.locationDescription}
                    </span>
                    <span className="EventCalendarEvent--onhover__desc">
                        {event.shortDescription || 'No description available...'}
                    </span>
                </div>
                <div className="EventCalendarEvent--onhover__buttons">
                    {event.linkToEventSite ? (
                        <a
                            className="EventCalendarEvent--onhover__button"
                            onClick={e => e.stopPropagation()}
                            href={event.linkToEventSite}
                        >
                            {event.linkToEventSiteText || 'Event website'}
                        </a>
                    ) : null}
                    {event.linkToTickets ? (
                        <a
                            className="EventCalendarEvent--onhover__button"
                            onClick={e => e.stopPropagation()}
                            href={event.linkToTickets}
                        >
                            {event.linkToTicketsText || 'Tickets'}
                        </a>
                    ) : null}
                </div>
            </div>
        </div>
    );
});

const mapStateToProps = (state, ownProps) => {
    const { event } = ownProps;
    if (event.image || !event.eventconcept) {
        return {
            event
        };
    }
    return {
        event: {
            ...event,
            image: event.eventconcept.image
        }
    };
};

export default connect(mapStateToProps)(EventCalendarEvent);
