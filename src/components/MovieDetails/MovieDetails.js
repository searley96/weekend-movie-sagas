import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";


function MovieDetails() {
  const movieDetails = useSelector((store) => store.movieDetails);
  console.log("movie detail", movieDetails);

  const history = useHistory();

  const handleBackToList = () => {
    history.push("/");
  };

  return (
    <>
   
      <Typography variant="h3" color="primary">
        Movie Details
      </Typography>
    
      {movieDetails.length ? (
        <>
        
          <img src={movieDetails[0].poster} />
        
          <Typography variant="h5" color="primary">
            <p>{movieDetails[0].title}</p>
          </Typography>
          <Typography color="primary">
            <p>{movieDetails[0].description}</p>
          </Typography>
          {movieDetails.map((title) => (
            <ul key={title.id}>
              <li>{title.name}</li>
            </ul>
          ))}
        </>
      ) : (
        <p>Waiting For Movie</p>
      )}
      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={handleBackToList}
      >
        Back to Movie List
      </Button>
    </>
  );
}

export default MovieDetails;
