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
    } = item
    var { cardbackground, icon } = item
    if (!cardbackground) {
        cardbackground = { url: '' }
    }
    if (!icon) {
        icon = { url: '' }
    }
    const [open, toggleOpen] = useState(false)
    const [clicable, toggleClicable] = useState(true)
    var blurStyle = ""
    var isFirefox = typeof InstallTrigger !== 'undefined'

    const flipStyle = (e, state) => {
        e.currentTarget.classList.toggle('flip', state)
        e.currentTarget.doneAnimating = !state
    }
    const flipCard = (e) => {
        console.log('===', clicable)
        if (!clicable) {
            return
        }
        let duration = aDur * 1000
        flipStyle(e, true)
        setTimeout(() => toggleOpen(!open), duration / 2)
    }
    if (isFirefox) {
        blurStyle = "FirefoxBlur"
    } else {
        blurStyle = "Blur"
    }
    console.log(blurStyle)
    if (open) {
        return (
            <div className={blurStyle} onClick={(e) => flipCard(e)}>
                <div
                    className="ChallengeItem open flip"
                    style={{ animationDuration: aDur + 's' }}
                    onAnimationEnd={(e) => flipStyle(e, false)}
                    onMouseEnter={(e) => {
                        toggleClicable(false)
                    }}
                    onMouseLeave={(e) => {
                        toggleClicable(true)
                    }}
                >
                    <div className="ChallengeItem--text">
                        <img class="ChallengeIco open" src={icon.url} />
                        <span
                            href="#"
                            class="close"
                            onMouseEnter={(e) => {
                                toggleClicable(true)
                            }}
                            onMouseLeave={(e) => {
                                toggleClicable(false)
                            }}
                        ></span>
                        <span className="ChallengeItem--title">{name}</span>
                        <p className="ChallengeItem--description">{shorttext}</p>
                        <p className="ChallengeItem--description">{long_text}</p>
                        <div className="ChallengeItem--subsection">
                            <p className="ChallengeItem--left">The Challenge</p>
                            <p className="ChallengeItem--right">{thechallenge}</p>
                        </div>
                        <div className="ChallengeItem--subsection">
                            <p className="ChallengeItem--left">Insights</p>
                            <p className="ChallengeItem--right">{insights}</p>
                        </div>
                        {insightimage && <img class="InsightImg" src={insightimage.url} />}
                        <div className="ChallengeItem--subsection">
                            <p className="ChallengeItem--left">The Prize</p>
                            <p className="ChallengeItem--right">{price}</p>
                        </div>
                        <div className="ChallengeItem--subsection">
                            <p className="ChallengeItem--left">Judging Criteria</p>
                            <p className="ChallengeItem--right">{judging}</p>
                        </div>
                        <div className="ChallengeItem--subsection">
                            <p className="ChallengeItem--left">About the company</p>
                            <p className="ChallengeItem--right">{aboutcompany}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div
            className="ChallengeItem closed flip"
            style={{
                backgroundImage: 'url(' + cardbackground.url + ')',
                animationDuration: aDur + 's',
            }}
            onAnimationEnd={(e) => flipStyle(e, false)}
            onClick={(e) => flipCard(e)}
        >
            <div className="ChallengeItem--logowpr">
                <img class="ChallengeIco" src={icon.url} />
            </div>
            <div className="ChallengeItem--text">
                <span className="ChallengeItem--title">{name}</span>
                <p className="ChallengeItem--description">{shorttext}</p>
            </div>
        </div>
    )
}

export default ChallengeItem
