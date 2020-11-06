import React from 'react'
import './style.scss'

import KEYS from '../../../redux/staticcontent/keys'
import MEDIA_KEYS from '../../../redux/staticmedia/keys'

import { content as selectContent } from '../../../redux/staticcontent/selectors'
import { connect } from 'react-redux'

import SectionImage from '../../../components/SectionImage'
import Page from '../../PageHOC'
import HeaderSection from '../../../components/HeaderSection'
import SingleColumnSection from '../../../components/SingleColumnSection'
import DividerLine from '../../../components/DividerLine'
import Button from '../../../components/Button'
import { Link, Element } from 'react-scroll'
import LinkButton from '../../../components/LinkButton'
import Markdown from '../../../components/Markdown'
import Planet from '../../../components/Planet'

const textsJSON = require('./texts.json')

const HubInfo = (props) => {
  return (
    <Page
      className="Connected ConnectedContent Hubs"
      pageTitle="Hub Info"
      metaDescKey={KEYS.whoAreWeBody}
      ogImageKey={MEDIA_KEYS.homePageHeaderImage}
    >
      <HeaderSection title={props.HeaderTitle} body={props.HeaderBody}>
        <Link
          activeClass="active"
          to="whatishub"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Button className="Button-default" text="What is a Hub" />
        </Link>
        <Link
          activeClass="active"
          to="central"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Button className="Button-default" text="Central Hub" />
        </Link>
        <Link
          activeClass="active"
          to="hubstories"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Button className="Button-default" text="Hub locations" />
        </Link>
      </HeaderSection>
      <DividerLine />
      <SectionImage
        image={{
          url: require('../../../assets/images/hubs/Stockholm_hub.webp'),
        }}
        alt="Stockholm hub"
      ></SectionImage>
      <DividerLine />
      <Element name="whatishub" />
      <SingleColumnSection
        title={props.Section1Title}
        subtitle={props.Section1Subtitle}
        center
        halfpage
      >
        <div className="markdownCenter">
          <Markdown source={props.Section1Body} />
        </div>
      </SingleColumnSection>
      <DividerLine />
      <SectionImage
        image={{
          url: require('../../../assets/images/hubs/Helsinki_hub.webp'),
        }}
        alt="Helsinki hub"
      />
      <DividerLine />
      <Element name="central" />
      <SingleColumnSection
        title={props.Section2Title}
        subtitle={props.Section2Subtitle}
        halfpage
        center
      >
        <div className="markdownCenter">
          <Markdown source={props.Section2Body} />
        </div>
      </SingleColumnSection>
      <DividerLine />
      <SectionImage
        image={{
          url: require('../../../assets/images/hubs/Chengdu_hub.webp'),
        }}
        alt="Chengdu hub"
      />
      <DividerLine />
      <Element name="hubstories" />

      <SingleColumnSection
        title={props.Section3Title}
        subtitle={props.Section3Subtitle}
        center
        halfpage
        className="HubSections"
      >
        <div className="markdownCenter">
          <Markdown source={props.Section3Body} />
        </div>
      </SingleColumnSection>
      <SingleColumnSection
        title={props.Section3CitiesTitle}
        center
        halfpage
        className="HubSections"
      >
        <div className="planetDiv">
          <Planet />
        </div>
        <div className="citiesGrid">
          {props.Section3Cities.split(', ').map((city) => {
            return <p className="citiesText">{city}</p>
          })}
        </div>
      </SingleColumnSection>
      <DividerLine />
      <SectionImage
        image={{
          url: require('../../../assets/images/hubs/Cambridge_hub.webp'),
        }}
        alt="Cambridge hub"
      />
      <DividerLine />
      {/*
      <SingleColumnSection
        center
        halfpage
        title={props.Section4Title}
        subtitle={props.Section4Subtitle}

      >
        <div className="markdownCenter">
          <Markdown source={props.Section4Body} />
        </div>
      </SingleColumnSection>
      */}
    </Page>
  )
}

const mapStateToProps = (state) => {
  const content = selectContent(state)
  let contentTexts = {}

  for (let key of Object.keys(textsJSON)) {
    //Find key in strapi if exists, else use fallback in texts.json
    contentTexts[key] = content[textsJSON.prefix + key] || textsJSON[key]
  }

  return contentTexts
}

export default connect(mapStateToProps)(HubInfo)
