import React from 'react'
import MovieCard from '../Card/Card';
import { MovieListComponent } from './styled.js';

function MovieList({ movies }) {
   return (
      <MovieListComponent>
         {
            movies.map(movie => (
               <MovieCard key={movie.id + movie.name ? movie.name : movie.title} item={movie} />
            ))
         }
      </MovieListComponent>
   )
}

export default MovieList