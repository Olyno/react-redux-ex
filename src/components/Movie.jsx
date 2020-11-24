import React from 'react';
import { useDispatch } from 'react-redux';

export default function Movie({ movie }) {
    const dispatch = useDispatch();
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={movie.image} alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{movie.title}</p>
                        <p className="subtitle is-6">{movie.category}</p>
                    </div>
                </div>
            </div>
            <footer className="card-footer">
                <div className="card-footer-item">
                    <button className="button is-danger" onClick={() => dispatch({ type: 'DELETE_MOVIE', index: movie.index })}>Delete</button>
                </div>
            </footer>
        </div>
    )
}