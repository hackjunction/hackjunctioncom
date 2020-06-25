import React from "react";
import "./style.scss";

const InputLabel = ({
    text,
    show,
    hasMarginBottom,
    hasMarginLeft,
    large,
    forName,
}) => {
    let className = "InputLabel";

    if (show) className += " InputLabel-show";
    if (hasMarginBottom) className += " InputLabel-has-mb";
    if (large) className += " InputLabel-large";
    if (hasMarginLeft) className += " InputLabel-has-ml";

    return (
        <label htmlFor={forName} className={className}>
            {text ? text : ""}
        </label>
    );
};

export default InputLabel;
