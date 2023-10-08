import { useState } from 'react';

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
    <form onSubmit={hendleSubmitForm}>
      <input
        type="text"
        autoFocus
        onChange={hendleInputChange}
        value={searchName}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
