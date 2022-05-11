import classNames from 'classnames'
import React, { useState } from 'react'
import Delete from '../../components-svg/Delete'
import Save from '../../components-svg/Save'
import { IMAGE_SRC_URL } from '../../utils/constants'
import styles from '../MovieCard/MovieCard.module.css'

export const MovieCard = ( { movie, isSaved, onClickAction } ) => {

    const [ isLiked, setIsLiked ] = useState( false )

    console.log( movie )

    return (
        <li className={ styles.card__card }>
            <img className={ styles.card__image }
                src={ `${ IMAGE_SRC_URL + movie.image.url }` }
                alt="Альт-текст для картинки"
            />
            <div className={ styles.card__details }>
                <p className={ styles.card__title }>{ movie.nameRU }</p>

                {
                    isSaved
                        ? (
                            <button className={ styles.card__button }
                                onClick={ onClickAction }
                            >
                                <Delete className={ classNames(
                                    styles.card__buttonIcon,
                                    styles.card__buttonIcon_type_delete ) }
                                />
                            </button>
                        )
                        : (
                            <button className={ styles.card__button }
                                onClick={ () => {
                                    setIsLiked( !isLiked )
                                } }
                            >
                                <Save className={ classNames(
                                    styles.card__buttonIcon, {
                                    [ styles.card__buttonIcon_liked ]: isLiked
                                }, styles.card__buttonIcon_type_save ) }
                                />
                            </button>
                        )
                }

            </div>
            <p className={ styles.card__duration }>Длительность фильма</p>
        </li>
    )
}
