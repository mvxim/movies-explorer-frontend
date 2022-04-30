import classNames from 'classnames';
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <section className={ styles.footer }>
            <p className={ styles.footer__title }>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className={ styles.footer__wrapper }>
                <p className={ styles.footer__copyright }>© 2020</p>
                <ul className={ styles.footer__links }>
                    <li>
                        <a className={ classNames(styles.footer__link, 'linkAnimation') }>Яндекс.Практикум</a>
                    </li>
                    <li>
                        <a className={ classNames(styles.footer__link, 'linkAnimation') }>Telegram</a>
                    </li>
                    <li>
                        <a className={ classNames(styles.footer__link, 'linkAnimation') }>Github</a>
                    </li>
                    <li>
                        <a className={ classNames(styles.footer__link, 'linkAnimation') }>Instagram</a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Footer;
