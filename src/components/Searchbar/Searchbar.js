import { useState } from 'react';
import styles from '../Searchbar/searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    const queryValue = e.currentTarget.value.toLowerCase().trim();
    setQuery(queryValue);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(query);

    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          className={styles.inputForm}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleChange}
        />
        <button type="submit" className={styles.buttonForm}>
          <span>Search</span>
        </button>
      </form>
    </>
  );
}
