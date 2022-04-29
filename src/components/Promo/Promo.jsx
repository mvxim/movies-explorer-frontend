import classNames from 'classnames';
import React from 'react';
import HeroLogo from '../../components-svg/HeroLogo';
import styles from './Promo.module.css';

const Promo = () => {
    return (
        <section className={ styles.promo }>
            <div className={ styles.promo__info }>
                <div className={ styles.promo__text }>
                    <h1 className={ styles.promo__title }>
                        Учебный проект студента факультета
                        <br/>
                        Веб-разработки.
                    </h1>
                    <p className={ styles.promo__details }>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                </div>
                <button className={ styles.promo__button }>Узнать больше</button>
            </div>
            
            <div >
                <HeroLogo className={ styles.promo__logo }/>
            </div>
        </section>
    );
};

export default Promo;
