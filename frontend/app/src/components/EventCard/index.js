import React, { PureComponent } from "react";
import "./style.scss";

const EventCard = ({text, date, image}) => {
        return (
            <div className="box">
                <div>
                    <div>
                        <span className="text">{text}</span>
                    </div>
                    <div>
                        <span className="text--subtitle">{date}</span>
                    </div>
                </div>
                <div className="inner-img">
                    <img src={image} />
                </div>
            </div>
        );

}

export default(EventCard)