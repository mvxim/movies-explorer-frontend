import classNames from 'classnames'
import React, { useState } from 'react'
import Logo from '../../components-svg/Logo'
import { useAuth } from '../../hooks/useAuth'
import { PATHS } from '../../routes/paths'
import { Burger } from '../Burger/Burger'
import { CustomLink } from '../CustomLink/CustomLink'
import LogoLink from '../LogoLink/LogoLink'
import Menu from '../Menu/Menu'
import { MenuButton } from '../MenuButton/MenuButton'
import styles from './Header.module.css'

const Header = () => {
    
    const { isLoggedIn } = useAuth()
    
    const [ isMenuActive, setIsMenuActive ] = useState(false)
    
    return (
        isLoggedIn
            ? (
                <section className={ classNames(styles.header) }>
                    <LogoLink className={ styles.header__logo } />
                    
                    <Menu isMobile={ false }
                        menuStatus={ isMenuActive }
                        onMenuToggle={ setIsMenuActive }
                    />
                    
                    <Burger isActive={ isMenuActive }
                        onBackdropClick={ setIsMenuActive }
                    />
                    
                    <MenuButton menuStatus={ isMenuActive }
                        onMenuToggle={ setIsMenuActive }
                    />
                </section>
            )
            : (
                <section className={ classNames(styles.header, styles.header_gray) }>
                    <CustomLink className={ classNames(styles.header__logo, 'linkAnimation') }
                        destination={ PATHS.MAIN }
                    >
                        <Logo />
                    </CustomLink>
                    <nav className={ styles.header__buttonWrapper }>
                        <button className={ classNames(styles.header__button,
                            styles.header__button_type_transparent, 'linkAnimation') }
                        >
                            <CustomLink destination={ PATHS.SIGN_UP }
                                className={ styles.header__buttonLink }
                            >
                                Регистрация
                            </CustomLink>
                        </button>
                        <button className={ classNames(styles.header__button,
                            styles.header__button_type_colored, 'linkAnimation') }
                        >
                            <CustomLink destination={ PATHS.SIGN_IN }
                                className={ styles.header__buttonLink }
                            >
                                Войти
                            </CustomLink>
                        </button>
                    </nav>
                </section>
            )
    )
}

export default Header
