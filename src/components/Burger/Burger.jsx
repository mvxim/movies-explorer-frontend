import classNames from 'classnames';
import React from 'react';
import { useDisableBodyScroll } from '../../hooks/useDisableBodyScroll';
import { NavLinks } from '../NavLinks/NavLinks';
import { ProfileButton } from '../ProfileButton/ProfileButton';
import styles from './Burger.module.css';

export const Burger = ({ isActive, onBackdropClick }) => {
    
    useDisableBodyScroll(isActive);
    
    return (
        <section className={ classNames(styles.burger,
            {
                [styles.burger_active]: isActive
            }
        ) }
        >
            <section className={ styles.burger__backdrop }
                onClick={ () => {
                    onBackdropClick(false);
                } }
            />
            <section className={ classNames(styles.burger__content,
                {
                    [styles.burger__content_active]: isActive
                }
            ) }
            >
                <NavLinks activeLink={ styles.burger__link_active }
                    defaultLink={ styles.burger__link }
                    isMobile
                />
                
                <ProfileButton isMobile/>
            
            </section>
        </section>
    );
};
