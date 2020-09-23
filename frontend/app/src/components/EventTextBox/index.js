import React from "react"

import "./style.scss"

import KEYS from "../../redux/staticcontent/keys"
import Markdown from "../Markdown"

import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
    root: {
        margin: "10em 2em 10em 5em",
        background: "#FFFF00",
        border: "4px solid #000000",
        boxSizing: "border-box",
        borderRadius: "5px",
        boxShadow: "none",
    },
    name: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "25px",
        lineHeight: "30px",
        display: "flex",
        alignItems: "center",
        color: "#73F9EC",
    },
    date: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "17px",
        display: "flex",
        alignItems: "center",
        color: "#F5D2A2",
    },
    body: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "18px",
        lineHeight: "22px",
        display: "flex",
        alignItems: "center",
        color: "#F5D2A2",
    },
})

const EventTextBox = (eventData) => {
    const classes = useStyles()
    console.log("event data is", eventData, eventData.name)
    return eventData?.name ? (
        <Card className={classes.root}>
            <CardContent>
                <Typography
                    className={classes.name}
                    color="textSecondary"
                    gutterBottom
                >
                    {eventData.name}
                </Typography>
                <Typography
                    className={classes.date}
                    variant="body2"
                    component="p"
                >
                    {eventData.begins}
                </Typography>

                <Typography
                    className={classes.body}
                    variant="body2"
                    component="p"
                >
                    {eventData.shortDescription ||
                        eventData.eventconcept?.shortdescription}
                </Typography>
            </CardContent>
        </Card>
    ) : (
            <Markdown className={"blackText"} sourceKey={KEYS.whoAreWeGlobal} />
        )
}

export default EventTextBox
