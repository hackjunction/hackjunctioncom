import React from "react";

import './style.scss';

import KEYS from '../../redux/staticcontent/keys';
import Markdown from '../../components/Markdown';

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        margin: "10em 2em 10em 5em",
        background: "#232323",
        border: "4px solid #FBFBFB",
        boxSizing: "border-box",
        borderRadius: "5px",
        boxShadow: "none",
    },
    title: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "25px",
        lineHeight: "30px",
        display: "flex",
        alignItems: "center",
        color: "#73F9EC"
    },
    date: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "17px",
        display: "flex",
        alignItems: "center",
        color: "#FBFBFB",        
    },
    body: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "18px",
        lineHeight: "22px",
        display: "flex",
        alignItems: "center",
        color: "#FBFBFB",        
    },
});

const EventCard = (eventData) => {
    const classes = useStyles();
    console.log("event data is", eventData, eventData.title)
    return (
        eventData?.title? <Card className={classes.root}>
            <CardContent>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                >
                    {eventData.title}
                </Typography>
                <Typography
                    className={classes.date} variant="body2" component="p">
                    {eventData.date}
                </Typography>

                <Typography
                    className={classes.body} variant="body2" component="p">
                    {eventData.desc}
                </Typography>
            </CardContent>
        </Card>: <Markdown className={'blackText'} sourceKey={KEYS.whoAreWeGlobal} />

    );
}

export default EventCard;