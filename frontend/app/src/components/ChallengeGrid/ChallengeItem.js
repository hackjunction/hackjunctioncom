import React, { useState } from "react";
import "./style.scss";

import Markdown from "../Markdown";
import { requirePropFactory } from "@material-ui/core";

const ChallengeItem = ({ item }) => {
    //Animation duration
    const aDur = 0.6
    const { name, shorttext, long_text, tags, key } = item
    var {cardbackground, icon} = item
    if (!cardbackground)
    {
        cardbackground = {url:""}
    }
    if (!icon)
    {
        icon = {url:""}
    }
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
        let duration = aDur * 1000
        flipStyle(e, true);
        setTimeout(()=>toggleOpen(!open), duration/2)
    }

    if (open) {
        return (
            <div className="ChallengeItem open flip" style={{ animationDuration: aDur + "s" }} onAnimationEnd={(e) => flipStyle(e, false)} onClick={(e) => flipCard(e)}>
                <div className="ChallengeItem--text">
                    <span className="ChallengeItem--title">{shorttext}</span>
                    <p className="ChallengeItem--description">{long_text}</p>
                </div>
            </div>
        )
    }
    return (
        <div className="ChallengeItem closed flip" style={{ backgroundImage: "url("+cardbackground.url+")", animationDuration: aDur + "s"}} onAnimationEnd={(e) => flipStyle(e, false)} onClick={(e) => flipCard(e)}>
            <div className="ChallengeItem--text">
                <span className="ChallengeItem--title">{name}</span>
                <p className="ChallengeItem--description">{shorttext}</p>
            </div>
            <div className="ChallengeItem--logowpr">
                <img class="ChallengeIco" src={icon.url}/>
            </div>
        </div >
    );
};

export default ChallengeItem;
