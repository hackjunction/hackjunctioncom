import "./style.scss";
import React from "react";

export default ({ children, date, last = false }) => {
    return (
        <>
            <div className="Checkpoint">
                <div className="Point" />
                <div className="Content">
                    <div className="Date">{date}</div>
                    <div className="DateInfo">{children}</div>
                </div>
            </div>
            {!last ? (
                <>
                    <div className="Fillerpoint">
                        <div className="Point" />
                    </div>

                    <div className="Fillerpoint">
                        <div className="Point" />
                    </div>

                    <div className="Fillerpoint">
                        <div className="Point" />
                    </div>
                </>
            ) : null}
        </>
    );
};
