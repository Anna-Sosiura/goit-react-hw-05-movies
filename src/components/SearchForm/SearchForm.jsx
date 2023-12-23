import { useState } from 'react';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { HiMagnifyingGlass } from 'react-icons/hi2';

// export const paramsForNotify = {
//   position: 'center-center',
//   timeout: 3000,
//   width: '400px',
//   fontSize: '24px',
// };
const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    e.preventDefault();
    setQuery(e.target.value.toLowerCase().trim());
  };

  const handleSubmit = e => {
    e.preventDefault();

    // if (!query) {
    //   Notify.info('Enter your request, please!');
    //   return;
    // }
    onSearch(query);
    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">кнопка</button>
        <input
          type="text"
          placeholder="Enter for search movies"
          name="query"
          value={query}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default SearchForm;
