import classNames from 'classnames'
import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './AboutProject.module.css'

const AboutProject = () => {
    return (
        <section className={ styles.about } id="about">
            <SectionTitle styleProps={ styles.about__title }>
                О проекте
            </SectionTitle>
            <article className={ styles.about__details }>
                <div className={ styles.about__detail }>
                    <h3 className={ styles.about__subtitle }>Дипломный проект включал 5 этапов</h3>
                    <p className={ styles.about__description }>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>

                <div className={ styles.about__detail }>
                    <h3 className={ styles.about__subtitle }>На выполнение диплома ушло 5 недель</h3>
                    <p className={ styles.about__description }>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </article>
            <div className={ styles.about__timeline }>
                <div className={ styles.about__timeline_type_back }>
                    <p className={ styles.about__timeline_period }>1 неделя</p>
                </div>
                <div className={ styles.about__timeline_type_front }>
                    <p className={ styles.about__timeline_period }>4 неделя</p>
                </div>
            </div>
            <div className={ styles.about__timeline }>
                <div className={ styles.about__timeline_type_caption }>
                    <p className={ styles.about__timeline_caption_text }>Back-end</p>
                </div>
                <div className={ styles.about__timeline_type_caption }>
                    <p className={ styles.about__timeline_caption_text }>Front-end</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject
