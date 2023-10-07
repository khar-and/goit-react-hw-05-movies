import { fetchTrendingMovies } from 'api/fetch';
import { useEffect, useState } from 'react';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    handleAddTrendingMovies();
  }, []);

  const handleAddTrendingMovies = async () => {
    try {
      setIsLoading(true);
      const data = await fetchTrendingMovies();
      setMovies(data);
      console.log(data);
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
            <li>{`${movie.title}`}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Home;
