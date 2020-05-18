import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom'

//Components used for different routes
import SavedList from './Movies/SavedList';

//I added this not sure if I need it yet
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'


const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      {/* <div>Replace this Div with your Routes</div> */}
      
      <Route path='/movies/:movieID'>
        <Movie movies={movieList} />
      </Route>


      <Route path='/'>
        <MovieList key={movieList.id} movies={movieList} />
      </Route>
    </div>
  );
};

export default App;
