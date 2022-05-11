import classNames from 'classnames'
import React from 'react'
import { MovieCard } from '../MovieCard/MovieCard'
import Preloader from '../Preloader/Preloader'
import styles from './MoviesCardList.module.css'

export const MoviesCardList = ( { isSaved, isLoading, moviesList } ) => {

    return (
        isLoading
            ? <Preloader />
            : (
                <>
                    <ul className={ styles.cardList }>
                        {
                            moviesList && moviesList.map( ( movie ) => (
                                <MovieCard key={ movie.id }
                                    movie={ movie }
                                />
                            ) )
                        }
                    </ul>

                    { !isSaved && moviesList.length > 3 && (
                        <div className={ styles.cardList__more }>
                            <button className={ classNames( styles.cardList__moreButton, 'linkAnimation' ) }>Ещё</button>
                        </div>
                    ) }
                </>
            )

    )
}
