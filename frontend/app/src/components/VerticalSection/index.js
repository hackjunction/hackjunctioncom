import React from 'react';
import styles from './style.module.scss';

const VerticalSection = ({ children }) => {
    return <div className={styles.verticalSection}>{children}</div>;
};

export default VerticalSection;
