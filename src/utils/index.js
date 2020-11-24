import movies from '../data/movies';

export function generateMovieId() {
    let id = movies.length + 1;
    while (movies.find(movie => movie.id === id)) {
        id ++;
    }
    return id;
}