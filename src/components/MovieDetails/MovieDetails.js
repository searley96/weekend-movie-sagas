import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';


function MovieDetails() {     


   const movieDetails = useSelector(store => store.movieDetails)
   console.log('movie detail', movieDetails)

   const history = useHistory();


   const handleBackToList = () => {
    history.push('/');
   }

   return (
   <>
    <h1>Movie Details</h1>
    {movieDetails.length ?
    <>
            <img src={movieDetails[0].poster} />
            <li>Title: {movieDetails[0].title}</li>
            <li>Description: {movieDetails[0].description}</li>
            {movieDetails.map((title) => (
                <ul key={title.id}>
                    <li>{title.name}</li>
                </ul>
            ))}
        </>
        : <p>Waiting For Movie</p>}
    <button onClick={handleBackToList}>Back to Movie List</button>
</>)
}

export default MovieDetails;