import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  //   для роботи з динамічними параметрами запиту використовуємо хук useParams
  const { movieId } = useParams();
  console.log(movieId);

  // Із useParams отримуємо значення параметра. і в юзеффекті робимо відповідний запит по цьому значенню. А далі рендеримо всю отриману інфу.

  return (
    <div>
      {movieId}
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
