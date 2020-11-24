import { createStore, combineReducers } from 'redux';
import movies from './data/movies';

const globalState = {
    movies: localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : movies
}

function global (state = globalState, { type, index, movie }) {
    let movies = state.movies;
    switch (type) {
        case 'ADD_MOVIE':
            movies.push(movie);
            localStorage.setItem('movies', JSON.stringify(movies));
            return { ...state, movies };
        case 'DELETE_MOVIE':
            movies.splice(index, 1);
            localStorage.setItem('movies', JSON.stringify(movies));
            return { ...state, movies };
        default:
            return state;
    }

}

export default createStore(combineReducers({
    global: global
}))