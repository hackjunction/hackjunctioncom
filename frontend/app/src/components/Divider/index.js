import React from "react";
import "./style.scss";

const Divider = ({ sm = false, md = false, lg = false, line = false }) => {
    let classes = "Divider";
    if (sm) {
        classes += " Divider-sm";
    } else if (md) {
        classes += " Divider-md";
    } else if (lg) {
        classes += " Divider-lg";
    } else if (line) {
        classes += " Divider-line";
    }

    return <div className={classes} />;
};

export default Divider;
