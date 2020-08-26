import React, { useState, useEffect } from "react"
import Button from "../Button"
import "./style.scss";

import ChallengeItem from "./ChallengeItem";

function ChallengeGrid({ items }) {
    const distincttags = [...new Set(items.map((x) => x.tags).flat())].sort();

    const [selected, setSelected] = useState('');

    const renderButtons = () => {
        const newselection = (key) => {
            if (selected == key) {
                setSelected('');
            } else {
                setSelected(key);
            }
            return selected;
        };

        return (
            distincttags &&
            distincttags.flat().map((tag) => (
                <Button
                    className={`Button-default ${ 
                        selected == tag ? "selected" : ""
                    }`}
                    text={tag}
                    onClick={() => newselection(tag)}

                />
            ))
        );
    };

    return (
        <>
            <div className="FilterButtons">
                <h3>Click to filter challenges by specifics:</h3>
                {renderButtons()}
            </div>
            <div className="ChallengeGrid">{
                items.map(item => {
                    return item.tags.some((a) => {return(selected == a || selected == '')}) ? <ChallengeItem {...{ item }} /> : null
                })
            }</div>
        </>
    );
}

export default ChallengeGrid;
