import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { paths } from '../../routes/paths';

const Header = () => {
  return (
      <header >
        Тут хедер
        <ul>
          <li>
            <Link to={paths.main}>На главную</Link>
          </li>
          <li>
            <Link to={paths.movies}>На страницу с фильмами</Link>
          </li>
          <li>
            <Link to={paths.profile}>В профиль</Link>
          </li>
          <li>
            <Link to={paths.signIn}>На страницу Sign In</Link>
          </li>
        </ul>
      </header>
  );
};

export default Header;
