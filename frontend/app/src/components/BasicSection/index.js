import React from 'react';
import './style.scss';
import Markdown from '../Markdown';

const BasicSection = ({ title, subtitle, children } = this.props) => {
    return (
        <div className="BasicSection">
            <div className="BasicSection--left">
                <h3 className="BasicSection--left__title">{title}</h3>
                <Markdown
                    className="BasicSection--left__subtitle"
                    source={subtitle}
                />
            </div>
            <div className="BasicSection--right">{children}</div>
        </div>
    );
};
export default BasicSection;
