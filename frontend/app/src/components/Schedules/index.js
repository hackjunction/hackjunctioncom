import React from 'react'
import { connect } from 'react-redux'

import { schedules as selectSchedules } from '../../redux/schedules/selectors'

import styles from './styles.scss'
import ScheduleItem from './ScheduleItem'
import test from './test.json'

const schedules = (props) => {
  const renderSchedules = () => {
    return test
      .filter((schedule) => schedule.day === props.date)
      .map((schedule) => {
        return (
          <ScheduleItem {...schedule} key={schedule.name + schedule.starts} />
        )
      })
  }
  return <div className="Schedules">{renderSchedules(props.schedules)}</div>
}

// const MapStateToProps = (state, ownProps) => {
//   const date = ownProps.date
//   switch (date) {
//     case 'friday':
//       return {
//         schedules: selectSchedules.schedulesFriday(state),
//       }
//     case 'saturday':
//       return {
//         schedules: selectSchedules.schedulesSaturday(state),
//       }
//     case 'sunday':
//       return {
//         schedules: selectSchedules.schedulesSunday(state),
//       }
//     default:
//       return
//   }
// }
//connect(MapStateToProps)
export default schedules
