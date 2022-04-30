import classNames from 'classnames';
import React from 'react';
import { useMatch } from 'react-router';
import { Link } from 'react-router-dom';

export const CustomLink = ({ destination, children, className, classNameActive }) => {
    
    const path = useMatch('*');
    
    const checkIsPathActive = (currentPath) => path.pathname === currentPath;
    
    return (
        <Link className={ classNames(
            className,
            classNameActive && { [classNameActive]: checkIsPathActive(destination) }
        ) }
            to={ destination }
        >
            { children }
        </Link>
    );
};
