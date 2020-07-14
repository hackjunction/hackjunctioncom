import React from "react";
import "./style.scss";

const DividerLine = ({ stop = false }) => {
    let classes = "DividerLine";
    if (stop) {
        classes += " DividerLine-stop";
    }
    return <div className={classes} />;
};

export default DividerLine;
