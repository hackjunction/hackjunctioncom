import "./style.scss";
import React from "react";

export default ({ children, date, last = false }) => {
    return (
        <>
            <li className="Checkpoint">
                <div className="Point" />
                <div className="Date">{date}</div>
                <div className="DateInfo">{children}</div>
            </li>
            {!last ? (
                <>
                    <li className="Fillerpoint" />
                    <li className="Fillerpoint" />
                    <li className="Fillerpoint" />
                </>
            ) : null}
        </>
    );
};
