import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';
import styles from './MoviesCardList.module.css';

export const MoviesCardList = ({ children }) => {
    
    const [ isLoading, setIsloading ] = useState(true);
    
    useEffect(() => {
        setTimeout(() => {
            setIsloading(false);
        }, 5000);
    }, []);
    
    return (
        isLoading ? (
                <Preloader/>
            )
            : (
                <>
                    <ul className={ styles.cardList }>
                        { children }
                    </ul>
                    <div className={ styles.cardList__more }>
                        <button className={ classNames(styles.cardList__moreButton, 'linkAnimation') }>Ещё</button>
                    </div>
                </>
            )
    
    );
};
