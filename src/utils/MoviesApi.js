import { MOVIES_BASE_URL } from './constants';

class MoviesApi {
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
    
    getAllFilms() {
        return fetch(this._url, {
                method: 'GET',
                headers: this._headers
            }
        ).then(this._onResponse);
    }
}

const moviesApiInstance = new MoviesApi(MOVIES_BASE_URL);

export default moviesApiInstance;
