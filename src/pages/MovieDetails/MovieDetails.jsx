import { fetchMovieDetails } from 'api/fetch';
import { getPoster } from 'api/getPoster';
import Loader from 'components/Loader/Loader';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  Button,
  Container,
  LinkInfo,
  List,
  ListInfo,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const location = useLocation();
  console.log(location);
  const backLinkLocation = useRef(location.state?.from ?? '/movies');
  // const backLinkLocation = location.state?.from ?? '/movies';
  console.log(backLinkLocation);

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

  // Із useParams отримуємо значення параметра. і в юзеффекті робимо відповідний запит по цьому значенню. А далі рендеримо всю отриману інфу.

  const { title, release_date, popularity, overview, genres, poster_path } =
    movieInfo || {};
  return (
    <div>
      <Link to={backLinkLocation.current}>
        <Button type="button">Go back</Button>
      </Link>
      {isLoading && <Loader />}
      {movieInfo && (
        <Container>
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
                <List key={genre.id}>{genre.name}</List>
              ))}
            </ul>
          </div>
        </Container>
      )}
      <hr />
      <h3>Additional information</h3>
      <ListInfo>
        <li>
          <LinkInfo to="cast">Cast</LinkInfo>
        </li>
        <li>
          <LinkInfo to="reviews"> Reviews</LinkInfo>
        </li>
      </ListInfo>
      <hr />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
