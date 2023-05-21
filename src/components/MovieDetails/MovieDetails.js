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
          
          <Typography  sx= {{mr : 8}} varient="h4" color="primary" component="ul" style={{ listStyleType: "none" }}>
            {movieDetails[0].array_agg.map((title) => (
              <li style={{ listStyleType: "none" }}>{title}</li>
            ))}
          </Typography>
          
        </>
      ) : (
        <p>Waiting For Movie</p>
      )}
  
      <Button
     sx=  {{mr : 3, mt: 3, mb: 3}} 
        variant="contained"
        size="large"
        color="primary"
        onClick={handleBackToList}
      >
        Back to Movie List
      </Button>
    </>
  )
};

export default MovieDetails;
