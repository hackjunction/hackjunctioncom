import React from 'react'
import './style.scss'

import { Link, Element, animateScroll as scroll } from 'react-scroll'

import KEYS from '../../../redux/staticcontent/keys'
import MEDIA_KEYS from '../../../redux/staticmedia/keys'

import SectionImage from '../../../components/SectionImage'
import Page from '../../PageHOC'
import HeaderSection from '../../../components/HeaderSection'
import SingleColumnSection from '../../../components/SingleColumnSection'
import BlockSection from '../../../components/BlockSection'
import DividerLine from '../../../components/DividerLine'
import Button from '../../../components/Button'
import LinkButton from '../../../components/LinkButton'

import Timeline from '../Components/Timeline'
import FaqSection from '../Components/FaqSection'

import { connect } from 'react-redux'
import { faq as selectQuestions } from '../../../redux/faq/selectors'

// Used to create category buttons and to store strapi questions
const items = [
  {
    title: 'General',
    questions: [],
  },
  {
    title: 'Schedule',
    questions: [],
  },
  {
    title: 'Submissions',
    questions: [],
  },
  {
    title: 'Hubs',
    questions: [],
  },
  {
    title: 'Online',
    questions: [],
  },
  {
    title: 'Tracks & Challenges',
    questions: [],
  },
]

const EventInfo = (props) => {
  return (
    <Page
      className="Connected ConnectedContent EventInfo"
      pageTitle="Event Info"
      metaDescKey={KEYS.whoAreWeBody}
      ogImageKey={MEDIA_KEYS.homePageHeaderImage}
    >
      <HeaderSection
        title="Event information"
        body="Happening simultaneously both virtually and physically, Junction 2020 Connected has the best of both worlds: the spirit of a traditional Junction hackathon with the fresh possibilities that online hackathons have to offer."
      >
        <div className="Button-row">
          {/*
                    <Button
                        className="Button-default"
                        text="General Information"
                    />
                    <Button className="Button-default" text="For Partners" />*/}

          <Link
            activeClass="active"
            to="timeline"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Button className="Button-default" text="The Junction Journey" />
          </Link>
          <LinkButton
            className="Button-default cityButton"
            isExternal
            to={'https://next.brella.io/events/connected/'}
            text="Brella"
          />
          <Link
            activeClass="active"
            to="faq"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Button className="Button-default" text="FAQ" />
          </Link>
        </div>
      </HeaderSection>
      <DividerLine />
      <SectionImage
        image={{
          url: require('../../../assets/images/connected/info/timeline.webp'),
        }}
        alt="Junction Journey"
      />
      <DividerLine />
      <Element className="MobileLink" name="timeline" id="timeline" />
      <BlockSection
        name="timelineElement"
        id="timelineElement"
        title="The Junction Journey"
        className="TimeLineSection"
        extra={<img src={require('../../../assets/images/3part-chain.svg')} />}
      >
        {/* <h1 className="TimeLineTitle">The Junction Journey</h1>
                <h2 className="MobileTitle">the Junction Journey</h2> */}
        <Timeline date="September 1st">Application period begins</Timeline>
        <Timeline date="September 30th">Brella opens for participants</Timeline>
        <Timeline date="October 9th">Matchmaking in Brella opens</Timeline>
        <Timeline date="October 28th">Hub Application Deadline</Timeline>
        <Timeline date="November 1st">Hub Confirmation Deadline</Timeline>
        <Timeline date="November 2nd">Hel Tech</Timeline>
        <Timeline date="November 4th">Application Deadline</Timeline>
        <Timeline date="November 6th-8th" last>
          Junction 2020 Connected
        </Timeline>
        {/* <Timeline date="November 8th" last>
                    Junction 2020 Connected ends
                </Timeline> */}
      </BlockSection>
      {/* Not relevant yet
            <SingleColumnSection
                title="Schedule of the weekend"
                halfpage
            ></SingleColumnSection>
            */}
      <DividerLine />
      <SectionImage
        image={{
          url: require('../../../assets/images/connected/info/website6.webp'),
        }}
        alt="FAQ"
      />
      <DividerLine />
      <Element className="MobileLink" name="faq" id="faq" />
      <SingleColumnSection
        name="faqElement"
        id="faqElement"
        title="FAQ"
        center
        nolimit
      >
        <FaqSection items={props.items} />
        <div className="ContactUsFaq">
          <p>
            Didn’t find what you were looking for? Our team is happy to help you
            with anything and everything, just shoot us a message!
          </p>
          <div>
            <a href="mailto:hello@hackjunction.com">
              <Button className="Button-default" text="Contact us" />
            </a>
          </div>
        </div>
      </SingleColumnSection>
    </Page>
  )
}

const mapStateToProps = (state, ownProps) => {
  var questions = selectQuestions(state)
  items.key = 'items'
  //Loop through questions in strapi
  for (let q of questions) {
    //Loop through categories in legacy code
    for (let cat of items) {
      //If category already exist and question not in category
      if (cat.title == q.category && !checkQInCat(q, cat)) {
        console.log(
          cat.title +
            " found, pushing '" +
            q.question +
            "' in category '" +
            q.category +
            "'"
        )
        cat.questions.push(q)
      }
      /*else if(!checkQInCat(q, cat) && cat.title != q.category)
            {
                let lastCategory = items[items.length - 1];
                if (!checkQInCat(q, lastCategory) && !checkQInCat(q, cat))
                {
                    //Push question in last category, supposed to be misc, if it's not, well shit
                    lastCategory.questions.push(q);
                }
            }*/
    }
  }
  console.log('Items:')
  console.log(items)
  return {
    items: items,
  }
}

const checkQInCat = (q, cat) => {
  for (let catQ of cat.questions) {
    if (catQ.key == q.key) {
      return true
    }
  }
  return false
}

export default connect(mapStateToProps)(EventInfo)
