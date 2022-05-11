import React from 'react'
import FindIcon from '../../components-svg/FindIcon'
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox'
import styles from './SearchForm.module.css'

export const SearchForm = ( { isLoading, moviesList, onSearchInput, onSearchFormSubmit, isFiltering, onFilterInput } ) => {

    const handleSearchInputChange = ( event ) => {
        onSearchInput( event.target.value )
    }

    const handleSearchFormSubmit = ( event ) => {
        event.preventDefault()
        onSearchFormSubmit( event )
        console.log( 'Submit. Log from SearchForm' )
    }


    return (
        <section className={ styles.search }>
            <form className={ styles.search__form }
                onSubmit={ handleSearchFormSubmit }
            >
                <input className={ styles.search__input }
                    type="text"
                    placeholder="Фильм"
                    onChange={ handleSearchInputChange }
                    disabled={ isLoading }
                />
                <button className={ styles.search__button }
                    type="submit"
                    disabled={ isLoading }
                >
                    <FindIcon className={ styles.search__icon } />
                </button>
            </form>
            <FilterCheckbox isLoading={ isLoading }
                onFilterInput={ onFilterInput }
                isFiltering={ isFiltering }
            />
        </section>
    )
}
