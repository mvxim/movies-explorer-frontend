import { LOCAL_STORAGE_KEYS } from './constants';

const getItemFromStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

const setItemToStorage = (key, item) => {
    localStorage.setItem(key, JSON.stringify(item));
};

const updateStorageInBulk = (allMovies, filteredMovies, query, filterFlagState) => {
    setItemToStorage(LOCAL_STORAGE_KEYS.ALL_MOVIES, allMovies);
    setItemToStorage(LOCAL_STORAGE_KEYS.FILTERED_MOVIES, filteredMovies);
    setItemToStorage(LOCAL_STORAGE_KEYS.QUERY, query || '');
    setItemToStorage(LOCAL_STORAGE_KEYS.FILTER_FLAG_STATE, filterFlagState);
};

const parseStorage = () => {
    const data = {};
    data.movies = getItemFromStorage(LOCAL_STORAGE_KEYS.ALL_MOVIES) || [];
    data.filteredMovies = getItemFromStorage(LOCAL_STORAGE_KEYS.FILTERED_MOVIES) || [];
    data.savedQuery = getItemFromStorage(LOCAL_STORAGE_KEYS.QUERY) || '';
    data.savedFilter = getItemFromStorage(LOCAL_STORAGE_KEYS.FILTER_FLAG_STATE) || false;
    return data;
};

const cleanStorage = () => {
    localStorage.clear();
};

export { getItemFromStorage, setItemToStorage, updateStorageInBulk, parseStorage, cleanStorage };
