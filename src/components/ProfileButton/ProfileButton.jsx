import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import ProfileIcon from '../../components-svg/ProfileIcon';
import { paths } from '../../routes/paths';
import styles from './ProfileButton.module.css';

export const ProfileButton = ({ isMobile }) => {
    return (
        <button className={ classNames(
            styles.profileButton,
            {
                [styles.profileButton_type_desktop]: !isMobile
            },
            'linkAnimation') }
        >
            <Link className={ styles.profileLink }
                to={ paths.profile }
            >
                Аккаунт
            </Link>
            <span className={ styles.profileIcon }>
                <ProfileIcon/>
            </span>
        </button>
    );
};
