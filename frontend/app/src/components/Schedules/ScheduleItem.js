import React from 'react'
import classNames from 'classnames'
import styles from './styles.scss'

const ScheduleItem = ({ color, name, location, starts, ends }) => {
  const dividerColor = classNames([`ScheduleDivider${color}`])

  return (
    <div className="Schedule">
      <div className="ScheduleItemLeft">
        <span className="ScheduleItemTop">{starts}</span>
        <span className="ScheduleItemBot">{ends}</span>
      </div>
      <div className={dividerColor} />
      <div className="ScheduleItemRight">
        <span className="ScheduleItemTop">{name}</span>
        <span className="ScheduleItemBot">{location}</span>
      </div>
    </div>
  )
}

export default ScheduleItem
