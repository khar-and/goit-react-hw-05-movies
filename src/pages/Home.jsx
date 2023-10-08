import { fetchTrendingMovies } from 'api/fetch';
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    handleAddTrendingMovies();
  }, []);

  const handleAddTrendingMovies = async () => {
    try {
      setIsLoading(true);
      const data = await fetchTrendingMovies();
      setMovies(data);
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Trending Today</h1>
      {isLoading && <p>Loading...</p>}
      {movies.map(movie => {
        return (
          <ul>
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {`${movie.title}`}
              </Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Home;
