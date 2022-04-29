import React from 'react';
import LinkArrow from '../../components-svg/LinkArrow';
import styles from './Portfolio.module.css';

export const Portfolio = () => {
    return (
        <section className={ styles.portfolio }>
            <h3 className={ styles.portfolio__title }>Портфолио</h3>
            <ul className={ styles.portfolio__list }>
                <li className={ styles.portfolio__linkWrapper }>
                    <a className={ styles.portfolio__link }
                        href="https://mvxim.github.io/how-to-learn/"
                        target="_blank"
                    >
                        Статичный сайт
                    </a>
                    <LinkArrow className={ styles.portfolio__arrow }/>
                </li>
                <li className={ styles.portfolio__linkWrapper }>
                    <a className={ styles.portfolio__link }
                        href="https://mvxim.github.io/russian-travel/"
                        target="_blank"
                    >
                        Адаптивный сайт
                    </a>
                    <LinkArrow className={ styles.portfolio__arrow }/>
                </li>
                <li className={ styles.portfolio__linkWrapper }>
                    <a className={ styles.portfolio__link }
                        href="https://mvxim.github.io/react-mesto-auth/#/"
                        target="_blank"
                    >
                        Одностраничное приложение
                    </a>
                    <LinkArrow className={ styles.portfolio__arrow }/>
                </li>
            </ul>
        </section>
    );
};
