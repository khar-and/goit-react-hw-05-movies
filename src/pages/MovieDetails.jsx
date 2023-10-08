import { fetchMovieDetails } from 'api/fetch';
import { getPoster } from 'api/getPoster';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  //   для роботи з динамічними параметрами запиту використовуємо хук useParams
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movieInfo, setMovieInfo] = useState(null);
  useEffect(() => {
    const handleAddMoviesById = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovieDetails(movieId);
        setMovieInfo(data);
      } catch {
        alert('Something went wrong!');
      } finally {
        setIsLoading(false);
      }
    };
    handleAddMoviesById();
  }, [movieId]);

  const location = useLocation();
  // Із useParams отримуємо значення параметра. і в юзеффекті робимо відповідний запит по цьому значенню. А далі рендеримо всю отриману інфу.

  const { title, release_date, popularity, overview, genres, poster_path } =
    movieInfo || {};
  return (
    <div>
      <Link to={location.state?.from ?? '/'}>Go back</Link>
      {isLoading && <Loader />}
      {movieInfo && (
        <div>
          <img src={getPoster(poster_path)} alt="poster" width={300} />
          <div>
            <h1>
              {title} ({release_date.slice(0, 4)})
            </h1>
            <p>User score: {popularity}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <ul>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews"> Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
