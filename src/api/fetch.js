// Импортируем модуль axios для работы с HTTP-запросами
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '61f5150605e191f1fa04ccfca13a3945';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

// curl --request GET \
//      --url 'https://api.themoviedb.org/3/movie/11?api_key=61f5150605e191f1fa04ccfca13a3945'
