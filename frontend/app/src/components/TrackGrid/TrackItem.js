import React, { useState } from "react";
import "./style.scss";

import Markdown from "../Markdown";
import { requirePropFactory } from "@material-ui/core";

const TrackItem = ({ item }) => {
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
            <div className="TrackItem open flip" style={{ animationDuration: aDur + "s" }} onAnimationEnd={(e) => flipStyle(e, false)} onClick={(e) => flipCard(e)}>
                <div className="TrackItem--text">
                    <span className="TrackItem--title">{title}</span>
                    <p className="TrackItem--description">{fulldesc}</p>
                </div>
            </div>
        )
    }
    return (
        <div className="TrackItem closed flip" style={{ backgroundImage: background, animationDuration: aDur + "s"}} onAnimationEnd={(e) => flipStyle(e, false)} onClick={(e) => flipCard(e)}>
            <div className="TrackItem--text">
                <span className="TrackItem--title">{title}</span>
                <p className="TrackItem--description">{desc}</p>
            </div>
            <div className="TrackItem--logowpr">
                {logos &&
                    logos.map((logo) => (
                        <img className="TrackItem--logo" src={logo} />
                    ))}
            </div>
        </div >
    );
};

export default TrackItem;
