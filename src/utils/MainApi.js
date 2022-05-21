import { MAIN_BASE_URL, URL_SLUGS } from './constants';

class MainApi {
    constructor(url) {
        this._url = url;
        this._headers = {
            'Content-Type': 'application/json',
        };
    }
    
    _onResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    }
    
    getUserInfo() {
        return fetch(`${ this._url }${ URL_SLUGS.USER_INFO }`, {
            method: 'GET',
            credentials: 'include',
            headers: this._headers
        }).then(this._onResponse);
    }
    
    updateUserInfo(userInfo) {
        return fetch(`${ this._url }/users/me`, {
            method: 'PATCH',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify(
                {
                    name: userInfo.name,
                    email: userInfo.email,
                }
            )
        }).then(this._onResponse);
    }
    
    getSavedMovies() {
        return fetch(`${ this._url }${ URL_SLUGS.SAVED_MOVIES }`, {
                method: 'GET',
                credentials: 'include',
                headers: this._headers
            }
        ).then(this._onResponse);
    }
    
    saveMovie(movie) {
        return fetch(`${ this._url }${ URL_SLUGS.SAVED_MOVIES }`, {
            method: 'POST',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                ...movie,
            }),
        }).then(this._onResponse);
    }
    
    removeSavedMovie(movieId) {
        return fetch(`${ this._url }${ URL_SLUGS.SAVED_MOVIES }/${ movieId }`, {
            method: 'DELETE',
            credentials: 'include',
            headers: this._headers,
        }).then(this._onResponse);
    }
    
}

const mainApiInstance = new MainApi(MAIN_BASE_URL);

export default mainApiInstance;
