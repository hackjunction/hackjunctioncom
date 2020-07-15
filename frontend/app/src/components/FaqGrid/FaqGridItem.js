import React, { useState } from "react";
import "./style.scss";

import Markdown from "../Markdown";
import AnimateHeight from "react-animate-height";

export default ({ question, answer, key }) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={`FaqGridItem ${open ? "FaqGridItem-expanded" : ""}`}
            onClick={() => setOpen(!open)}
        >
            <span className="FaqGridItem--question">
                {question}
                <i className="icon-right-open" onClick={() => setOpen(!open)} />
            </span>
            <AnimateHeight duration={300} height={open ? "auto" : 0}>
                <div style={{ height: "30px" }} />
                <Markdown className="FaqGridItem--answer" source={answer} />
            </AnimateHeight>
        </div>
    );
};
