import { useState } from 'react';
import { Form, Input, Button } from './SearchForm.styled';
import { CiSearch } from 'react-icons/ci';

export const SearchForm = ({ setSearchQuery }) => {
  const [query, setQuery] = useState('');
  const onInputChange = evt => {
    setQuery(evt.currentTarget.value.trim());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchQuery(query.toLowerCase());
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
