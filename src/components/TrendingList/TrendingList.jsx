const TrendingList = ({ movies }) => {
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.length > 0 &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <link to={`/movies/${movie.id}`} state={{ from: '/' }}>
                  {movie.title}
                </link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default TrendingList;
