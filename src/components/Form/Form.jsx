import { useState } from 'react';
import { Button, Input, SearchForm } from './Form.styled';

const Form = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');

  const hendleInputChange = evt => {
    setSearchName(evt.currentTarget.value);
  };

  const hendleSubmitForm = evt => {
    evt.preventDefault();
    // Перевірка на заповнення поля пошуку
    if (searchName.trim() === '') {
      alert('Please input the search name');
    }
    // Передача значення пошуку на сторінку Фільмів
    onSubmit(searchName);
    // очистка поля пошуку
    setSearchName('');
  };

  return (
    <SearchForm onSubmit={hendleSubmitForm}>
      <Input
        type="text"
        autoFocus
        onChange={hendleInputChange}
        value={searchName}
      />
      <Button type="submit">Search</Button>
    </SearchForm>
  );
};

export default Form;
