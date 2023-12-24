import { useState } from 'react';

const SearchForm = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    e.preventDefault();
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    handleSearch(query);
    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">Search</button>
        <input
          type="text"
          placeholder="Search movie"
          name="query"
          value={query}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default SearchForm;
