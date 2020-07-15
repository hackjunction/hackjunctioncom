import React from "react";
import "./style.scss";

import FaqGridItem from "./FaqGridItem";

export default ({ items }) => {
    const renderItems = (items) => {
        return items.map((item) => <FaqGridItem {...item} />);
    };

    return <div className="FaqGrid">{renderItems(items)}</div>;
};
