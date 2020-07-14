import React from "react";
import "./style.scss";

const SubmitButton = ({ text, onClick }) => {
    return (
        <div className="SubmitButton">
            <button type="submit" className="SubmitButton--button">
                <span className="SubmitButton--button__text">{text}</span>
            </button>
        </div>
    );
};

export default SubmitButton;
