import React from "react";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
}));

export default ({ text, type, description, link }) => {
    const classes = useStyles();

    return (
        <>
            <Button m={2} className={classes.smaller}>
                {text}
            </Button>
        </>
    );
};
