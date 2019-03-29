import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import moment from 'moment-timezone';

import Image from '../../Image';

import * as ContentSelectors from '../../../redux/content/selectors';
import { getConceptBySlug } from '../../../redux/content/helpers';

const DEFAULT_IMAGE = null;

const EventCalendarEvent = React.memo(({ event, concepts }) => {
    //TODO: Apply this image
    let image = DEFAULT_IMAGE;

    if (event.eventconcept) {
        let concept = getConceptBySlug(event.eventconcept.slug);
        image = concept.image ? concept.image.url : image;
    }

    if (event.image) {
        image = event.image.url;
    }

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

const mapStateToProps = state => ({
    concepts: ContentSelectors.eventconcepts(state)
});

export default connect(mapStateToProps)(EventCalendarEvent);
