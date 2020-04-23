import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map(movieInfo => { 
      return (
      <MovieCard title={movieInfo.title} IMDBRating={movieInfo.IMDBRating} genres={movieInfo.genres} poster={movieInfo.poster}/>
      ) //return
      }) //map
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
