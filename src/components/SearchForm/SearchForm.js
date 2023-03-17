// import { errorToast } from 'components/Toasts/Toasts';

import { useState } from 'react';

// {
//   errorToast('Please, type some movie name to seek for');
// }

export const SearchForm = ({ setSearchQuery }) => {
  const [query, setQuery] = useState('');
  const onInputChange = evt => {
    setQuery(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchQuery(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={onInputChange} value={query} />
      <button type="submit">submit</button>
    </form>
  );
};
