import "./style.scss";
import React from "react";

export default ({ name, title, mail, img }) => {
    return (
        <div className="Box">
            <div>
                <img
                    src={require("../../assets/images/junction-heads-petrus.png")}
                />
                <h4>{name}</h4>
                <p>{title}</p>
                <p>{mail}</p>
            </div>
        </div>
    );
};
