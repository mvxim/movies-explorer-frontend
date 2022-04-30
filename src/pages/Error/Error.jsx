import classNames from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Error.module.css';

const Error = () => {
    const navigate = useNavigate();
    
    return (
        <main className={ styles.error__main }>
            <h1 className={ styles.error__title }>404</h1>
            <p className={ styles.error__description }>Страница не найдена</p>
            <button className={ classNames(styles.error__backButton, 'linkAnimation') }
                onClick={ () => {
                    navigate(-1);
                } }
            >
                Назад
            </button>
        </main>
    );
};

export default Error;
