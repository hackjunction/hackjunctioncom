import React from "react";
import "./style.scss";

const Divider = ({ sm = false, md = false, lg = false }) => {
    let classes = "Divider";
    if (sm) {
        classes += " Divider-sm";
    } else if (md) {
        classes += " Divider-md";
    } else if (lg) {
        classes += " Divider-lg";
    }
    return <div className={classes} />;
};

export default Divider;
