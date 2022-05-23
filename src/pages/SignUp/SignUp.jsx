import React from 'react'
import LogoLink from '../../components/LogoLink/LogoLink'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import styles from './SignUp.module.css'

const SignUp = () => {
    return (
        <>
            <main className={ styles.signUp__main }>
                <section className={ styles.signUp__wrapper }>
                    <LogoLink className={ styles.signUp__logo } />
                    <h2 className={ styles.signUp__greeting }>Добро пожаловать!</h2>
                    <SignUpForm />
                </section>
            </main>
        </>
    )
}

export default SignUp
