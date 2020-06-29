import React from "react";

import { Button, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const useStyles = makeStyles((theme) => ({
    regular: {
        width: "185px",
        height: "54px",
        boxShawow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        // align-self: center;
        // display: flex;
        // flex-direction: column;
        // align-items: center;
        // justify-content: center;
        border: "3px solid #73f9ec",
        boxSizing: "border-box",
        borderRadius: "33px",
        textTransform: "uppercase",
        fontSize: "18px",
        fontWeight: "600",
        // transition: all 0.2s ease;
        // text-transform: uppercase;
    },
    smaller: {
        width: "263px",
        height: "35px",
        boxShadow: "2px 4px 4px rgba(35, 35, 35, 0.15)",
        border: "3px solid #000000",
        boxSizing: "border-box",
        borderRadius: "33px",
        fontSize: "18px",
        fontWeight: "600",
        textTransform: "none",
        lineHeight: "22px",
        margin: "2px",
    },
    submit: { width: "131px", height: "40px" },
}));

export default ({ text, regular, smaller, submit }) => {
    const classes = useStyles();

    return (
        <>
            <Button
                className={`${regular ? classes.regular : ""} ${
                    smaller ? classes.smaller : ""
                } 
                `}
            >
                {text} {regular ? <ArrowRightAltIcon fontSize="large" /> : ""}
            </Button>
        </>
    );
};
