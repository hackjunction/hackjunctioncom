import "./style.scss";
import React from "react";

export default ({ children, date, last = false }) => {
    return (
        <>
            <li className="Checkpoint">
                <span className="Date">{date}</span> {children}
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
