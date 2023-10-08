import { fetchMovieBySearchName } from 'api/fetch';
import Form from 'components/Form/Form';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  // хтп-запит робимо на сторінках
  // useEffect(() => { })
  const searchMovies = async searchName => {
    try {
      setIsLoading(true);
      const data = await fetchMovieBySearchName(searchName);
      console.log(data);
      setMovies(data);
    } catch {
      alert('Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Form onSubmit={searchMovies} />
      {isLoading && <Loader />}
      {movies.length === 0 && (
        <p>There are no films matching your request. Try again</p>
      )}
      {movies && <MoviesList movies={movies} />}
    </div>
  );
};

export default Movies;
