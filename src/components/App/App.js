import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import MovieDetails from "../MovieDetails/MovieDetails";
import Typography from "@mui/material/Typography";
import { Grid, Paper } from "@mui/material";

function App() {
  return (
    <div className="App">
       <Paper elevation={7}>
      <Typography variant="h1" color="primary">
        The Movies Saga!
      </Typography>
      </Paper>
      <br></br>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/details">
          <MovieDetails />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}

export default App;
