import { SHORT_DURATION } from './constants';

export default function filterMovies(movies, query, isShort) {
    return isShort
        ? movies.filter(movie => movie.nameRU.toLowerCase().includes(query.toLowerCase()) &&
            movie.duration < SHORT_DURATION)
        : movies.filter(movie => movie.nameRU.toLowerCase().includes(query.toLowerCase()));
}
