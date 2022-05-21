import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { PATHS } from '../../routes/paths';

export const AuthProtector = () => {
    const auth = useAuth();
    if (!auth.isLoggedIn) {
        return <Navigate to={ PATHS.MAIN }
            replace
        />;
    } else {
        return (
            <Outlet />
        );
    }
    
};
