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
          <list>
            {genres.map(({ id, name }) => (
              <span key={id}>{name}</span>
            ))}
          </list>
        </div>
      </section>
      <span>Additional information:</span>
      <list>
        <li>
          <link to="cast">Cast</link>
        </li>
        <li>
          <link to="reviews">Reviews</link>
        </li>
      </list>
    </>
  );
};

export default MovieDetailsBlok;
