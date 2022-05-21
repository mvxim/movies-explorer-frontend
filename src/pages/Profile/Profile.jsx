import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { useAuth } from '../../hooks/useAuth';
import useForm from '../../hooks/useForm';
import { EMOJIS } from '../../utils/constants';
import styles from './Profile.module.css';

const Profile = () => {
    const {
        currentUser,
        handleUpdateUserInfo,
        handleLogout
    } = useAuth();
    const {
        values,
        setValues,
        handleChange,
        isValid,
        resetForm
    } = useForm();
    
    const [ emoji, setEmoji ] = useState();
    
    const randomizeEmoji = (emojis) => {
        const index = Math.floor(Math.random() * emojis.length);
        return emojis[index];
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        handleUpdateUserInfo(values);
    };
    useEffect(() => {
        setEmoji(randomizeEmoji(EMOJIS));
    }, []);
    
    useEffect(() => {
        resetForm();
        setValues({
            ...values,
            name: currentUser.name,
            email: currentUser.email
        });
    }, [ resetForm, currentUser ]);
    
    return (
        <>
            <header className={ styles.profile__header }>
                <Header />
            </header>
            <main className={ styles.profile__main }>
                <form className={ styles.profile__form }
                    name={ 'userinfo' }
                    onSubmit={ handleSubmit }
                >
                    <h2 className={ styles.profile__greeting }>Привет, { currentUser.name } { emoji }</h2>
                    <fieldset className={ styles.profile__fieldset }>
                        <p className={ styles.profile__inputName }>Имя</p>
                        <input className={ styles.profile__input }
                            value={ values.name || '' }
                            onChange={ handleChange }
                            placeholder="%юзернейм%"
                            type="text"
                            name="name"
                        />
                    </fieldset>
                    <div className={ styles.profile__divider }></div>
                    <fieldset className={ styles.profile__fieldset }>
                        <p className={ styles.profile__inputName }>E-mail</p>
                        <input className={ styles.profile__input }
                            value={ values.email || '' }
                            onChange={ handleChange }
                            placeholder="fake_email@mail.com"
                            type="email"
                            name="email"
                        />
                    </fieldset>
                    <div className={ styles.profile__buttonWrapper }>
                        <button className={ classNames(styles.profile__button, styles.profile__button_type_edit) }
                            type={ 'submit' }
                            disabled={ !isValid }
                        >
                            Редактировать
                        </button>
                        <button className={ classNames(styles.profile__button, styles.profile__button_type_logout) }
                            type={ 'button' }
                            onClick={ handleLogout }
                        >
                            Выйти из аккаунта
                        </button>
                    </div>
                </form>
            
            </main>
        </>
    );
};

export default Profile;
