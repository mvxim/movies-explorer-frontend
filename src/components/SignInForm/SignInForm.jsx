import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import useForm from '../../hooks/useForm';
import { useGlobal } from '../../hooks/useGlobal';
import { PATHS } from '../../routes/paths';
import styles from './SignInForm.module.css';

const SignInForm = () => {
    
    const {
        values,
        errorMessages,
        handleChange,
        isValid,
        resetForm
    } = useForm();
    
    const {
        handleAuth,
        
    } = useAuth();
    
    const { isLoading } = useGlobal();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        handleAuth(values);
    };
    
    useEffect(() => {
        resetForm();
    }, [ resetForm ]);
    
    return (
        <>
            <form className={ styles.signInForm__form }
                name="signin"
                onSubmit={ handleSubmit }
            >
                <fieldset className={ styles.signInForm__fieldSet }>
                    <label className={ styles.signInForm__inputName }>
                        E-mail
                        <input className={ styles.signInForm__input }
                            type="email"
                            name="email"
                            value={ values.email || '' }
                            onChange={ handleChange }
                            placeholder="Почта"
                            required
                        />
                        <span className={ styles.signInForm__error }>{ errorMessages.email }</span>
                    </label>
                    
                    <label className={ styles.signInForm__inputName }>
                        Пароль
                        <input className={ styles.signInForm__input }
                            type="password"
                            name="password"
                            value={ values.password || '' }
                            onChange={ handleChange }
                            placeholder="Крепкий пароль"
                            minLength="4"
                            maxLength="32"
                            required
                        />
                        <span className={ styles.signInForm__error }>{ errorMessages.password }</span>
                    </label>
                </fieldset>
                <button className={ styles.signInForm__button }
                    type="submit"
                    disabled={ !isValid || isLoading }
                >
                    Войти
                </button>
                <span className={ styles.signInForm__buttonWrapper }>
                    Еще не зарегистрированы?
                    <Link to={ PATHS.SIGN_UP }
                        className={ styles.signInForm__link }
                    > Регистрация
                    </Link>
                </span>
            </form>
        </>);
};

export default SignInForm;
