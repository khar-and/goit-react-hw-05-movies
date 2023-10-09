import { useState } from 'react';
import { Button, Input, SearchForm } from './Form.styled';

const Form = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  // const hendleInputChange = evt => {
  //   setSearchName(evt.currentTarget.value);
  // };

  const hendleSubmitForm = evt => {
    evt.preventDefault();
    //     if (query.trim() === '') {
    //   alert('Please input the search name');
    // }
    setSearchParams({ query });

    // // очистка поля пошуку
    // setSearchName('');
  };

  const handleSearchParams = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <SearchForm onSubmit={hendleSubmitForm}>
      <Input
        type="text"
        autoFocus
        onChange={handleSearchParams}
        value={query}
      />
      <Button type="submit">Search</Button>
    </SearchForm>
  );
};

export default Form;

// import { useState } from 'react';
// // import { InputSearch, ButtonSearch } from './Form.module';

// const Form = ({ setSearchParams }) => {
//   const [query, setQuery] = useState('');

//   const handleSubmit = e => {
//     e.preventDefault();

//     setSearchParams({ query });
//   };

//   const handleSearchParams = ({ target: { value } }) => {
//     setQuery(value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <InputSearch
//         type="text"
//         placeholder="Name movie"
//         autoFocus
//         value={query}
//         onChange={handleSearchParams}
//       />
//       <ButtonSearch type="submit" disabled={!query}>
//         Search
//       </ButtonSearch>
//     </form>
//   );
// };

// export default Form;
