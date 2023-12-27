import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/movie-cervice';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getReviews = async () => {
      setLoader(true);
      setError(false);
      try {
        const { results: reviews } = await getMovieReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    getReviews();
  }, [movieId, setError, setLoader]);

  return (
    <>
      <h4>Reviews</h4>
      {loader ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        reviews.length > 0 && (
          <div>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p>Author: {author}</p>
                <p>Comment: {content}</p>
              </li>
            ))}
          </div>
        )
      )}
    </>
  );
};

export default Reviews;
