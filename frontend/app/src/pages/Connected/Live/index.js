import React, { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { schedules as selectSchedules } from '../../../redux/schedules/selectors'
import HeaderSection from '../../../components/HeaderSection'
import BasicSection from '../../../components/BasicSection'
import Markdown from '../../../components/Markdown'
import DividerLine from '../../../components/DividerLine'
import SingleColumnSection from '../../../components/SingleColumnSection'

// import NewsLetterForm from '../../components/NewsLetterForm'
import Image from '../../../components/Image'
import EventInfoBlocks from '../../../components/EventInfoBlocks'
import VerticalSection from '../../../components/VerticalSection'
import VerticalText from '../../../components/VerticalText'
import Schedules from '../../../components/Schedules'
import SchedulesService from '../../../services/schedule'
// import OpeningHours from '../../../components/Schedules/OpeningHours'
// import FaqGrid from '../../components/FaqGrid'

import Page from '../../PageHOC'

const Live = () => {
  const [schedule, setSchedule] = useState([])

  //   useEffect(() => {
  //     const fetch = async () => {
  //       const schedules = await SchedulesService.getAll()
  //       console.log('schedules :>> ', schedules)
  //       setSchedule(schedules)
  //     }
  //     fetch()

  //   }, [schedule])
  console.log(
    'Object.values(this.props.schdules) :>> '
    // Object.values(this.props)
  )

  return (
    <Page className="Connected" pageTitle="Junction 2020 Connected">
      <BasicSection title="Friday" subtitle="">
        <Schedules date="friday" />
      </BasicSection>
      <BasicSection title="Saturday">
        <Schedules date="saturday" />
      </BasicSection>
      <BasicSection title="Sunday">
        <Schedules date="sunday" />
      </BasicSection>
    </Page>
  )
}

function MapStateToProps(state, ownProps) {
  var schedules = selectSchedules(state)
  console.log(schedules)
  return {
    schedules: schedules,
  }
}

export default connect(MapStateToProps)(Live)
