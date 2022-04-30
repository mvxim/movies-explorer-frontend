import classNames from 'classnames';
import React from 'react';
import mvx from '../../images/mvx.jpg';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './Student.module.css';

export const Student = () => {
    return (<section className={ styles.student }>
        <SectionTitle styleProps={ styles.student__title }>
            Студент
        </SectionTitle>
        <div className={ styles.student__bio }>
            <article className={ styles.student__text }>
                <h3 className={ styles.student__name }>Максим</h3>
                <p className={ styles.student__status }>Фронтенд-разработчик, 30 лет</p>
                <p className={ styles.student__cv }>Родился в&nbsp;Магнитогорске, а&nbsp;живу в&nbsp;подмосковной Балашихе.
                    Работаю фронтендером в&nbsp;quickresto.ru, делаю платформу, которая позволит клиенту создать свой white-label
                    сайт.
                    До&nbsp;этого были 3&nbsp;года преформанс-маркетинга и&nbsp;веб-аналитики: помогал с&nbsp;рекламой клиентам
                    из&nbsp;северной Америки и&nbsp;Австралии. В&nbsp;процессе понял,
                    что разработка доставляет гораздо больше, и&nbsp;пошел учиться в&nbsp;Практикум. </p>
                <ul className={ styles.student__links }>
                    <li>
                        <a className={ classNames(styles.student__link, 'linkAnimation') }
                            href=""
                        >Telegram</a>
                    </li>
                    <li>
                        <a className={ classNames(styles.student__link, 'linkAnimation') }
                            href=""
                        >Github</a>
                    </li>
                    <li>
                        <a className={ classNames(styles.student__link, 'linkAnimation') }
                            href=""
                        >Instagram</a>
                    </li>
                </ul>
            </article>
            <img className={ styles.student__photo }
                src={ mvx }
                alt=""
            />
        </div>
    </section>);
};
