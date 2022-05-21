import classNames from 'classnames';
import React from 'react';
import Delete from '../../components-svg/Delete';
import Save from '../../components-svg/Save';
import { useGlobal } from '../../hooks/useGlobal';
import { IMAGE_SRC_URL } from '../../utils/constants';
import getFormattedDuration from '../../utils/formatDuration';
import styles from '../MovieCard/MovieCard.module.css';

export const MovieCard = ({
    isOnSavedMoviesPage,
    movie,
    onSaveAction,
    onRemoveAction
}) => {
    
    const { savedMovies } = useGlobal();
    const isSaved = savedMovies.some(savedMovie => savedMovie.movieId === movie.id);
    
    const handleSave = () => {
        onSaveAction(movie);
    };
    
    const handleRemove = () => {
        onRemoveAction(movie);
    };
    
    const handleLikeClick = () => {
        
        if (isSaved) {
            handleRemove();
        } else {
            handleSave();
        }
    };
    
    const formatDuration = (duration) => {
        return getFormattedDuration(duration);
    };
    
    const assembleImageUrl = () => {
        return isOnSavedMoviesPage ? movie.image : `${ IMAGE_SRC_URL + movie.image.url }`;
    };
    
    return (
        <li className={ styles.card__card }>
            <img className={ styles.card__image }
                src={ assembleImageUrl() }
                alt="Альт-текст для картинки"
            />
            <div className={ styles.card__details }>
                <p className={ styles.card__title }>{ movie.nameRU }</p>
                
                {
                    isOnSavedMoviesPage
                        ? (
                            <button className={ styles.card__button }
                                onClick={ handleRemove }
                            >
                                <Delete className={ classNames(
                                    styles.card__buttonIcon,
                                    styles.card__buttonIcon_type_delete) }
                                />
                            </button>
                        )
                        : (
                            <button className={ styles.card__button }
                                onClick={ handleLikeClick }
                            >
                                <Save className={ classNames(
                                    styles.card__buttonIcon, {
                                        [styles.card__buttonIcon_liked]: isSaved
                                    }, styles.card__buttonIcon_type_save) }
                                />
                            </button>
                        )
                }
            
            </div>
            <p className={ styles.card__duration }>{ formatDuration(movie.duration) }</p>
        </li>
    );
};
