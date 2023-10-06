import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  // хтп-запит робимо на сторінках
  // useEffect(() => { })

  return (
    <div>
      {['movie - 1', 'movie - 2', 'movie - 3', 'movie - 3', 'movie - 5'].map(
        movie => {
          return (
            <Link key={movie} to={`${movie}`}>
              {movie}
            </Link>
          );
        }
      )}
    </div>
  );
};

export default Movies;
