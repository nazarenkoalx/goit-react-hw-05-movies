import { useState } from 'react';
import { Form, Input, Button } from './SearchForm.styled';
import { CiSearch } from 'react-icons/ci';
import { errorToast } from '../Toasts/Toasts';

export const SearchForm = ({ setSearchQuery }) => {
  const [query, setQuery] = useState('');
  const onInputChange = evt => {
    const value = evt.currentTarget.value.toLowerCase();
    setQuery(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const normalizedQuery = query.trim();
    if (normalizedQuery === '') {
      setQuery('');
      evt.target.reset();
      return errorToast('your query is empty');
    }
    setSearchQuery(normalizedQuery);
    setQuery('');
    evt.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        onChange={onInputChange}
        value={query}
        placeholder="Search here))"
        required
      />
      <Button type="submit">
        <CiSearch name="search loop" color="#000" size="30px" />
      </Button>
    </Form>
  );
};
