import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { generateMovieId } from '../utils';

export default function AddMovie() {
    const [movieTitle, setMovieTitle] = useState('');
    const [movieCategory, setMovieCategory] = useState('');
    const [movieImage, setMovieImage] = useState('');

    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_MOVIE', movie: {
            title: movieTitle,
            category: movieCategory,
            image: movieImage,
            id: generateMovieId()
        }});
        setMovieTitle('');
        setMovieCategory('');
        setMovieImage('');
    }

    return (
        <form onSubmit={onSubmit} className="section has-text-centered">
            <div className="field">
                <div className="control">
                    <input className="input" placeholder="Title" value={movieTitle} onChange={e => setMovieTitle(e.target.value)} />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <input className="input" placeholder="Category" value={movieCategory} onChange={e => setMovieCategory(e.target.value)} /> 
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <input className="input" placeholder="Image" value={movieImage} onChange={e => setMovieImage(e.target.value)} />
                </div>
            </div>
            <button className="button is-info" type="submit">Add movie</button>
        </form>
    )

}