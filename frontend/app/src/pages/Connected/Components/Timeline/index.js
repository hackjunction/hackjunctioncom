import "./style.scss";
import React from "react";

export default ({ children, date, last = false }) => {
    return (
        <>
            <div className="Checkpoint">
                <div className="Point" />
                <div className="Content">
                    <div className="Date">{date}</div>
                    <div>{children}</div>
                </div>
            </div>
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
