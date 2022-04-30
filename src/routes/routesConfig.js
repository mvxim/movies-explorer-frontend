import { AuthProtector } from '../components/AuthProtector/AuthProtector'

import Layout from '../components/Layout/Layout'
import Error from '../pages/Error/Error'
import Main from '../pages/Main/Main'
import Movies from '../pages/Movies/Movies'
import Profile from '../pages/Profile/Profile'
import SavedMovies from '../pages/SavedMovies/SavedMovies'
import SignIn from '../pages/SignIn/SignIn'
import SignUp from '../pages/SignUp/SignUp'
import { paths } from './paths'

export const routerConfig = [
    {
        element: <Layout />,
        children: [
            {
                path: paths.main,
                element: <Main />,
            },
            {
                path: paths.signIn,
                element: <SignIn />,
            },
            {
                path: paths.signUp,
                element: <SignUp />,
            },
            {
                element: <AuthProtector />,
                children: [
                    {
                        path: paths.movies,
                        element: <Movies />,
                    },
                    {
                        path: paths.savedMovies,
                        element: <SavedMovies />,
                    },
                    {
                        path: paths.profile,
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
]
