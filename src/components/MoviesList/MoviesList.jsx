import { useLocation } from 'react-router-dom';
import { Item, List, MovieLink } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => {
        return (
          <Item key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </MovieLink>
          </Item>
        );
      })}
    </List>
  );
};

export default MoviesList;
