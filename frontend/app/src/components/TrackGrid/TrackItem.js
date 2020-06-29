import React, { useState } from "react";
import "./style.scss";

import Markdown from "../Markdown";
import { requirePropFactory } from "@material-ui/core";

const TrackItem = ({ item }) => {
    const { title, desc, logos, key } = item;
    const [open, toggleOpen] = useState(false);
    const word = [
        "wordmark_J",
        "wordmark_U",
        "wordmark_N",
        "wordmark_C",
        "wordmark_T",
        "wordmark_I",
        "wordmark_O",
        "wordmark_N",
        "emblem_black",
    ];
    if (open) {
        return (
            <div className="TrackItem open" onClick={() => toggleOpen(!open)}>
                <div className="TrackItem--number">
                    <img src={require(`../../assets/logos/${word[key]}.svg`)} />
                </div>
            </div>
        );
    }
    return (
        <div className="TrackItem" onClick={() => toggleOpen(!open)}>
            <div className="TrackItem--number">{key + 1}</div>
            <div>
                <span className="TrackItem--title">{title}</span>
                <Markdown className="TrackItem--description" source={desc} />
            </div>
            <img src={logos} />
        </div>
    );
};

export default TrackItem;
