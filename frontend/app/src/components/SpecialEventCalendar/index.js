import React, { useEffect, useState, useMemo } from 'react';
import styles from './SpecialEventCalendar.module.scss';
import { connect } from 'react-redux';
import { sortBy } from 'lodash-es';
import moment from 'moment';
import * as EventActions from '../../redux/events/actions';
import LinkButton from '../LinkButton';
import Divider from '../Divider';
import SingleColumnSection from '../SingleColumnSection';

const SpecialEventCalendar = ({ title, events, updateEvents }) => {
    const [filters, setFilters] = useState('All');
    useEffect(() => {
        updateEvents();
    }, []);

    const sortedEvents = useMemo(() => {
        const filtered = events.filter(event => {
            if (filters === 'All') {
                return true;
            }

            if (filters === 'Other') {
                if (event.locationDescription.toLowerCase().indexOf('finland') === -1) {
                    return true;
                }
            }

            if (filters === 'Finland') {
                if (event.locationDescription.toLowerCase().indexOf('finland') !== -1) {
                    return true;
                }
            }
            return false;
        });
        return sortBy(filtered, 'begins');
    }, []);

    function renderFilters() {
        return (
            <div className={styles.filters}>
                <span
                    className={`${styles.filtersOption} ${filters === 'Other' ? styles.filtersOptionSelected : ''}`}
                    onClick={() => setFilters('Other')}
                >
                    Europe & Africa
                </span>
                <span className={styles.filtersDivider}>/</span>
                <span
                    className={`${styles.filtersOption} ${filters === 'Finland' ? styles.filtersOptionSelected : ''}`}
                    onClick={() => setFilters('Finland')}
                >
                    Finland
                </span>
                <span className={styles.filtersDivider}>/</span>

                <span
                    className={`${styles.filtersOption} ${filters === 'All' ? styles.filtersOptionSelected : ''}`}
                    onClick={() => setFilters('All')}
                >
                    All
                </span>
            </div>
        );
    }

    function renderEvents() {
        return sortedEvents.map(event => {
            const date = moment(event.begins);
            return (
                <React.Fragment key={event._id}>
                    <div className={styles.eventRow}>
                        <div className={styles.eventRowDate}>
                            <span className={styles.eventRowDateMonth}>{date.format('MMM').toUpperCase()}</span>
                            <span className={styles.eventRowDateDay}>{date.format('D')}</span>
                            <span className={styles.eventRowDateYear}>{date.format('YYYY')}</span>
                        </div>
                        <div className={styles.eventRowMiddle}>
                            <span className={styles.eventRowLocation}>{event.locationDescription}</span>
                        </div>
                        <div className={styles.eventRowLink}>
                            <LinkButton isExternal to={event.linkToEventSite} text="More info" />
                        </div>
                    </div>
                    <Divider md />
                </React.Fragment>
            );
        });
    }

    if (!sortedEvents || sortedEvents.length === 0) {
        return null;
    }

    return (
        <SingleColumnSection>
            <h2 className={styles.title}>{title}</h2>
            {renderFilters()}
            {renderEvents()}
        </SingleColumnSection>
    );
};

const mapDispatchToProps = dispatch => ({
    updateEvents: () => dispatch(EventActions.updateEvents())
});

export default connect(null, mapDispatchToProps)(SpecialEventCalendar);
