import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';


function MovieList() {

    const history = useHistory();

    const dispatch = useDispatch();

    const movies = useSelector(store => store.movies);


    //on movie click, taken to details page
    // const detailsPage = (movie) => {
    //     event.preventDefault();
    //     dispatch({
    //         type: "SET_DETAIL",
    //         payload: movie
    //     })
    //     console.log('id', movie.id)
    //     history.push("/details");
    // }

    // //fetch movie details on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={() => {
                                dispatch({
                                    type: "SET_DETAIL",
                                    payload: movie.id
                                });
                                history.push("/details");
                             }} src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;