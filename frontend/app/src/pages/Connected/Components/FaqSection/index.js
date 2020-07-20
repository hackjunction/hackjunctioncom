import "./style.scss"
import React, { useState, useEffect } from "react"
import FaqGrid from "../../../../components/FaqGrid"
import Button from "../../../../components/Button"
import { useTheme } from "@material-ui/core"

export default ({ items }) => {
    const [open, toggleQuestions] = useState([])
    const [selected, toggleSelected] = useState(items[0].title)

    useEffect(() => {
        let titles = []
        items.map((item) => titles.push(item.title))
        toggleQuestions(titles)
    }, [])

    const renderSections = () => {
        return (
            <div>
                {items.map((section) => (
                    <div
                        className={`FaqQuestion--section ${
                            selected === section.title ? "open" : ""
                        }`}
                    >
                        <h2>{section.title}</h2>
                        <FaqGrid items={section.questions} />
                    </div>
                ))}
            </div>
        )
    }

    const changeFilters = (title) => {
        const i = open.indexOf(title)
        console.log("index", i)
        console.log("init open", open)
        const newArray = open
        if (i > -1) {
            newArray.splice(i, 1)
        } else {
            newArray.push(title)
        }

        toggleQuestions(newArray)
    }

    return (
        <div className="FaqSection">
            {items.length > 1 && (
                <div className="FaqSection--buttons">
                    {items.map((section) => (
                        <Button
                            className={`Button-default ${
                                selected === section.title ? "selected" : ""
                            }`}
                            onClick={() => toggleSelected(section.title)}
                            text={section.title}
                        />
                    ))}
                </div>
            )}
            {renderSections()}
        </div>
    )
}
// Tracks and challenges
