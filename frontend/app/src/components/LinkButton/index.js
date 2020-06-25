import React from 'react';
import './style.scss';

import { Link } from 'react-router-dom';

const LinkButton = ({ text, to, onClick, isExternal, accent = false }) => {
    if (isExternal) {
        return (
            <div>
                <a
                    className={`LinkButton ${accent ? 'LinkButton--accent' : ''}`}
                    href={to}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="LinkButton--text">{text}</span>
                </a>
            </div>
        );
    }

    return (
        <div className="LinkButton--wrapper">
            <Link className={`LinkButton ${accent ? 'LinkButton--accent' : ''}`} to={to} onClick={onClick}>
                <span className="LinkButton--text">{text}</span>
            </Link>
        </div>
    );
};

export default LinkButton;
