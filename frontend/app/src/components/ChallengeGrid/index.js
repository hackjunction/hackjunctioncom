import React, { useState, useEffect } from "react";
import "./style.scss";

import GridItem from "./GridItem";

function ChallengeGrid({ items }) {
    const distincttags = [...new Set(items.map((x) => x.tags).flat())];

    const [selected, setSelected] = useState(distincttags);

    const renderItems = (items) => {
        const filtered = items.filter((item) =>
            item.tags.some((a) => selected.includes(a)),
        );
        return filtered.map((item) => <GridItem {...item} />);
    };

    const renderButtons = () => {
        const newselection = (key) => {
            let newarray = [];
            if (selected.includes(key)) {
                newarray = selected.filter((item) => item !== key);
            } else {
                newarray = [...selected, key];
            }
            return newarray;
        };

        return (
            distincttags &&
            distincttags.flat().map((tag) => (
                <button
                    key={tag}
                    onClick={() => setSelected(newselection(tag))}
                >
                    {tag}
                </button>
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
