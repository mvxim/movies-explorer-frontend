import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import useForm from '../../hooks/useForm';
import { useGlobal } from '../../hooks/useGlobal';
import { PATHS } from '../../routes/paths';
import styles from './SignUpForm.module.css';

const SignUpForm = () => {
    
    const {
        values,
        errorMessages,
        handleChange,
        isValid,
        resetForm
    } = useForm();
    
    const {
        handleRegistration,
    } = useAuth();
    
    const {
        isLoading,
    } = useGlobal();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        handleRegistration(values);
    };
    
    useEffect(() => {
        resetForm();
    }, [ resetForm ]);
    
    return (
        <>
            <form className={ styles.signUpForm__form }
                name="signin"
                onSubmit={ handleSubmit }
            >
                <fieldset className={ styles.signUpForm__fieldSet }>
                    <label className={ styles.signUpForm__inputName }>
                        Имя
                        <input className={ styles.signUpForm__input }
                            type="text"
                            name="name"
                            value={ values.name || '' }
                            onChange={ handleChange }
                            placeholder="Имя"
                            required
                        />
                        <span className={ styles.signUpForm__error }>{ errorMessages.name }</span>
                    </label>
                    <label className={ styles.signUpForm__inputName }>
                        E-mail
                        <input className={ styles.signUpForm__input }
                            type="email"
                            name="email"
                            value={ values.email || '' }
                            onChange={ handleChange }
                            placeholder="Почта"
                            required
                        />
                        <span className={ styles.signUpForm__error }>{ errorMessages.email }</span>
                    </label>
                    
                    <label className={ styles.signUpForm__inputName }>
                        Пароль
                        <input className={ styles.signUpForm__input }
                            type="password"
                            name="password"
                            value={ values.password || '' }
                            onChange={ handleChange }
                            placeholder="Крепкий пароль"
                            minLength="4"
                            maxLength="32"
                            required
                        />
                        <span className={ styles.signUpForm__error }>{ errorMessages.password }</span>
                    </label>
                </fieldset>
                <button className={ styles.signUpForm__button }
                    type="submit"
                    disabled={ !isValid || isLoading }
                >
                    Зарегистрироваться
                </button>
                <span className={ styles.signUpForm__buttonWrapper }>
                    Уже зарегистрировались?
                    <Link to={ PATHS.SIGN_IN }
                        className={ styles.signUpForm__link }
                    > Войти
                    </Link>
                </span>
            </form>
        </>
    );
};

export default SignUpForm;
