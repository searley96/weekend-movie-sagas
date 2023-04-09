import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function MovieItem(movie) {
    const dispatch = useDispatch();
    const history = useHistory();

     // get details for each movie 
    // takes user to details page
    const handleClick = () => {
        dispatch({
            type: 'FETCH_DETAILS',
            payload: movie.id
        });
        history.push('/details');
    }

    return (
        // display title and poster for selected movie
        <div>
                <h2>{movie.title}</h2>
                <img width="200" height="300" onClick={handleClick} src={movie.poster} alt={movie.title}/>
        </div>
    )
}


export default MovieItem;