import classNames from 'classnames';
import React from 'react';
import styles from '../Tech/Tech.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const Tech = () => {
    return (
        <section className={styles.tech}>
            <SectionTitle styleProps={styles.tech__title}>
                Технологии
            </SectionTitle>
            <article className={styles.tech__content}>
                <h3 className={styles.tech__subtitle}>
                    7 технологий
                </h3>
                <p className={styles.tech__description}>
                    На курсе веб-разработки мы освоили технологии, которые применили в&nbsp;дипломном проекте.
                </p>
                <ul className={styles.tech__techs}>
                    <li className={styles.tech__tech}>HTML</li>
                    <li className={styles.tech__tech}>CSS</li>
                    <li className={styles.tech__tech}>JS</li>
                    <li className={styles.tech__tech}>React</li>
                    <li className={styles.tech__tech}>Git</li>
                    <li className={styles.tech__tech}>Express</li>
                    <li className={styles.tech__tech}>mongoDB</li>
                </ul>
            </article>
            
        </section>
    );
};

export default Tech;
