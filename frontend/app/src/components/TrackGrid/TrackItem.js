import React, { useState } from "react";
import "./style.scss";

import Markdown from "../Markdown";
import { requirePropFactory } from "@material-ui/core";

const TrackItem = ({ item }) => {
    const { title, desc, fulldesc, logos, key } = item;
    const [open, toggleOpen] = useState(false);

    if (open) {
        return (
            <div className="TrackItem open" onClick={() => toggleOpen(!open)}>
                <div className="TrackItem--text">
                    <span className="TrackItem--title">{title}</span>
                    <p className="TrackItem--description">{fulldesc}</p>
                </div>
            </div>
        );
    }
    return (
        <div className="TrackItem" onClick={() => toggleOpen(!open)}>
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
        </div>
    );
};

export default TrackItem;
