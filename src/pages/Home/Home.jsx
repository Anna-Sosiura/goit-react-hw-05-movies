import { getTrending } from 'service/movie-cervice';
import TrendingList from 'components/TrendingList/TrendingList';
const { useState, useEffect } = require('react');
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState([false]);
  const [error, setError] = useState([null]);
  useEffect(() => {
    setLoader(true);

    const getTrendings = async () => {
      try {
        const resp = await getTrending();
        setMovies(resp);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    getTrendings();
  }, []);
  return (
    <>
      <h2>Trending today</h2>
      {loader && <h2>...Loading</h2>}
      <TrendingList movies={movies} />
      {error && <p>{error.message}</p>}
    </>
  );
};
export default Home;
