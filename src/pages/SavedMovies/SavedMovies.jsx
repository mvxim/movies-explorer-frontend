import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { MoviesCardList } from '../../components/MoviesCardList/MoviesCardList';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import styles from './SavedMovies.module.css';

const SavedMovies = () => {
    return (
        <>
            <header className={ styles.savedMovies__header }>
                <Header />
            </header>
            <main className={ styles.savedMovies__main }>
                <SearchForm />
                <MoviesCardList isSaved>
                    <MovieCard isSaved />
                    <MovieCard isSaved />
                    <MovieCard isSaved />
                </MoviesCardList>
            </main>
            <footer className={ styles.savedMovies__footer }>
                <Footer />
            </footer>
        </>
    );
};

export default SavedMovies;
