import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { MoviesCardList } from '../../components/MoviesCardList/MoviesCardList';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import styles from './Movies.module.css';

const Movies = () => {
    return (
        <>
            <header className={ styles.movies__header }>
                <Header/>
            </header>
            <main className={ styles.movies__main }>
                <SearchForm/>
                <MoviesCardList>
                    <MovieCard/>
                    <MovieCard/>
                </MoviesCardList>
            </main>
            <footer className={ styles.movies__footer }>
                <Footer/>
            </footer>
        </>
    );
};

export default Movies;
