import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import moment from 'moment';

import Image from '../../Image';

const EventCalendarEvent = React.memo(({ event }) => {

    return (
        <div className="EventCalendarEvent">
            <Image className="EventCalendarEvent--image" image={event.image} width={600} height={300} />
            <div className="EventCalendarEvent--content">
                <span className="EventCalendarEvent--content__date">{moment(event.begins).format('DD.MM.YYYY')}</span>
                <span className="EventCalendarEvent--content__title">{event.name}</span>
                <span className="EventCalendarEvent--content__location">{event.locationDescription}</span>
            </div>
            {event.linkToEventSite ? (
                <a className="EventCalendarEvent--link" href={event.linkToEventSite} alt="Event site" />
            ) : null}
        </div>
    );
});

const mapStateToProps = (state, ownProps) => {
    const { event } = ownProps;
    if (event.image || !event.eventconcept) {
        return {
            event
        }
    }
    return {
        event: {
            ...event,
            image: event.eventconcept.image,
        }
    }
}

export default connect(mapStateToProps)(EventCalendarEvent);
