import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'service/movie-cervice';
import MovieDetailsBlok from 'components/MovieDetailsBlok/MovieDetailsBlok';
import { StyledLink } from 'components/Components.styled';
const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
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
  return (
    <>
      <StyledLink to={'/'}>{'<- Back'}</StyledLink>

      {loader ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        movie && <MovieDetailsBlok movie={movie} />
      )}

      <Outlet />
    </>
  );
};

export default MovieDetails;
