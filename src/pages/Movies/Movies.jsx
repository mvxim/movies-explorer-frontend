import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { MoviesCardList } from '../../components/MoviesCardList/MoviesCardList'
import { SearchForm } from '../../components/SearchForm/SearchForm'
import { useFetch } from '../../hooks/useFetch'
import { useFilter } from '../../hooks/useFilter'
import { useSearch } from '../../hooks/useSearch'
import { SHORT_DURATION } from '../../utils/constants'
import moviesApiInstance from '../../utils/MoviesApi'
import styles from './Movies.module.css'

const Movies = () => {

    const [ fetchMovies, isMoviesLoading, movieFetchingError ] = useFetch( async () => {
        const response = await moviesApiInstance.getAllFilms()
        setFetchedMovies( response )
    } )

    const [ fetchedMovies, setFetchedMovies ] = useState( [] ) // ← Фильмы с фетча

    const { searchQuery, memoizedSearchResults, handleControlledInputStateUpdate, handleFinalSearchQuery } = useSearch(
        fetchedMovies )

    const { filtrationResult, isFiltering, handleFilter } = useFilter( memoizedSearchResults,
        movie => movie.duration <= SHORT_DURATION )

    const handleSearchFormSubmit = () => {
        fetchMovies()
        handleFinalSearchQuery( searchQuery )
    }

    const renderSearchResults = () => {
        if ( !!filtrationResult.length ) {
            return <MoviesCardList moviesList={ filtrationResult }
                isLoading={ isMoviesLoading }
            />
        } else {
            return (
                <p className={ styles.movies__error }>
                    Ничего не найдено :(
                </p>
            )
        }
    }

    const renderMoviesSection = () => {
        if ( !!fetchedMovies.length ) {
            return renderSearchResults()
        }
    }

    return (
        <>
            <header className={ styles.movies__header }>
                <Header />
            </header>
            <main className={ styles.movies__main }>

                <SearchForm query={ searchQuery }
                    isLoading={ isMoviesLoading }
                    onSearchInput={ handleControlledInputStateUpdate }
                    onSearchFormSubmit={ handleSearchFormSubmit }
                    onFilterInput={ handleFilter }
                    isFiltering={ isFiltering }
                />

                { movieFetchingError && (
                    <p className={ styles.movies__error }>
                        Во&nbsp;время запроса произошла ошибка.
                        Возможно, проблема с&nbsp;соединением или&nbsp;сервер&nbsp;недоступен.
                        Подождите немного и&nbsp;попробуйте ещё раз.</p>
                ) }

                { renderMoviesSection() }

            </main>
            <footer className={ styles.movies__footer }>
                <Footer></Footer>
            </footer>
        </> )
}

export default Movies
