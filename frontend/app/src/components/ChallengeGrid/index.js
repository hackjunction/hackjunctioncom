import React, { useState, useEffect } from "react"
import Button from "../Button"
import "./style.scss";

import ChallengeItem from "./ChallengeItem";

function ChallengeGrid({ items }) {
    const distincttags = [...new Set(items.map((x) => x.tags).flat())];

    const [selected, setSelected] = useState('');

    const renderItems = (items) => {
        const filtered = items.filter((item) =>
            item.tags.some((a) => {return(selected == a || selected == '')}),
        );
        return filtered.map((item) => <ChallengeItem {...{ item }} />);
    };

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
                <p>Filtteri description tähän</p>
                <h3>Click to filter challenges by spesifics:</h3>
                {renderButtons()}
            </div>
            <div className="ChallengeGrid">{renderItems(items)}</div>
        </>
    );
}

export default ChallengeGrid;
