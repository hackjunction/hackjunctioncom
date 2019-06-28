import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { filter, sortBy } from 'lodash-es';
import './style.scss';

import CountdownNow from 'react-countdown-now';

class Countdown extends PureComponent {
    static propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape({
                date: PropTypes.date,
                render: PropTypes.func
            })
        ),
        renderDone: PropTypes.func
    };

    getUpcomingCountdowns() {
        const upcomingDates = filter(this.props.items, item => moment(item.date).isAfter());
        const sorted = sortBy(upcomingDates, item => moment(item.date).fromNow());
        return sorted;
    }

    render() {
        const upcoming = this.getUpcomingCountdowns();

        return (
            <CountdownNow
                date={upcoming.length > 0 ? upcoming[0].date : Date.now() - 1}
                renderer={props => {
                    if (props.completed) {
                        if (upcoming.length > 1) {
                            return <Countdown items={upcoming.slice(1)} renderDone={this.props.renderDone} />;
                        } else {
                            return this.props.renderDone();
                        }
                    } else {
                        return upcoming[0].render(props);
                    }
                }}
            />
        );
    }
}

export default Countdown;
