import React from 'react';
import './style.scss';

const IconTextRow = ({ icon, text }) => {
    return (
        <div className="IconTextRow">
            <div className="IconTextRow--icon">
                <img src={icon} alt={text + ' icon'} className="IconTextRow--icon__image" />
            </div>
            <span className="IconTextRow--text">{text}</span>
        </div>
    );
};

export default IconTextRow;
