import React, { useContext, useState } from 'react'
import { MovieContext } from '../context/MovieContext';

const MovieForm = () => {

    const { dispatch } = useContext(MovieContext);
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_MOVIE', movie: {
                title, director
            }
        });
        setTitle("");
        setDirector("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="Director" value={director} onChange={(e) => setDirector(e.target.value)} required />
            <input type="submit" value="Add Movie" />
        </form>
    );
}

export default MovieForm;