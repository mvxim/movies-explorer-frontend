import React from 'react';
import { Navigate,Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { paths } from '../../routes/paths';

export const AuthProtector = () => {
  const auth = useAuth(); // ← просто подключаюсь к контексту, в котором isLoggedIn: boolean
  if (!auth) {
    return <Navigate to={ paths.signIn } replace/>;
  }
  return <Outlet />;
};
