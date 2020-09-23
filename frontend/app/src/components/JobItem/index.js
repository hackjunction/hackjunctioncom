import React, { useState } from "react";
import "./style.scss";

import Markdown from "../Markdown";
import AnimateHeight from "react-animate-height";

export default (props) => {
    console.log(props);
    const { title, location, desc, image, endDate, link } = props.job;
    console.log(`${title} == ${props.title}: ${title==props.title}`)
    const [open, setOpen] = useState(false);

    return (
        <div
            className={`JobItem ${open ? "JobItem-expanded" : ""}`}
            onClick={() => setOpen(!open)}
        >
            <span className="JobItem--title">
                {title}
                {location}
                <i className="icon-right-open" onClick={() => setOpen(!open)} />
            </span>
            <AnimateHeight duration={300} height={open ? "auto" : 0}>
                <div style={{ height: "30px" }} />
                <Markdown className="JobItem--desc" source={desc} />
                <a href={link}>Learn More &gt;</a>
            </AnimateHeight>
        </div>
    );
};
