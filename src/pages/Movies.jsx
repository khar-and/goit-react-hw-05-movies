import { getMovieByQuery } from 'api/fetch';
import Form from 'components/Form/Form';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentQuery = searchParams.get('query');
    if (!currentQuery) return;

    const hendleMovieByQuery = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieByQuery(currentQuery);
        setMovies(data);
      } catch {
        alert('Something went wrong!');
      } finally {
        setIsLoading(false);
      }
    };
    hendleMovieByQuery();
  }, [searchParams]);

  return (
    <div>
      <Form setSearchParams={setSearchParams} />
      {isLoading && <Loader />}
      {movies && <MoviesList movies={movies} />}
    </div>
  );
};

export default Movies;
