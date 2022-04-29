import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = () => {
    
    return (
        <div className={ styles.page }>
            <Outlet />
        </div>
    );
};

export default Layout;
