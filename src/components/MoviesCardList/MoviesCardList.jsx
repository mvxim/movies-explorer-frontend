import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { useCountMoviesInARow } from '../../hooks/useCountMoviesInARow';
import { useGlobal } from '../../hooks/useGlobal';
import { DEFAULT_MOVIE_DATA, IMAGE_SRC_URL } from '../../utils/constants';
import { MovieCard } from '../MovieCard/MovieCard';
import styles from './MoviesCardList.module.css';

export const MoviesCardList = ({
    isOnSavedMoviesPage,
    moviesList,
    totalMoviesList
}) => {
    
    const {
        saveMovie,
        removeSavedMovie
    } = useGlobal();
    
    const cardList = useRef(null);
    
    const [ capacityOfOneRow, setCapacityOfOneRow ] = useState(0);
    
    
    const handleMovieSave = (movie) => {
        const movieData = {
            country: movie.country || DEFAULT_MOVIE_DATA.UNKNOWN_TEXT_FIELD,
            director: movie.director || DEFAULT_MOVIE_DATA.UNKNOWN_TEXT_FIELD,
            duration: movie.duration,
            year: movie.year || DEFAULT_MOVIE_DATA.UNKNOWN_TEXT_FIELD,
            description: movie.description || DEFAULT_MOVIE_DATA.UNKNOWN_TEXT_FIELD,
            image: IMAGE_SRC_URL + movie.image.url || DEFAULT_MOVIE_DATA.UNKNOWN_IMAGE_URL,
            trailerLink: movie.trailerLink || DEFAULT_MOVIE_DATA.UNKNOWN_TRAILER_URL,
            nameRU: movie.nameRU || DEFAULT_MOVIE_DATA.UNKNOWN_TEXT_FIELD,
            nameEN: movie.nameEN || DEFAULT_MOVIE_DATA.UNKNOWN_TEXT_FIELD,
            thumbnail: IMAGE_SRC_URL + movie.image.url || DEFAULT_MOVIE_DATA.UNKNOWN_IMAGE_URL,
            movieId: movie.id,
        };
        saveMovie(movieData);
    };
    
    const handleSavedMovieRemove = async (movie) => {
        await removeSavedMovie(movie, isOnSavedMoviesPage);
        
    };
    
    useCountMoviesInARow(cardList, setCapacityOfOneRow);
    
    const shouldRenderMoreButton = () => {
        if (moviesList.length < totalMoviesList.length && moviesList.length > 3) {
            return (
                <div className={ styles.cardList__more }>
                    <button className={ classNames(styles.cardList__moreButton, 'linkAnimation') }>Ещё</button>
                </div>
            );
        }
    };
    
    return (
        <>
            <ul className={ styles.cardList }
                ref={ cardList }
            >
                {
                    moviesList && moviesList.map((movie) => (
                        <MovieCard key={ movie.id || movie._id }
                            onSaveAction={ handleMovieSave }
                            onRemoveAction={ handleSavedMovieRemove }
                            movie={ movie }
                            isOnSavedMoviesPage={ isOnSavedMoviesPage }
                        />
                    ))
                }
            </ul>
            
            { !isOnSavedMoviesPage && shouldRenderMoreButton() }
        </>);
};
