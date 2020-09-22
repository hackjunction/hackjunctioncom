import React, { PureComponent, Suspense, useEffect, useState } from 'react'
import './style.scss'

import KEYS from '../../../redux/staticcontent/keys'
import MEDIA_KEYS from '../../../redux/staticmedia/keys'

import { Link, Element } from 'react-scroll'

import SectionImage from '../../../components/SectionImage'
import { Grid } from '@material-ui/core'

import '../../../components/HeaderSection/style.scss'

import DividerLine from '../../../components/DividerLine'
import Page from '../../PageHOC'
import Button from '../../../components/Button'
import HeaderSection from '../../../components/HeaderSection'
import BlockSection from '../../../components/BlockSection'

import { job as selectJobs } from '../../../redux/job/selectors'

import { connect } from 'react-redux'

const Jobs = (props)=> {
    console.log(props);
    return (
      <Page
        className="Connected"
        pageTitle="Junction 2020 Connected"
        metaDescKey={KEYS.whoAreWeBody}
        ogImageKey={MEDIA_KEYS.homePageHeaderImage}
      >
        <HeaderSection
          title={'Jobs from Partners'}
          body="Interested in getting hired by one of our partners? Good, because they are looking for more people. More job listings are added all of the time, so stay tuned!"
        >
        </HeaderSection>
      </Page>
    )
}

export default connect((state) => ({ jobs: selectJobs(state) }))(Jobs)