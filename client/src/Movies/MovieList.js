import React from 'react';
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'

const MovieList = props => {
  
  return (

      <div className="movie-list">
        {props.movies.map(movie => (
         
            <MovieDetails key={movie.id} movie={movie} />
          
        ))}
      </div>
  
  );
}

function MovieDetails({ movie }) {
  //const { title, director, metascore, stars } = movie;

  // const { url } = useRouteMatch()

  // console.log(url)
  return (
    <Link to={`/movies/${movie.id}`}>
      {/* <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div> */}
      <MovieCard movie={movie}/>
    </Link>
  );
}

export default MovieList;
