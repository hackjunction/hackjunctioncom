import React, { useState } from 'react'
import './style.scss'

import Markdown from '../Markdown'
import { requirePropFactory } from '@material-ui/core'
import AnimateHeight from 'react-animate-height'
import { Link, Element, animateScroll as scroll } from 'react-scroll'

const MobileLayout = (props) => {
  //Animation duration

  //   var { cardbackground, icon } = item
  if (!props.cardbackground) {
    props.cardbackground = { url: '' }
  }
  //   if (!props.cardbackground) {
  //     props.cardbackground = { url: '' }
  //   }
  const [open, setOpen] = useState(false)
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

  const jump = (event, targetDiv) => {
    event.preventDefault()
    window.location.href = targetDiv
  }

  function mylinkfunction(e, targetDiv) {
    window.location.href = targetDiv

    /* need to stop the form sending of the form

        UPDATE as comment: This may not be exactly correct syntax 
        for stopping a form , look up preventing form submission */

    e.preventDefault()
    e.stopPropagation()
  }
  //   if (open) {
  return (
    <div className="MobileItem" onClick={() => setOpen(true)}>
      <Element class="MobileLink" name={props.company} id={props.company} />
      <div className="MobileItem--head">
        <img className="MobileItem--image" src={props.cardbackground.url} />
        <div className="MobileItem--title-container">
          <span className="MobileItem--title">{props.name}</span>
        </div>
        <div className="MobileItem--shorttext-container">
          <span className="MobileItem--shorttext"> {props.shorttext}</span>
        </div>
        <AnimateHeight duration={300} height={open ? 'auto' : 0}>
          <div
            className={`MobileItem-hidden ${open ? 'MobileItem-expanded' : ''}`}
          >
            <div className="MobileItem--longtext-container">
              <Markdown className="MobileItem--longtext">
                {' '}
                source={props.long_text}
              </Markdown>
            </div>
            <div className="MobileItem--subsection">
              <span className="MobileItem--subsection-left">The Challenge</span>
              <Markdown
                className="MobileItem--subsection-right"
                source={props.thechallenge}
              />
            </div>
            {props.insights && (
              <div className="MobileItem--subsection">
                <span className="MobileItem--subsection-left"> Insights</span>
                <Markdown
                  className="MobileItem--subsection-right"
                  source={props.insights}
                />
              </div>
            )}
            {props.support && (
              <div className="MobileItem--subsection">
                <span className="MobileItem--subsection-left"> Support</span>
                <Markdown
                  className="MobileItem--subsection-right"
                  source={props.support}
                />
              </div>
            )}
            {/* {insightimage && <img class="InsightImg" src={insightimage.url} />} */}
            {props.price && (
              <div className="MobileItem--subsection">
                <span className="MobileItem--subsection-left"> The Prize</span>
                <Markdown
                  className="MobileItem--subsection-right"
                  source={props.price}
                />
              </div>
            )}

            {props.judging && (
              <div className="MobileItem--subsection">
                <span className="MobileItem--subsection-left">
                  {' '}
                  Judging Criteria
                </span>
                <Markdown
                  className="MobileItem--subsection-right"
                  source={props.judging}
                />
              </div>
            )}

            <div className="MobileItem--subsection">
              <span className="MobileItem--subsection-left">
                {' '}
                About the company
              </span>
              <Markdown
                className="MobileItem--subsection-right"
                source={props.aboutcompany}
              />
            </div>
          </div>
        </AnimateHeight>

        <div className="MobileItem--arrow--center">
          <p className={`${open ? 'hide' : ''}`}>Read More</p>
          <Link
            activeClass="active"
            to={props.company}
            spy={true}
            smooth={true}
            duration={500}
          >
            <i
              className={`icon-right-open MobileItem--arrow ${
                open ? 'MobileItem-expanded--arrow' : ''
              }`}
              onClick={() => setOpen(false)}
            />
          </Link>
          {/* // Add arrow here */}
        </div>
      </div>
    </div>
  )
}

export default MobileLayout
