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
            <div className="EventCalendarEvent--top">
                <h4 className="EventCalendarEvent--title">{event.name}</h4>
                <div className="EventCalendarEvent--detail">
                    <img
                        className="EventCalendarEvent--detail__icon"
                        src={require('../../../assets/icons/calendar.png')}
                        alt="Calendar icon"
                    />
                    <span className="EventCalendarEvent--detail__text">
                        {moment(event.begins).format('DD.MM.YYYY')}
                    </span>
                </div>
            </div>
            <div className="EventCalendarEvent--bottom">
                <div className="EventCalendarEvent--detail">
                    <img
                        className="EventCalendarEvent--detail__icon"
                        src={require('../../../assets/icons/pointer.png')}
                        alt="Location icon"
                    />
                    <span className="EventCalendarEvent--detail__text">{event.locationDescription}</span>
                </div>
            </div>
            {/* <h4 className="EventCalendarEvent--name">{event.name}</h4>
            <div className="EventCalendarEvent--details">
                <div className="EventCalendarEvent--detail">
                    <i className="EventCalendarEvent--detail__icon" />
                    <span className="EventCalendarEvent--detail__text">
                        {moment(event.begins).format('DD.MM.YYYY')}
                    </span>
                </div>
                <div className="EventCalendarEvent--detail">
                    <div className="EventCalendarEvent--detail__icon">
                        <i className="EventCalendarEvent--detail__icon-inner" />
                    </div>
                    <span className="EventCalendarEvent--detail__text">{event.locationdescription}</span>
                </div>
            </div>
            <a className="EventCalendarEvent--pagelink" href={event.linkToEventSite}>
                <span className="EventCalendarEvent--pagelink__text">Event page</span>
            </a> */}
        </div>
    );
});

const mapStateToProps = state => ({
    concepts: ContentSelectors.eventconcepts(state)
});

export default connect(mapStateToProps)(EventCalendarEvent);
