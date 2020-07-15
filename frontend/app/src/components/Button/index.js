import React from "react";
import "./style.scss";

import { Button } from "@material-ui/core";

export default ({ text, className, onClick, to }) => {
    if (to) {
        return (
            <a href={to}>
                <Button m={2} className={className} onClick={onClick} to={to}>
                    {text}
                </Button>
            </a>
        );
    }

    return (
        <Button m={2} className={className} onClick={onClick} to={to}>
            {text}
        </Button>
    );
};
