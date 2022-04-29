import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../routes/paths';
import styles from './SignUpForm.module.css';

const SignUpForm = () => {
    
    return (
        <>
            <form className={ styles.signUpForm__form }
                name="signin"
            >
                <fieldset className={ styles.signUpForm__fieldSet }>
                    <label className={ styles.signUpForm__inputName }>
                        Имя
                        <input className={ styles.signUpForm__input }
                            type="text"
                            name="name"
                            required
                        />
                        <span className={ styles.signUpForm__error }>Тут будет текст ошибки</span>
                    </label>
                    <label className={ styles.signUpForm__inputName }>
                        E-mail
                        <input className={ styles.signUpForm__input }
                            type="email"
                            name="email"
                            required
                        />
                        <span className={ styles.signUpForm__error }>Тут будет текст ошибки</span>
                    </label>
                    
                    <label className={ styles.signUpForm__inputName }>
                        Пароль
                        <input className={ styles.signUpForm__input }
                            type="password"
                            name="password"
                            minLength="4"
                            maxLength="32"
                            required
                        />
                        <span className={ styles.signUpForm__error }>Тут будет текст ошибки</span>
                    </label>
                </fieldset>
                <button className={ styles.signUpForm__button }
                    type="submit"
                >
                    Войти
                </button>
                <span className={ styles.signUpForm__buttonWrapper }>Еще не зарегистрированы? <Link to={ paths.signUp }
                    className={ styles.signUpForm__link }
                >Регистрация</Link></span>
            </form>
        </>
    );
};

export default SignUpForm;
