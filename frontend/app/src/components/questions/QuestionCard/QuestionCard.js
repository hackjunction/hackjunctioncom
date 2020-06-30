import React from "react";

import "./style.scss";

import KEYS from "../../../redux/staticcontent/keys";
import Markdown from "../../Markdown";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: "279px",
        height: "232px",
        border: "5px solid #f44e2c",
        boxSizing: "border-box",
        borderRadius: 15,
        background: "transparent",
    },
    typography: {
        color: "#0B2C5D",
        h2: {
            color: "#EF7D50",
        },
    },
});

const QuestionCard = (number) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Box className="QuestionCard--root--boxLeft">
                    <h2 className="QuestionCard--root--text--number">1</h2>
                </Box>
                <Box className="QuestionCard--root--boxRight">
                    <h2 className="QuestionCard--root--text--question">test</h2>
                </Box>
            </CardContent>
        </Card>
    );
};

export default QuestionCard;
