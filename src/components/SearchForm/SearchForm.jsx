import React from 'react';
import FindIcon from '../../components-svg/FindIcon';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import styles from './SearchForm.module.css';

export const SearchForm = () => {
    return (
        <section className={ styles.search }>
            <form className={ styles.search__form }
            >
                <input className={ styles.search__input }
                    type="text"
                    placeholder="Фильм"
                />
                <button className={ styles.search__button }
                    type="submit"
                >
                    <FindIcon className={styles.search__icon}/>
                </button>
            </form>
            <FilterCheckbox/>
        </section>
    );
};
