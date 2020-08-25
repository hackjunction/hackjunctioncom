import React, { useState } from "react";
import "./style.scss";

import Markdown from "../Markdown";
import { requirePropFactory } from "@material-ui/core";

const ChallengeItem = ({ item }) => {
    //Animation duration
    const aDur = 0.6
    const { title, background, desc, fulldesc, logos, key } = item
    const [open, toggleOpen] = useState(false)

    const flipStyle = (e, state) => {
        e.currentTarget.classList.toggle("flip", state)
        e.currentTarget.doneAnimating = !state
    }
    const flipCard = (e) => {
        if (!e.currentTarget.doneAnimating)
        {
            return
        }
        let style = window.getComputedStyle(e.currentTarget)
        let duration = aDur * 1000
        flipStyle(e, true);
        setTimeout(()=>toggleOpen(!open), duration/2)
    }

    if (open) {
        return (
            <div className="ChallengeItem open flip" style={{ animationDuration: aDur + "s" }} onAnimationEnd={(e) => flipStyle(e, false)} onClick={(e) => flipCard(e)}>
                <div className="ChallengeItem--text">
                    <span className="ChallengeItem--title">{title}</span>
                    <p className="ChallengeItem--description">{fulldesc}</p>
                </div>
            </div>
        )
    }
    return (
        <div className="ChallengeItem closed flip" style={{ backgroundImage: background, animationDuration: aDur + "s"}} onAnimationEnd={(e) => flipStyle(e, false)} onClick={(e) => flipCard(e)}>
            <div className="ChallengeItem--text">
                <span className="ChallengeItem--title">{title}</span>
                <p className="ChallengeItem--description">{desc}</p>
            </div>
            <div className="ChallengeItem--logowpr">
                {logos &&
                    logos.map((logo) => (
                        <img className="ChallengeItem--logo" src={logo} />
                    ))}
            </div>
        </div >
    );
};

export default ChallengeItem;
