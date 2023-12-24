import { StyledLink } from 'components/Components.styled';
const TrendingList = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.length > 0 &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <StyledLink to={`/movies/${movie.id}`} state={{ from: '/' }}>
                  {movie.title}
                </StyledLink>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default TrendingList;
