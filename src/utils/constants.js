export const MAIN_BASE_URL = 'http://localhost:3000',
    MOVIES_BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies',
    IMAGE_SRC_URL = 'https://api.nomoreparties.co',
    URL_SLUGS = {
        USER_INFO: '/users/me',
        SAVED_MOVIES: '/movies',
        SIGN_IN: '/signin',
        SIGN_UP: '/signup',
        SIGN_OUT: '/signout'
    },
    SHORT_DURATION = 40,
    SCREEN_SIZES = {
        DESKTOP_LARGE: 1280,
        DESKTOP: 1024,
        TABLET: 768,
        MOBILE: 375,
    },
    MOVIES_IN_A_ROW_BY_DEFAULT = {
        DESKTOP: 3,
        TABLET: 2,
        MOBILE: 1
    },
    ROWS_TO_DISPLAY_BY_DEFAULT = {
        DESKTOP: 4,
        TABLET: 4,
        MOBILE: 5
    },
    LOCAL_STORAGE_KEYS = {
        ALL_MOVIES: 'allMovies',
        FILTERED_MOVIES: 'filteredMovies',
        SAVED_MOVIES: 'savedMovies',
        QUERY: 'query',
        FILTER_FLAG_STATE: 'filterFlagState',
        CURRENT_USER: 'user',
        AUTH: 'auth'
    },
    TOOLTIP_MESSAGE = {
        SIGN_UP_SUCCESS: 'Регистрация успешна!',
        SIGN_IN_SUCCESS: 'Рады видеть снова! 👋',
        SIGN_OUT_SUCCESS: 'Увидимся 🥲',
        USER_INFO_UPDATE_SUCCESS: 'Данные пользователя обновлены',
        MOVIE_SAVE_SUCCESS: 'Фильм сохранен',
        MOVIE_REMOVE_SUCCESS: 'Фильм удален',
    },
    ERRORS = {
        '400': 'Некорректные данные 🧐',
        '401': 'Вы не авторизованы 🧐',
        '403': 'Пытаетесь удалить чужой фильм, ай-яй-яй 😠',
        '404': 'Фильма, с которым вы взаимодействуете, нет на сервере 😔',
        '409': 'Кто-то уже зарегистрировался на эту почту 🤨',
        '500': 'На сервере произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
    },
    DEFAULT_MOVIE_DATA = {
        UNKNOWN_IMAGE_URL: 'https://memepedia.ru/wp-content/uploads/2018/07/cover-3-1.jpg',
        UNKNOWN_TEXT_FIELD: 'Неизвестно',
        UNKNOWN_TRAILER_URL: 'https://youtube.com',
    },
    EMOJIS = [ '🔥', '💎', '💫', '✨', '❤️', '🖤', '⚡' ];
