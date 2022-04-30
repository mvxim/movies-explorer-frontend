import React from 'react'
import AboutProject from '../../components/AboutProject/AboutProject'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { Portfolio } from '../../components/Portfolio/Portfolio'
import Promo from '../../components/Promo/Promo'
import { Student } from '../../components/Student/Student'
import Tech from '../../components/Tech/Tech'
import styles from './Main.module.css'

const Main = () => {
    return (
        <>
            <header className={styles.main__hero}>
                <Header />
            </header>

            <main className={styles.main__content}>
                <Promo />
                <AboutProject />
                <Tech />
                <Student />
                <Portfolio />
            </main>

            <footer className={styles.main__footer}>
                <Footer />
            </footer>
        </>
    )
}

export default Main
