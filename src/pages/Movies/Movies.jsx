import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { MoviesCardList } from '../../components/MoviesCardList/MoviesCardList';
import Preloader from '../../components/Preloader/Preloader';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { useGlobal } from '../../hooks/useGlobal';
import { LOCAL_STORAGE_KEYS } from '../../utils/constants';
import filterMovies from '../../utils/filterMovies';
import { getItemFromStorage, parseStorage, setItemToStorage, updateStorageInBulk } from '../../utils/useStorage';
import styles from './Movies.module.css';


const Movies = () => {
    
    const [ fetchedMovies, setFetchedMovies ] = useState([]);
    const [ filteredMovies, setFilteredMovies ] = useState([]);
    const [ savedSearchQuery, setSavedSearchQuery ] = useState('');
    const [ savedFilter, setSavedFilter ] = useState(null);
    
    const {
        fetchAllMovies,
        isLoading,
        globalError
    } = useGlobal();
    
    let allMovies = getItemFromStorage(LOCAL_STORAGE_KEYS.ALL_MOVIES);
    
    useEffect(() => {
        const {
            movies,
            filteredMovies,
            savedQuery,
            savedFilter
        } = parseStorage();
        setFetchedMovies(movies || []);
        setFilteredMovies(filteredMovies || []);
        setSavedSearchQuery(savedQuery || '');
        setSavedFilter(!!savedFilter);
    }, []);
    
    const handleSearchFormSubmit = async (query, isFiltering) => {
        if (!allMovies) {
            allMovies = await fetchAllMovies();
            if (allMovies) {
                setItemToStorage(LOCAL_STORAGE_KEYS.ALL_MOVIES, allMovies);
            }
        }
        
        if (allMovies) {
            allMovies = getItemFromStorage(LOCAL_STORAGE_KEYS.ALL_MOVIES);
            setFetchedMovies(allMovies);
            const filtrationResult = filterMovies(allMovies, query || '', isFiltering);
            updateStorageInBulk(allMovies, filtrationResult, query, isFiltering);
            setFilteredMovies(filtrationResult);
        }
    };
    
    
    const renderSearchResults = () => {
        if (!!filteredMovies.length) {
            return (
                <MoviesCardList moviesList={ filteredMovies }
                    totalMoviesList={ fetchedMovies }
                />
            );
        } else {
            return (
                <p className={ styles.movies__error }>
                    Ничего не найдено :(
                </p>
            );
        }
    };
    
    const renderMoviesSection = () => {
        if (!!fetchedMovies.length) {
            return renderSearchResults();
        }
    };
    
    
    return (
        <>
            <header className={ styles.movies__header }>
                <Header />
            </header>
            <main className={ styles.movies__main }>
                <SearchForm
                    savedQuery={ savedSearchQuery }
                    savedFilter={ savedFilter }
                    isLoading={ isLoading }
                    onSearchFormSubmit={ handleSearchFormSubmit }
                />
                { globalError && !allMovies && (
                    <p className={ styles.movies__error }>
                        { globalError }
                    </p>)
                }
                { isLoading ? <Preloader /> : renderMoviesSection() }
            </main>
            <footer className={ styles.movies__footer }>
                <Footer></Footer>
            </footer>
        </>);
};

export default Movies;
