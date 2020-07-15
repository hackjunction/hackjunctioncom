import React from "react";
import "./style.scss";

import { Button } from "@material-ui/core";

export default ({ text, className, onClick }) => {
    return (
        <Button m={2} className={className} onClick={onClick}>
            {text}
        </Button>
    );
};
