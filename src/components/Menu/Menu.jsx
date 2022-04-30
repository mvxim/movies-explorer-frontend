import React from 'react';
import { NavLinks } from '../NavLinks/NavLinks';
import { ProfileButton } from '../ProfileButton/ProfileButton';
import styles from './Menu.module.css';

const Menu = () => (
    <section className={ styles.menu }>
        <NavLinks />
        
        <ProfileButton />
    </section>
);

export default Menu;
