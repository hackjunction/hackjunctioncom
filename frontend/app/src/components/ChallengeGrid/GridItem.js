import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./style.scss";

import Markdown from "../Markdown";

class GridItem extends PureComponent {
    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        logo: PropTypes.string,
        tags: PropTypes.array,
    };

    render() {
        const { title, desc, logo, tags } = this.props;

        return (
            <div className="GridItem" onClick="avaa setit">
                <span className="GridItem--title">{title}</span>
                <Markdown className="GridItem--description" source={desc} />
                <img src={logo} />
            </div>
        );
    }
}

export default GridItem;
