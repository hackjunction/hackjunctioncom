import React, { useState, useEffect } from "react";
import "./style.scss";

import TrackItem from "./TrackItem";

const TrackGrid = ({ items }) => {
    const renderItems = (items) => {
        return items.map((item) => <TrackItem item={item} />);
    };

    return <div className="TrackGrid">{renderItems(items)}</div>;
};

export default TrackGrid;
