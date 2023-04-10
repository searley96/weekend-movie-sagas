import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import { useHistory } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Grid, Paper } from "@mui/material";

function MovieList() {
  const history = useHistory();

  const dispatch = useDispatch();

  const movies = useSelector((store) => store.movies);

  // //fetch movie details on page load
  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <Grid container direction="column" spacing={2}>
      <main>
        <Grid item xs={12}>
          <Typography variant="h2" color="primary">
            MovieList
          </Typography>
        </Grid>
        <br></br>
        <Grid item xs={12}>
            <Grid
              container
              alignItems="center"
              justify="space-evenly"
              spacing={4}
            >
              <br></br>
              <section className="movies">
                {movies.map((movie) => {
                  return (
                    <Grid item key={movie.id} xs={4}>
                      <div key={movie.id}>
                        <Typography
                          variant="h6"
                          color="primary"
                          align="center"
                        >
                          {movie.title}
                        </Typography>
                        <img
                          onClick={() => {
                            dispatch({
                              type: "SET_DETAIL",
                              payload: movie.id,
                            });
                            history.push("/details");
                          }}
                          src={movie.poster}
                          alt={movie.title}
                        />
                      </div>
                    </Grid>
                  );
                })}
              </section>
            </Grid>
        </Grid>
      </main>
    </Grid>
  );
}

export default MovieList;
