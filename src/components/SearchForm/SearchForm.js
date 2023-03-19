import { useState } from 'react';
import { Form, Input, Button } from './SearchForm.styled';
import { CiSearch } from 'react-icons/ci';
import { errorToast } from '../Toasts/Toasts';

export const SearchForm = ({ setSearchQuery, query }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.query.value.trim().toLowerCase();
    if (!query) {
      errorToast('your search query is empty');
    }
    setSearchQuery({ query });
    evt.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name={'query'}
        placeholder="Search here))"
        required
        defaultValue={query}
      />
      <Button type="submit">
        <CiSearch name="search loop" color="#000" size="30px" />
      </Button>
    </Form>
  );
};
