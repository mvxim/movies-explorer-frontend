import { AuthProtector } from '../components/AuthProtector/AuthProtector';


import Layout from '../components/Layout/Layout';
import { GlobalContext } from '../context/GlobalContext';
import Error from '../pages/Error/Error';
import Main from '../pages/Main/Main';
import Movies from '../pages/Movies/Movies';
import Profile from '../pages/Profile/Profile';
import SavedMovies from '../pages/SavedMovies/SavedMovies';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import { PATHS } from './paths';

export const routerConfig = ({ globalContextPayload }) => [
    {
        element: <Layout />,
        children: [
            {
                path: PATHS.MAIN,
                element: <Main />,
            },
            {
                path: PATHS.SIGN_IN,
                element: <SignIn />,
            },
            {
                path: PATHS.SIGN_UP,
                element: <SignUp />,
            },
            {
                element: (
                    <GlobalContext.Provider value={ globalContextPayload }>
                        <AuthProtector />
                    </GlobalContext.Provider>
                ),
                children: [
                    {
                        path: PATHS.MOVIES,
                        element: <Movies />,
                    },
                    {
                        path: PATHS.SAVED_MOVIES,
                        element: <SavedMovies />,
                    },
                    {
                        path: PATHS.PROFILE,
                        element: <Profile />,
                    },
                ],
            },
            {
                path: '*',
                element: <Error />,
            },
        ],
    },
];
