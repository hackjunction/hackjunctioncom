import React, { PureComponent } from "react";
import "./style.scss";

class CenteredBlock extends PureComponent {
    render() {
        const { children } = this.props;
        return <div className="CenteredBlock">{children}</div>;
    }
}

export default CenteredBlock;
