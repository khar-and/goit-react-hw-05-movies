import { fetchCast } from 'api/fetch';
import { getPoster } from 'api/getPoster';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
      } finally {
        setIsLoading(false);
      }
    };

    hendleFetchCast();
  }, [movieId]);
  return (
    <div>
      {isLoading && <p>Loading...</p>}

      <ul>
        {cast.map(({ id, profile_path, original_name, name, character }) => (
          <li key={id}>
            <img
              width={200}
              src={getPoster(profile_path)}
              alt={original_name}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
