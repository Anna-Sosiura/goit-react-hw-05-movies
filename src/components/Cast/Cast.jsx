import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../service/movie-cervice';
// import {getMovieCredits} from 'service/movie-cervice'

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [loader, setLoader] = useState([false]);
  const [error, setError] = useState([null]);

  useEffect(() => {
    const getCast = async () => {
      setLoader(true);
      setError(false);
      try {
        const { cast } = await getMovieCredits(movieId);
        setCast(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    getCast();
  }, [movieId, setError, setLoader]);
  return (
    <>
      <h4>Cast</h4>
      {loader ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        cast.length > 0 && (
          <ul>
            {cast.map(({ id, name, character, profile_path }) => (
              <li key={id}>
                <img
                  height={100}
                  width={100}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : 'https://i.imgur.com/jtwlswk.png'
                  }
                  alt=""
                />
                <p>Name: {name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        )
      )}
    </>
  );
};
export default Cast;
