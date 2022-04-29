import React from 'react';
import Logo from '../../components-svg/Logo';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import styles from './SignUp.module.css';

const SignUp = () => {
    return (
        <>
            <main className={ styles.signUp__main }>
                <Logo className={ styles.signUp__logo }/>
                <h2 className={ styles.signUp__greeting }>Добро пожаловать!</h2>
                <SignUpForm/>
            </main>
        </>
    );
};

export default SignUp;
