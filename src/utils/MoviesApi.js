import { MOVIES_BASE_URL } from './constants'

class MainApi {
    constructor ( url ) {
        this._url = url
        this._headers = {
            'Content-Type': 'application/json',
        }
    }

    _onResponse( res ) {
        if ( res.ok ) {
            return res.json()
        }
        return Promise.reject( res.status )
    }

    getAllFilms() {
        return fetch( this._url, {
            method: 'GET',
            headers: this._headers
        }
        ).then( this._onResponse )
    }
}
const moviesApiInstance = new MainApi( MOVIES_BASE_URL )

export default moviesApiInstance
