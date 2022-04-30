import classNames from 'classnames';
import React from 'react';
import styles from './MenuButton.module.css';

export const MenuButton = ({menuStatus, onMenuToggle}) => {
    return (
        <button className={ classNames(
            styles.menuButton,
            {
                [styles.menuButton_active]: menuStatus
            }
        ) }
            onClick={() => {
                onMenuToggle(!menuStatus)
            }}
            type="button"
        >
            <span/>
        </button>
    );
};
