import { createStore, combineReducers } from 'redux';
import movies from './data/movies';

const globalState = {
    movies: movies
}

function global (state = globalState, { type, index, movie }) {
    let movies = state.movies;
    switch (type) {
        case 'ADD_MOVIE':
            movies.push(movie);
            return { ...state, movies };
        case 'DELETE_MOVIE':
            movies.splice(index, 1);
            return { ...state, movies };
        default:
            return state;
    }

}

export default createStore(combineReducers({
    global: global
}))