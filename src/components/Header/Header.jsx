import classNames from 'classnames';
import React, { useState } from 'react';
import { useMatch } from 'react-router-dom';
import Logo from '../../components-svg/Logo';
import { paths } from '../../routes/paths';
import { Burger } from '../Burger/Burger';
import { CustomLink } from '../CustomLink/CustomLink';
import Menu from '../Menu/Menu';
import { MenuButton } from '../MenuButton/MenuButton';
import styles from './Header.module.css';

const Header = () => {
    
    const myPath = useMatch('*');
    const [ isMenuActive, setIsMenuActive ] = useState(false);
    
    return (
        myPath.pathname === '/'
            ? (
                <section className={ classNames(styles.header, styles.header_gray) }>
                    <CustomLink className={ classNames(styles.header__logo, 'linkAnimation') }
                        destination={ paths.main }
                    >
                        <Logo/>
                    </CustomLink>
                    <nav className={ styles.header__buttonWrapper }>
                        <button className={ classNames(styles.header__button,
                            styles.header__button_type_transparent, 'linkAnimation') }
                        >
                            <CustomLink destination={ paths.signUp }
                                className={ styles.header__buttonLink }
                            >
                                Регистрация
                            </CustomLink>
                        </button>
                        <button className={ classNames(styles.header__button,
                            styles.header__button_type_colored, 'linkAnimation') }
                        >
                            <CustomLink destination={ paths.signIn }
                                className={ styles.header__buttonLink }
                            >
                                Войти
                            </CustomLink>
                        </button>
                    </nav>
                </section>
            )
            : (
                <section className={ classNames(styles.header) }>
                    <CustomLink className={ classNames(styles.header__logo, 'linkAnimation') }
                        destination={ paths.main }
                    >
                        <Logo/>
                    </CustomLink>
                    
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
    );
};

export default Header;
