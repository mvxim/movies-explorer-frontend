import classNames from 'classnames';
import React from 'react';
import Header from '../../components/Header/Header';
import { useAuth } from '../../hooks/useAuth';
import styles from './Profile.module.css';

const Profile = () => {
    const { currentUser } = useAuth();
    return (
        <>
            <header className={ styles.profile__header }>
                <Header />
            </header>
            <main className={ styles.profile__main }>
                <form className={ styles.profile__form }>
                    <h2 className={ styles.profile__greeting }>Привет, %юзернейм%</h2>
                    <fieldset className={ styles.profile__fieldset }>
                        <p className={ styles.profile__inputName }>Имя</p>
                        <input className={ styles.profile__input }
                            placeholder="%юзернейм%"
                            type="text"
                        />
                    </fieldset>
                    <div className={ styles.profile__divider }></div>
                    <fieldset className={ styles.profile__fieldset }>
                        <p className={ styles.profile__inputName }>E-mail</p>
                        <input className={ styles.profile__input }
                            placeholder="fake_email@mail.com"
                            type="email"
                        />
                    </fieldset>
                
                </form>
                <div className={ styles.profile__buttonWrapper }>
                    <button className={ classNames(styles.profile__button, styles.profile__button_type_edit) }>
                        Редактировать
                    </button>
                    <button className={ classNames(styles.profile__button, styles.profile__button_type_logout) }>
                        Выйти из аккаунта
                    </button>
                </div>
            </main>
        </>
    );
};

export default Profile;
