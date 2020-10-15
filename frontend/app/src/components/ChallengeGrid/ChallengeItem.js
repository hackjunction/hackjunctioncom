import React, { useState } from 'react'
import './style.scss'

import Markdown from '../Markdown'
import { requirePropFactory } from '@material-ui/core'

const ChallengeItem = ({ item }) => {
  //Animation duration
  const aDur = 0.6
  const {
    name,
    company,
    shorttext,
    long_text,
    thechallenge,
    insights,
    price,
    judging,
    aboutcompany,
    insightimage,
    tags,
    key,
    support,
  } = item
  var { cardbackground, icon } = item
  if (!cardbackground) {
    cardbackground = { url: '' }
  }
  if (!icon) {
    icon = { url: '' }
  }
  //   const [open, toggleOpen] = useState(false)
  //   const [clicable, toggleClicable] = useState(true)

  //   const flipStyle = (e, state) => {
  //     e.currentTarget.classList.toggle('flip', state)
  //     e.currentTarget.doneAnimating = !state
  //   }
  //   const flipCard = (e) => {
  //     console.log('===', clicable)
  //     if (!clicable) {
  //       return
  //     }
  //     let duration = aDur * 1000
  //     flipStyle(e, true)
  //     setTimeout(() => toggleOpen(!open), duration / 2)
  //   }

  //   if (open) {
  return (
    <div className="ChallengeItem">
      <div className="ChallengeItem--head">
        <img className="ChallengeItem--image" src={icon.url} />
        <div className="ChallengeItem--title-container">
          <span className="ChallengeItem--title">{name}</span>
        </div>
        <div className="ChallengeItem--shorttext-container">
          <span className="ChallengeItem--shorttext"> {shorttext}</span>
        </div>
        <div className="ChallengeItem--longtext-container">
          <span className="ChallengeItem--longtext"> {long_text}</span>
        </div>
        <div className="ChallengeItem--subsection">
          <span className="ChallengeItem--subsection-left">The Challenge</span>
          <Markdown
            className="ChallengeItem--subsection-right"
            source={thechallenge}
          />
        </div>
        <div className="ChallengeItem--subsection">
          <span className="ChallengeItem--subsection-left"> Insights</span>
          <Markdown
            className="ChallengeItem--subsection-right"
            source={insights}
          />
        </div>

        {support && (
          <div className="ChallengeItem--subsection">
            <span className="ChallengeItem--subsection-left"> Support</span>
            <Markdown
              className="ChallengeItem--subsection-right"
              source={support}
            />
          </div>
        )}
        {/* {insightimage && <img class="InsightImg" src={insightimage.url} />} */}

        <div className="ChallengeItem--subsection">
          <span className="ChallengeItem--subsection-left"> The Prize</span>
          <Markdown
            className="ChallengeItem--subsection-right"
            source={price}
          />
        </div>

        <div className="ChallengeItem--subsection">
          <span className="ChallengeItem--subsection-left">
            {' '}
            Judging Criteria
          </span>
          <Markdown
            className="ChallengeItem--subsection-right"
            source={judging}
          />
        </div>

        <div className="ChallengeItem--subsection">
          <span className="ChallengeItem--subsection-left">
            {' '}
            About the company
          </span>
          <Markdown
            className="ChallengeItem--subsection-right"
            source={aboutcompany}
          />
        </div>
      </div>
    </div>
  )
}

export default ChallengeItem
