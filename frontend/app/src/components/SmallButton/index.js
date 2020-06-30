import React from "react";
import "./style.scss";

import { Button } from "@material-ui/core";

export default ({ text, className }) => {
    return (
        <Button m={2} className={className}>
            {text}
        </Button>
    );
};
