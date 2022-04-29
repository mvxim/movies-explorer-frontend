import classNames from 'classnames';
import React from 'react';
import styles from './SectionTitle.module.css'

const SectionTitle = ({styleProps, children}) => {
    return (
        <h2 className={classNames( styles.title, styleProps )}>
            { children }
        </h2>
    );
};

export default SectionTitle;
