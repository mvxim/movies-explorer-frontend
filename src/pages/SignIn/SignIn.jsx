import React from 'react';
import Logo from '../../components-svg/Logo';
import SignInForm from '../../components/SignInForm/SignInForm';
import styles from './SignIn.module.css';

const SignIn = () => {
    return (
        <>
            <main className={ styles.signIn__main }>
                <Logo className={ styles.signIn__logo }/>
                <h2 className={ styles.signIn__greeting }>Рады видеть!</h2>
                <SignInForm/>
            </main>
        </>
    );
};

export default SignIn;
