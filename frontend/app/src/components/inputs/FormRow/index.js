import React from "react";
import "./style.scss";

const FormRow = ({ children }) => {
    function renderChildren() {
        if (!Array.isArray(children)) {
            return children;
        }
        return React.Children.map(children, (child, index) => {
            if (index !== children.length - 1) {
                return [child, <div className="FormRow--spacer" />];
            }
            return child;
        });
    }

    return <div className="FormRow">{renderChildren()}</div>;
};

export default FormRow;
