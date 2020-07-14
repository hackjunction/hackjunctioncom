import React from "react";
import "./style.scss";
import InputLabel from "../InputLabel";
import InputError from "../InputError";

const TextInput = ({ label, placeholder, name, value, error, onChange }) => {
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
