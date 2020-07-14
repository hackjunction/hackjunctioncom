import React, { PureComponent } from "react";
import "./style.scss";
import { connect } from "react-redux";

import Markdown from "../Markdown";
import { content as selectContent } from "../../redux/staticcontent/selectors";

class BlockSection extends PureComponent {
    render() {
        const {
            title,
            subtitle,
            children,
            extra,
            halfpage,
            inverted,
            className,
        } = this.props;
        return (
            <div
                className={`BlockSection ${
                    halfpage ? "BlockSection--half" : ""
                } ${inverted ? "BlockSection--inverted" : ""} ${
                    className ? className : ""
                }`}
            >
                <div className="BlockSection--left">
                    <h2 className="BlockSection--left__title">{title}</h2>
                    <Markdown
                        className="BlockSection--left__subtitle"
                        source={subtitle}
                    />
                    {extra}
                </div>
                <div className="BlockSection--right">{children}</div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { titleKey, subtitleKey } = ownProps;

    const content = selectContent(state);

    return {
        title: content[titleKey] || ownProps.title,
        subtitle: content[subtitleKey] || ownProps.subtitle,
    };
};

export default connect(mapStateToProps)(BlockSection);
