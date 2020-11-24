import React from 'react';
import { useSelector } from 'react-redux';
import Movie from './Movie';

export default function Movies() {
    const { movies } = useSelector((redux) => {
        return redux.global
    });
    return (
        <div className="columns is-multiline">
            {movies.map((movie, index) => {
                movie = {...movie, index};
                console.log('Movie:', movie);
                return (
                    <div className="column is-4" key={index}>
                        <Movie movie={movie} />
                    </div>
                )
            })}
        </div>
    )

}