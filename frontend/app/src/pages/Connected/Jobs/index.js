import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import HeaderSection from '../../../components/HeaderSection'
import '../../../components/HeaderSection/style.scss'
import JobItem from '../../../components/JobItem'
import { job as selectJobs } from '../../../redux/job/selectors'
import KEYS from '../../../redux/staticcontent/keys'
import MEDIA_KEYS from '../../../redux/staticmedia/keys'
import Page from '../../PageHOC'
import './style.scss'

const Jobs = (props) => {
  console.log(props)
  const { company } = useParams()

  return (
    <Page
      className="Connected"
      pageTitle="Junction 2020 Connected"
      metaDescKey={KEYS.whoAreWeBody}
      ogImageKey={MEDIA_KEYS.homePageHeaderImage}
    >
      <HeaderSection
        title={!company ? 'Jobs from Partners' : `Jobs from ${company}`}
        body="Interested in getting hired by one of our partners? Good, because they are looking for more people. More job listings are added all of the time, so stay tuned!"
      ></HeaderSection>
      {!company
        ? props.jobs.map((job) => <JobItem job={job} />)
        : props.jobs
            .filter((p) => p.company === company)
            .map((job) => <JobItem job={job} />)}
    </Page>
  )
}

export default connect((state) => ({ jobs: selectJobs(state) }))(Jobs)
