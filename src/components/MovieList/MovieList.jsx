import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@material-ui/core/Container';



function MovieList() {

    const history = useHistory();

    const dispatch = useDispatch();

    const movies = useSelector(store => store.movies);
  

    // //fetch movie details on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <Typography variant = "h3"
            color = "secondary"
            >MovieList</Typography>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <Typography variant = "h6"
                            color = "secondary"
                            align = "center"
                            >{movie.title}</Typography>
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