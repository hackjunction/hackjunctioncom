import "./style.scss";
import React from "react";

export default ({ children, date, last = false }) => {
    return (
        <>
            <li className="Checkpoint">
                <div className="Date">{date}</div>
                {children}
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
