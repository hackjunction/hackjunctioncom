import React from "react";
import "./style.scss";

const InputButton = ({ key, slug }) => {
    return (
        <>
            <label for={key}>test</label>
            <input
                className="InputButton"
                type="text"
                id={key}
                name={slug}
            ></input>
        </>
    );
};

export default InputButton;
