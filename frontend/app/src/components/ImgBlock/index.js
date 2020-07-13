import React from "react";
import "./style.scss";
import ImageBlockSection from "../ImageBlockSection";

const ImgBlock = ({ link, topic, left, image }) => {
    if (left) {
        return (
            <a href={link}>
                <div className="ImgBlock--TopContent">
                    <div className="ImgBlock--textAndArrowDiv">
                        <h1 className="topic">{topic}</h1>
                        <img
                            src={require("../../assets/icons/story_arrow.png")}
                        />
                    </div>
                    <div className="ImgBlock--ImageBlock">
                        <img src={image} width="80%" height="100%" />
                    </div>
                </div>
            </a>
        );
    } else {
        return (
            <a href={link}>
                <div className="ImgBlock--TopContent">
                    <div className="ImgBlock--ImageBlock">
                        <img src={image} width="80%" height="100%" />
                    </div>
                    <div className="ImgBlock--textAndArrowDiv">
                        <h1 className="topic">{topic}</h1>
                        <img
                            src={require("../../assets/icons/story_arrow.png")}
                        />
                    </div>
                </div>
            </a>
        );
    }
};

export default ImgBlock;
