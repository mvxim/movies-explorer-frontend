import classNames from 'classnames';
import React from 'react';
import styles from './FilterCheckbox.module.css';

export const FilterCheckbox = ({
    isDisabled,
    onFilterInput,
    isFiltering
}) => {
    
    const handleFilter = (event) => {
        onFilterInput(event.target.checked);
    };
    return (
        
        <label className={ classNames(styles.checkbox,
            { [styles.checkbox_disabled]: isDisabled }
        ) }
            htmlFor="saved"
        >
            <input className={ classNames(
                styles.checkbox__input,
                { [styles.checkbox__input_active]: isFiltering }
            ) }
                type="checkbox"
                id="saved"
                value={ isFiltering }
                onInput={ handleFilter }
                disabled={ isDisabled }
            />
            <span className={ styles.checkbox__switch }></span>
            <p className={ styles.checkbox__text }>
                Короткометражки
            </p>
        </label>);
};
