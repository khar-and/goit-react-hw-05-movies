import { fetchTrendingMovies } from 'api/fetch';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
    } catch {
      alert('Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Trending Today</h1>
      {isLoading && <Loader />}
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
