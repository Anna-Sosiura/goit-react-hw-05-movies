import { StyledLink } from 'components/Components.styled';
const SearchMovies = ({ movies, search }) => {
  return (
    <ul>
      {movies.map(({ id, title, overview, poster_path }) => (
        <li key={id}>
          <StyledLink
            to={`/movies/${id}`}
            state={{ from: `/movies?${search}` }}
          >
            <h2>{title}</h2>
            <img
              height={100}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : 'https://i.imgur.com/jtwlswk.png'
              }
              alt={overview}
            />
          </StyledLink>
        </li>
      ))}
    </ul>
  );
};

export default SearchMovies;
