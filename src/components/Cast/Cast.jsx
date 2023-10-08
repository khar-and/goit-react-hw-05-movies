import { fetchCast } from 'api/fetch';
import { getPoster } from 'api/getPoster';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, Text } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const hendleFetchCast = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCast(movieId);
        setCast(data);
      } catch {
        alert('Something went wrong!');
      } finally {
        setIsLoading(false);
      }
    };

    hendleFetchCast();
  }, [movieId]);
  return (
    <div>
      {isLoading && <Loader />}

      <List>
        {cast.map(({ id, profile_path, original_name, name, character }) => (
          <li key={id}>
            <img
              width={200}
              src={getPoster(profile_path)}
              alt={original_name}
            />
            <Text>{name}</Text>
            <Text>Character: {character}</Text>
          </li>
        ))}
      </List>
    </div>
  );
};

export default Cast;
