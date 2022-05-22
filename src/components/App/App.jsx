import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import UseGlobalError from '../../hooks/useGlobalError';
import UseToast from '../../hooks/useToast';
import { PATHS } from '../../routes/paths';
import { routerConfig } from '../../routes/routesConfig';
import authApiInstance from '../../utils/AuthApi';
import { LOCAL_STORAGE_KEYS, TOOLTIP_MESSAGE } from '../../utils/constants';
import mainApiInstance from '../../utils/MainApi';
import moviesApiInstance from '../../utils/MoviesApi';
import { cleanStorage, getItemFromStorage, setItemToStorage } from '../../utils/useStorage';
import { Tooltip } from '../Tooltip/Tooltip';
import styles from './App.module.css';


function App() {
    //————————————————————————————————————————————————————STATE———————————————————————————————————————————————————————————————————
    const [ isLoggedIn, setIsLoggedIn ] = useState(getItemFromStorage(LOCAL_STORAGE_KEYS.AUTH));
    const [ currentUser, setCurrentUser ] = useState({});
    const [ savedMovies, setSavedMovies ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const {
        globalError,
        setGlobalError,
        handleError
    } = UseGlobalError();
    const {
        toasts,
        generateNotification,
        generateError
    } = UseToast();
    const location = useLocation();
    const navigate = useNavigate();
    
    //————————————————————————————————————————————————————CRUD————————————————————————————————————————————————————————————————————
    const fetchAllMovies = async () => {
        try {
            setIsLoading(true);
            const allMovies = await moviesApiInstance.getAllFilms();
            if (allMovies) return allMovies;
        } catch (error) {
            setIsLoading(false);
            handleError(error);
        } finally {
            setIsLoading(false);
        }
    };
    
    const fetchSavedMovies = async () => {
        try {
            setIsLoading(true);
            const justFetchedSavedMovies = await mainApiInstance.getSavedMovies();
            if (justFetchedSavedMovies) setSavedMovies(justFetchedSavedMovies);
        } catch (error) {
            setIsLoading(false);
            handleError(error);
        } finally {
            setIsLoading(false);
        }
    };
    
    const saveMovie = async (movie) => {
        try {
            const justSavedMovie = await mainApiInstance.saveMovie(movie);
            if (justSavedMovie) {
                generateNotification(TOOLTIP_MESSAGE.MOVIE_SAVE_SUCCESS,
                    `«${ movie.nameRU }» теперь можно найти на странице «Сохраненные фильмы»`);
                setSavedMovies(prevState => [ ...prevState, justSavedMovie ]);
            }
        } catch (error) {
            handleError(error);
        }
    };
    
    const removeSavedMovie = async (movie, isOnSavedPage) => {
        const correctId = isOnSavedPage ? movie.movieId : movie.id;
        const movieToRemove = savedMovies.find(savedMovie => savedMovie.movieId === correctId);
        try {
            const removeConfirmation = await mainApiInstance.removeSavedMovie(movieToRemove._id);
            if (removeConfirmation) {
                generateNotification(TOOLTIP_MESSAGE.MOVIE_REMOVE_SUCCESS,
                    `«${ movie.nameRU }» → 🗑️`);
                const filteredMovies = savedMovies.filter(savedMovie => correctId !== savedMovie.movieId);
                setSavedMovies(filteredMovies);
            }
        } catch (error) {
            console.log(error);
            handleError(error);
        }
        
    };
    
    const fetchUserInfo = async (values) => {
        try {
            setIsLoading(true);
            const userInfo = await mainApiInstance.getUserInfo(values);
            if (userInfo) return userInfo;
        } catch (error) {
            setIsLoading(false);
            handleError(error);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleUpdateUserInfo = async (values) => {
        try {
            setIsLoading(true);
            const updatedInfo = await mainApiInstance.updateUserInfo(values);
            if (updatedInfo) {
                generateNotification(TOOLTIP_MESSAGE.USER_INFO_UPDATE_SUCCESS,
                    `Новое имя: ${ updatedInfo.name },\n новая почта: ${ updatedInfo.email }`
                );
                setCurrentUser(updatedInfo);
            }
        } catch (error) {
            setIsLoading(false);
            handleError(error);
        } finally {
            setIsLoading(false);
        }
    };
    
    useEffect(() => {
        if (isLoggedIn) {
            async function fetch() {
                const justSavedMovies = await fetchSavedMovies();
                if (justSavedMovies.length) {
                    setSavedMovies(justSavedMovies);
                }
            }
            
            fetch();
        }
        
    }, []);
    
    //————————————————————————————————————————————————————AUTH————————————————————————————————————————————————————————————————————
    const handleRegistration = async (values) => {
        try {
            setIsLoading(true);
            const registerStatus = await authApiInstance.register(values);
            console.log(values);
            if (registerStatus) {
                generateNotification(TOOLTIP_MESSAGE.SIGN_UP_SUCCESS, `Добро пожаловать, ${ values.name } 👋`);
                const {
                    email,
                    password
                } = values;
                const authStatus = await authApiInstance.login({
                    email,
                    password
                });
                if (authStatus) {
                    setGlobalError('');
                    setIsLoggedIn(true);
                    navigate(PATHS.MOVIES);
                }
            }
        } catch (error) {
            setIsLoggedIn(false);
            setIsLoading(false);
            handleError(error);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleAuth = async (values) => {
        try {
            setIsLoading(true);
            const authStatus = await authApiInstance.login(values);
            if (authStatus) {
                setGlobalError('');
                setIsLoggedIn(true);
                generateNotification(TOOLTIP_MESSAGE.SIGN_IN_SUCCESS, '');
                navigate(PATHS.MOVIES);
            }
        } catch (error) {
            setIsLoading(false);
            handleError(error);
            setIsLoggedIn(false);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleLogout = async () => {
        try {
            const isLoggedOut = await authApiInstance.logout();
            if (isLoggedOut) {
                setIsLoggedIn(false);
                cleanStorage();
                generateNotification(TOOLTIP_MESSAGE.SIGN_OUT_SUCCESS, '');
                navigate(PATHS.MAIN);
            }
        } catch (error) {
            handleError(error);
        }
    };
    
    const checkLocation = () => {
        if (isLoggedIn) {
            if (location.pathname === PATHS.SIGN_IN
                || location.pathname === PATHS.SIGN_UP
                || location.pathname === PATHS.MAIN) {
                navigate(PATHS.MOVIES);
            }
        }
    };
    
    const checkAuth = useCallback(async () => {
        try {
            const response = await authApiInstance.getContent();
            if (response) {
                setCurrentUser(response);
                setIsLoggedIn(true);
                checkLocation();
                setItemToStorage(LOCAL_STORAGE_KEYS.CURRENT_USER, response);
                setItemToStorage(LOCAL_STORAGE_KEYS.AUTH, isLoggedIn);
            }
        } catch (error) {
            handleError(error);
            setCurrentUser({});
            setIsLoggedIn(false);
            setItemToStorage(LOCAL_STORAGE_KEYS.CURRENT_USER, {});
            setItemToStorage(LOCAL_STORAGE_KEYS.AUTH, isLoggedIn);
        }
    }, [ isLoggedIn ]);
    
    
    useEffect(() => {
        checkLocation();
    }, [ location.pathname ]);
    
    useEffect(() => {
        checkAuth();
    }, [ isLoggedIn ]);
    
    
    // ——————————————————————————————————————————————————TOASTS & ERRORS——————————————————————————————————————————————————————————
    useEffect(() => {
        if (globalError) {
            generateError(globalError);
        }
    }, [ globalError ]);
    
    // ——————————————————————————————————————————————————CONTEXT——————————————————————————————————————————————————————————————————
    
    const globalContextPayload = {
        globalError,
        isLoading,
        savedMovies,
        setSavedMovies,
        fetchAllMovies,
        fetchSavedMovies,
        saveMovie,
        removeSavedMovie,
    };
    
    const authContextPayload = {
        isLoggedIn,
        handleAuth,
        handleRegistration,
        currentUser,
        fetchUserInfo,
        handleUpdateUserInfo,
        handleLogout
    };
    
    const routing = useRoutes(routerConfig({
        globalContextPayload,
    }));
    
    // ————————————————————————————————————————————————————JSX————————————————————————————————————————————————————————————————————
    return (<AuthContext.Provider value={ authContextPayload }>
        <div className={ styles.page }>
            { routing }
            <Tooltip toastList={ toasts }
                autoDelete
                autoDeleteTime={ 5000 }
            />
        </div>
    
    </AuthContext.Provider>);
}

export default App;
