import { MAIN_BASE_URL, URL_SLUGS } from './constants';

class AuthApi {
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
    
    register(userData) {
        return fetch(`${ this._url }${ URL_SLUGS.SIGN_UP }`, {
            method: 'POST',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify(userData)
        }).then(this._onResponse);
    };
    
    login(userData) {
        return fetch(`${ this._url }${ URL_SLUGS.SIGN_IN }`, {
            method: 'POST',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify(userData)
        }).then(this._onResponse);
    };
    
    getContent() {
        return fetch(`${ this._url }${ URL_SLUGS.USER_INFO }`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(this._onResponse);
    };
    
    logout() {
        return fetch(`${ this._url }${ URL_SLUGS.SIGN_OUT }`, {
            method: 'GET',
            credentials: 'include',
            headers: this._headers,
        }).then(this._onResponse);
    };
    
}

const authApiInstance = new AuthApi(MAIN_BASE_URL);

export default authApiInstance;
