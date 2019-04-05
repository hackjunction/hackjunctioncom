import React from 'react';
import './style.scss';

import { map } from 'lodash-es';

import BlockSection from '../../BlockSection';
import EventCalendarEvent from '../EventCalendarEvent';

const EventCalendarMonth = ({ month, year, events }) => {
    function renderEvents() {
        return map(events, e => {
            return <EventCalendarEvent key={e.name} event={e} />;
        });
    }

    return (
        <div className="EventCalendarMonth">
            <BlockSection title={month} subtitle={year}>
                <div className="EventCalendarMonth--events">{renderEvents()}</div>
            </BlockSection>
        </div>
    );
};

export default EventCalendarMonth;
