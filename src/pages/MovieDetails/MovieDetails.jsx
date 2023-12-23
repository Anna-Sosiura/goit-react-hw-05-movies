import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'service/movie-cervice';
import MovieDetailsBlok from 'components/MovieDetailsBlok/MovieDetailsBlok';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loader, setLoader] = useState([false]);
  const [error, setError] = useState([null]);

  const { movieId } = useParams();
  //   const location = useLocation();
  useEffect(() => {
    const getDetails = async () => {
      setLoader(true);
      setError(null);
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch ({ message }) {
        setError(message);
      } finally {
        setLoader(false);
      }
    };
    getDetails();
  }, [movieId, setError, setLoader]);

  //   const { from } = state ?? {};

  return (
    <>
      <link to={'/'}>{'<- Back'}</link>

      {loader ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        // movie && <MovieDetailsComponent movie={movie} from={from} />
        movie && <MovieDetailsBlok movie={movie} />
      )}

      <Outlet />
    </>
  );
};

export default MovieDetails;
