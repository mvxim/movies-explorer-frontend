import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <section className={ styles.footer }>
            <p className={styles.footer__title}>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className={styles.footer__wrapper}>
                <p className={styles.footer__copyright}>© 2020</p>
                <ul className={styles.footer__links}>
                    <li>
                        <a className={styles.footer__link}>Яндекс.Практикум</a>
                    </li>
                    <li>
                        <a className={styles.footer__link}>Telegram</a>
                    </li>
                    <li>
                        <a className={styles.footer__link}>Github</a>
                    </li>
                    <li>
                        <a className={styles.footer__link}>Instagram</a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Footer;
