import React from "react";
import "./style.scss";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const SubmitButton = ({ text, onClick }) => {
    return (
        <div className="SubmitButton">
            <button type="submit" className="SubmitButton--button">
                <span className="SubmitButton--button__text">
                    {text}{" "}
                    <ArrowRightAltIcon className="SubmitButton--button-icon" />
                </span>
            </button>
        </div>
    );
};

export default SubmitButton;
