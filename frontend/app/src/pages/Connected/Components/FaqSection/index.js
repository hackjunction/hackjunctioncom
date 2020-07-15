import "./style.scss";
import React, { useState } from "react";
import FaqGrid from "../../../../components/FaqGrid";
import Button from "../../../../components/Button";

export default ({ items }) => {
    const [open, toggleQuestion] = useState(items[0].title);
    console.log(items);
    console.log(open);
    return (
        <div className="FaqSection">
            {items.length > 1 && (
                <div className="FaqSection--buttons">
                    {items.map((section) => (
                        <Button
                            className={`Button-default ${
                                open === section.title ? "selected" : ""
                            }`}
                            onClick={() => toggleQuestion(section.title)}
                            text={section.title}
                        />
                    ))}
                </div>
            )}
            {items.map((section) => (
                <div
                    className={`FaqQuestion--section ${
                        open === section.title ? "open" : ""
                    }`}
                >
                    <h2>{section.title}</h2>
                    <FaqGrid items={section.questions} />
                </div>
            ))}
        </div>
    );
};
