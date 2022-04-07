import { AuthProtector } from '../components/AuthProtector/AuthProtector';
import Content from '../components/Content/Content';

import Layout from '../components/Layout/Layout';
import ErrorPage from '../pages/ErrorPage';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Main from '../pages/Main';
import Movies from '../pages/Movies';
import Profile from '../pages/Profile';
import SavedMovies from '../pages/SavedMovies';
import { paths } from './paths';

export const routerConfig = [
  {
    element: <Layout />,
    children: [
      {
        element: <Content />,
        children: [
          {
            path: paths.main,
            element: <Main/>
          },
          {
            element: <AuthProtector/>,
            children: [
              {
                path: paths.movies,
                element: <Movies />
              },
              {
                path: paths.savedMovies,
                element: <SavedMovies />
              },
              {
                path: paths.profile,
                element: <Profile />
              },
            ]
          },
        ]
      },
      {
        path: paths.signIn,
        element: <SignIn/>
      },
      {
        path: paths.signUp,
        element: <SignUp/>
      },
      {
        path: '*',
        element: <ErrorPage />
      },
    ]
  }
];
