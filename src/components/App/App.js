import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails' 
import Typography from '@mui/material/Typography';

function App() {



  return (
    <div className="App">
      <Typography variant = "h1"
      color = "secondary"

      >The Movies Saga!</Typography>
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
