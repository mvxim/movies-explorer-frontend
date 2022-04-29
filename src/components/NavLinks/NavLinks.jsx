import classNames from 'classnames';
import React from 'react';
import { paths } from '../../routes/paths';
import { CustomLink } from '../CustomLink/CustomLink';
import styles from './NavLinks.module.css';

export const NavLinks = ({ activeLink, defaultLink, isMobile }) => {
    
    
    const linkDefault = defaultLink || styles.navLinks__link;
    const linkActive = activeLink || styles.navLinks__link_active;
    
    return (
        <nav className={ classNames({
            [styles.navLinks]: !isMobile,
        }) }
        >
            <ul className={ classNames(styles.navLinks__list,
                {
                    [styles.navLinks__list_type_header]: !isMobile,
                    [styles.navLinks__list_type_burger]: isMobile,
                }
            ) }
            >
                { isMobile && (<li>
                    <CustomLink destination={ paths.main }
                        className={ classNames(linkDefault, 'linkAnimation') }
                        classNameActive={ linkActive }
                    >
                        Главная
                    </CustomLink>
                </li>) }
                <li>
                    <CustomLink destination={ paths.movies }
                        className={ classNames(linkDefault, 'linkAnimation') }
                        classNameActive={ linkActive }
                    >
                        Фильмы
                    </CustomLink>
                </li>
                <li>
                    <CustomLink destination={ paths.savedMovies }
                        className={ classNames(linkDefault, 'linkAnimation') }
                        classNameActive={ linkActive }
                    >
                        Сохраненные фильмы
                    </CustomLink>
                </li>
            </ul>
        </nav>
    );
};
