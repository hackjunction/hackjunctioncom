import React from "react";
import "./style.scss";

const DividerLine = ({ stop = false, position = "start" }) => {
    let classes = "DividerLine";
    if (stop) {
        classes += ` DividerLine-stop--${position}`;
    }
    return <div className={classes} />;
};

export default DividerLine;
