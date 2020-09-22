import React, { PureComponent, Suspense } from 'react'
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
import TrackGrid from '../../../components/TrackGrid'
import BlockSection from '../../../components/BlockSection'
import ChallengeGrid from '../../../components/ChallengeGrid'

import { challenges as selectChallenges } from '../../../redux/challenges/selectors'
import { connect } from 'react-redux'

class Jobs extends PureComponent {
  render() {
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
}

function MapStateToProps(state, ownProps) {
  return {}
}

export default connect(MapStateToProps)(Jobs)
