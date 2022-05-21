import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { useCountMoviesInARow } from '../../hooks/useCountMoviesInARow';
import { useGlobal } from '../../hooks/useGlobal';
import { DEFAULT_MOVIE_DATA, IMAGE_SRC_URL, MOVIES_IN_A_ROW_BY_DEFAULT, ROWS_TO_DISPLAY_BY_DEFAULT } from '../../utils/constants';
import { MovieCard } from '../MovieCard/MovieCard';
import styles from './MoviesCardList.module.css';

export const MoviesCardList = ({
    isOnSavedMoviesPage,
    moviesList,
}) => {
    
    const {
        saveMovie,
        removeSavedMovie
    } = useGlobal();
    
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
    
    // ——————————————————————————————————————————————————DISPLAYED MOVIES LIST ———————————————————————————————————————————————————
    const cardList = useRef();
    const card = useRef();
    
    const [ capacityOfOneRow, setCapacityOfOneRow ] = useState(0);
    const [ initialMoviesToDisplay, setInitialMoviesToDisplay ] = useState(0);
    const [ displayedMoviesList, setDisplayedMoviesList ] = useState(moviesList);
    const [ moviesToLoad, setMoviesToLoad ] = useState(capacityOfOneRow);
    
    useCountMoviesInARow(cardList, card, setCapacityOfOneRow);
    
    const displayMoreMovies = () => {
        setMoviesToLoad(prevState => prevState + capacityOfOneRow);
    };
    
    useEffect(() => {
        if (capacityOfOneRow >= MOVIES_IN_A_ROW_BY_DEFAULT.DESKTOP) {
            setInitialMoviesToDisplay(capacityOfOneRow * ROWS_TO_DISPLAY_BY_DEFAULT.DESKTOP);
        } else if (capacityOfOneRow < MOVIES_IN_A_ROW_BY_DEFAULT.DESKTOP
            && capacityOfOneRow >= MOVIES_IN_A_ROW_BY_DEFAULT.TABLET) {
            setInitialMoviesToDisplay(capacityOfOneRow * ROWS_TO_DISPLAY_BY_DEFAULT.TABLET);
        } else if (capacityOfOneRow < MOVIES_IN_A_ROW_BY_DEFAULT.TABLET
            && capacityOfOneRow > 0) {
            setInitialMoviesToDisplay(capacityOfOneRow * ROWS_TO_DISPLAY_BY_DEFAULT.MOBILE);
        }
    }, [ capacityOfOneRow ]);
    
    useEffect(() => {
        if (capacityOfOneRow < MOVIES_IN_A_ROW_BY_DEFAULT.TABLET
            && capacityOfOneRow >= 1) {
            setDisplayedMoviesList(moviesList.slice(0, initialMoviesToDisplay + moviesToLoad * 2));
        } else {
            setDisplayedMoviesList(moviesList.slice(0, initialMoviesToDisplay + moviesToLoad));
        }
    }, [ moviesList, moviesToLoad, initialMoviesToDisplay ]);
    
    
    const shouldRenderMoreButton = () => {
        if (displayedMoviesList.length < moviesList.length && displayedMoviesList.length > 3) {
            return (
                <div className={ styles.cardList__more }>
                    <button className={ classNames(styles.cardList__moreButton, 'linkAnimation') }
                        onClick={ displayMoreMovies }
                    >Ещё
                    </button>
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
                    displayedMoviesList && displayedMoviesList.map((movie) => (
                        <MovieCard key={ movie.id || movie._id }
                            ref={ card }
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
