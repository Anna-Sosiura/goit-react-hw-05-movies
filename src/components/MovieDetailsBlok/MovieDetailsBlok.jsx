import { StyledLink } from 'components/Components.styled';
const MovieDetailsBlok = ({ movie }) => {
  const { poster_path, overview, title, release_date, genres, vote_average } =
    movie ?? {};
  const date = release_date?.split('-')[0];
  const rating = (vote_average * 10)?.toFixed(0);

  return (
    <>
      <section>
        <img
          height={500}
          weight={500}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : 'https://i.imgur.com/jtwlswk.png'
          }
          alt={overview}
        />
        <div>
          <h2>{`${title} (${date})`}</h2>
          <p>User score: {rating}%</p>
          <h3>Overwiew</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres.map(({ id, name }) => (
              <span key={id}>{name}</span>
            ))}
          </ul>
        </div>
      </section>
      <span>Additional information:</span>
      <ul>
        <li>
          <StyledLink to="cast">Cast</StyledLink>
        </li>
        <li>
          <StyledLink to="reviews">Reviews</StyledLink>
        </li>
      </ul>
    </>
  );
};

export default MovieDetailsBlok;
