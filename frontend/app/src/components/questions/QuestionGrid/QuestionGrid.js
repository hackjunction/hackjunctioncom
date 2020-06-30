import React from "react";

import KEYS from "../../../redux/staticcontent/keys";
import Markdown from "../../Markdown";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core/";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import QuestionCard from "../QuestionGrid";

const QuestionGrid = () => {
    return (
        <Grid container justify="center" alignItems="center" spacing={1}>
            <Grid item sm={6} md={4} lg={4} xl={3}>
                <QuestionCard />
            </Grid>
            <Grid item sm={6} md={4} lg={4} xl={3}>
                <QuestionCard />
            </Grid>
        </Grid>
    );
};

export default QuestionGrid;
