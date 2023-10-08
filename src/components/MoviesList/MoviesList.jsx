import { useLocation } from 'react-router-dom';
import { Item, List, MovieLink } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, title }) => {
        return (
          <Item key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </MovieLink>
          </Item>
        );
      })}
    </List>
  );
};

export default MoviesList;
