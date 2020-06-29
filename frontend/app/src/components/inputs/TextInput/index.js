import React from "react";
import "./style.scss";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "../InputLabel";
import InputError from "../InputError";

const useStyles = makeStyles({
    inputBox: {
        width: "181px",
        height: "40px",
        background: "transparent",
        border: "3px solid #73F9EC",
        borderRadius: "22px",
        fontSize: "18px",
        transition: "all 0.2s ease",
        color: "#4CAF50",
    },
});

const TextInput = ({
    label,
    placeholder,
    name,
    value,
    error,
    onChange,
    connected,
}) => {
    const classes = useStyles();
    function handleChange(e) {
        onChange(e.target.value);
    }

    return (
        <div className="TextInput">
            <InputLabel
                text={label}
                show={value && value.length > 0}
                forName={name}
                hasMarginLeft
            />
            <input
                name={name}
                type="text"
                className="TextInput--inputbox"
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
            />
            <InputError text={error} />
        </div>
    );
};

export default TextInput;
