import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import moment from 'moment-timezone';

import Image from '../../Image';

import * as ContentSelectors from '../../../redux/content/selectors';
import { getConceptBySlug } from '../../../redux/content/helpers';

const EventCalendarEvent = React.memo(({ event, concepts }) => {

    let image = event.image

    if (!event.image) {
        if (event.eventconcept) {
            let concept = getConceptBySlug(event.eventconcept.slug);
            image = concept.image || image;
        }
    }

    return (

        <div className="EventCalendarEvent">
            <Image className="EventCalendarEvent--image" image={image} width={600} height={300} />
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

const mapStateToProps = state => ({
    concepts: ContentSelectors.eventconcepts(state)
});

export default connect(mapStateToProps)(EventCalendarEvent);
