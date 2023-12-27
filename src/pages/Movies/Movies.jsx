import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../service/movie-cervice';
import SearchForm from 'components/SearchForm/SearchForm';
import SearchMovies from 'components/SearchMovies/SearchMovies';
const Movies = () => {
  const [search, setSearch] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchParams = search.toString();
    if (searchParams) {
      setLoader(true);
      setError(null);
      const getSearchMovies = async () => {
        try {
          const { results: movies } = await searchMovies(searchParams);
          setMovies(movies);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoader(false);
        }
      };
      getSearchMovies();
    }
  }, [search, setError, setLoader]);

  const handleSearch = query => {
    if (query) setSearch(`query=${query}`);
  };

  return (
    <>
      <SearchForm handleSearch={handleSearch} />
      {loader ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        movies.length > 0 && <SearchMovies movies={movies} search={search} />
      )}
    </>
  );
};

export default Movies;
