import React, { useEffect, useState } from 'react';
import SearchIcon from '../../components-svg/FindIcon';
import useForm from '../../hooks/useForm';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import styles from './SearchForm.module.css';

export const SearchForm = ({
    savedQuery,
    savedFilter,
    isLoading,
    isDisabled,
    onSearchFormSubmit,
    isOnSavedMoviesPage
}) => {
    
    const {
        values,
        setValues,
        isValid,
        handleChange,
    } = useForm();
    
    const [ isFiltering, setIsFiltering ] = useState(false);
    
    const handleSearchInputChange = (event) => {
        handleChange(event);
    };
    
    const handleSearchFormSubmit = (event) => {
        event.preventDefault();
        onSearchFormSubmit(values.search, isFiltering);
    };
    
    useEffect(() => {
        if (savedQuery) {
            setValues({
                ...values,
                'search': savedQuery
            });
        }
        
        if (savedFilter) {
            setIsFiltering(savedFilter);
        }
    }, [ savedQuery, savedFilter, setValues ]);
    
    return (
        <section className={ styles.search }>
            <form className={ styles.search__form }
                onSubmit={ handleSearchFormSubmit }
            >
                <input className={ styles.search__input }
                    name="search"
                    type="text"
                    value={ values.search || '' }
                    placeholder={ isDisabled && 'Нет сохраненных фильмов 😔' ||
                        'Начните писать название фильма 🎥' }
                    onChange={ handleSearchInputChange }
                    disabled={ isLoading || isDisabled }
                    required={ !isOnSavedMoviesPage }
                />
                <button className={ styles.search__button }
                    type="submit"
                    disabled={ isLoading || isDisabled || !isValid }
                >
                    <SearchIcon className={ styles.search__icon } />
                </button>
            </form>
            <FilterCheckbox isDisabled={ isLoading || isDisabled }
                onFilterInput={ setIsFiltering }
                isFiltering={ isFiltering }
            />
        </section>
    );
};
