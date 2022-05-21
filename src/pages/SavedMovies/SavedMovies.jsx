import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { MoviesCardList } from '../../components/MoviesCardList/MoviesCardList';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { useGlobal } from '../../hooks/useGlobal';
import filterMovies from '../../utils/filterMovies';
import anotherStyles from '../Movies/Movies.module.css';
import styles from './SavedMovies.module.css';

const SavedMovies = () => {
    
    const {
        savedMovies,
    } = useGlobal();
    
    const [ isFiltering, setIsFiltering ] = useState(false);
    const [ filteredSavedMovies, setFilteredSavedMovies ] = useState(savedMovies);
    
    const handleSearchFormSubmit = (query, isFiltering) => {
        const filteredSavedMoviesToRender = filterMovies(savedMovies, query || '', isFiltering);
        setFilteredSavedMovies(filteredSavedMoviesToRender);
    };
    
    useEffect(() => {
        setFilteredSavedMovies(savedMovies);
    }, [ savedMovies ]);
    
    
    const renderSearchResults = () => {
        if (!!filteredSavedMovies.length) {
            return (<MoviesCardList moviesList={ filteredSavedMovies }
                isOnSavedMoviesPage
            />);
        } else {
            return (<p className={ anotherStyles.movies__error }>
                    Ничего не найдено :(
                </p>);
        }
    };
    
    const renderMoviesSection = () => {
        if (!!savedMovies.length) {
            return renderSearchResults();
        }
    };
    
    return (<>
        <header className={ styles.savedMovies__header }>
            <Header />
        </header>
        <main className={ styles.savedMovies__main }>
            
            <SearchForm isDisabled={ !savedMovies.length }
                isOnSavedMoviesPage
                onSearchFormSubmit={ handleSearchFormSubmit }
                onFilterInput={ setIsFiltering }
                isFiltering={ isFiltering }
            />
            
            { renderMoviesSection() }
        
        </main>
        <footer className={ styles.savedMovies__footer }>
            <Footer></Footer>
        </footer>
    </>);
};

export default SavedMovies;
