import React from "react";
import "./style.scss";

import { Link } from "react-router-dom";

const LinkButton = ({ text, to, onClick, isExternal, accent = false }) => {
    if (isExternal) {
        return (
            <a
                className={`LinkButton ${accent ? "LinkButton--accent" : ""}`}
                href={to}
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="LinkButton--text">{text}</span>
            </a>
        );
    }

    return (
        <Link
            className={`LinkButton ${accent ? "LinkButton--accent" : ""}`}
            to={to}
            onClick={onClick}
        >
            <span
                className={`"LinkButton--text" ${
                    accent ? "LinkButton--accent--text" : ""
                }`}
            >
                {text}
            </span>
        </Link>
    );
};

export default LinkButton;
