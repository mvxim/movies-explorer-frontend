import React from 'react';
import styles from './FilterCheckbox.module.css';

export const FilterCheckbox = () => {
    return (
        
        <label className={ styles.checkbox }
            htmlFor="saved"
        >
            <input className={ styles.checkbox__input }
                type="checkbox"
                id="saved"
            />
            <span className={ styles.checkbox__switch }></span>
            <p className={ styles.checkbox__text }>
                Короткометражки
            </p>
        </label>
    );
};
