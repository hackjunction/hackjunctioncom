import React from 'react'
import styles from './styles.scss'

const hourItem = ({ name, days, hours }) => {
  return (
    <div>
      <span className={styles.HourItemTitle}>{name}</span>
      <div className={styles.Hour}>
        <div className={styles.HourItemLeft}>
          <span className={styles.HourItemDays}>{days}</span>
        </div>
        <div className={styles.HourItemDivider} />
        <div className={styles.HourItemRight}>
          <span className={styles.HourItemHours}>{hours}</span>
        </div>
      </div>
    </div>
  )
}

export default hourItem
