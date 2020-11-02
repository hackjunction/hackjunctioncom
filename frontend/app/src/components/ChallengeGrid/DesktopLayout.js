import React, { useState } from 'react'
import './style.scss'

import Markdown from '../Markdown'
import { requirePropFactory } from '@material-ui/core'

const DesktopLayout = (props) => {
  //Animation duration

  //   var { cardbackground, icon } = item
  //   if (!cardbackground) {
  //     cardbackground = { url: '' }
  //   }
  //if (!props.cardbackground) {
  //  props.cardbackground = { url: '' }
  //}
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
        <img className="ChallengeItem--image" src={props.cardbackground?props.cardbackground.url:""} />
        <div className="ChallengeItem--title-container">
          <span className="ChallengeItem--title">{props.name}</span>
        </div>
        <div className="ChallengeItem--shorttext-container">
          <span className="ChallengeItem--shorttext"> {props.shorttext}</span>
        </div>
        <div className="ChallengeItem--longtext-container">
          <Markdown
            className="ChallengeItem--longtext"
            source={props.long_text}
          />
        </div>
        <div className="ChallengeItem--subsection">
          <span className="ChallengeItem--subsection-left">The Challenge</span>
          <Markdown
            className="ChallengeItem--subsection-right"
            source={props.thechallenge}
          />
        </div>
        {props.insights && (
          <div className="ChallengeItem--subsection">
            <span className="ChallengeItem--subsection-left"> Insights</span>
            <Markdown
              className="ChallengeItem--subsection-right"
              source={props.insights}
            />
          </div>
        )}

        {props.support && (
          <div className="ChallengeItem--subsection">
            <span className="ChallengeItem--subsection-left"> Support</span>
            <Markdown
              className="ChallengeItem--subsection-right"
              source={props.support}
            />
          </div>
        )}
        {/* {insightimage && <img class="InsightImg" src={insightimage.url} />} */}
        {props.price && (
          <div className="ChallengeItem--subsection">
            <span className="ChallengeItem--subsection-left"> The Prize</span>
            <Markdown
              className="ChallengeItem--subsection-right"
              source={props.price}
            />
          </div>
        )}

        {props.judging && (
          <div className="ChallengeItem--subsection">
            <span className="ChallengeItem--subsection-left">
              {' '}
              Judging Criteria
            </span>
            <Markdown
              className="ChallengeItem--subsection-right"
              source={props.judging}
            />
          </div>
        )}

        <div className="ChallengeItem--subsection">
          <span className="ChallengeItem--subsection-left">
            {' '}
            About the company
          </span>
          <Markdown
            className="ChallengeItem--subsection-right"
            source={props.aboutcompany}
          />
        </div>
      </div>
    </div>
  )
}

export default DesktopLayout
