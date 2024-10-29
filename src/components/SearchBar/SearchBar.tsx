import React from 'react';
import { Toaster } from 'react-hot-toast';
import { HiOutlineSearch } from 'react-icons/hi';

import { errNotify } from '../../notifications/error-notify';
import { ERR_EMPTY_SEARCH } from '../../notifications/constants';
import { SearchBarProps } from './SearcBar.types';

import styles from './SearchBar.module.css';

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget; 
    const searchStr = form.elements.namedItem('search') as HTMLInputElement; 

    if (searchStr.value.trim() === '') {
      errNotify(ERR_EMPTY_SEARCH);
      return;
    }
    onSearch(searchStr.value);
    form.reset();
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <input
            className={styles.input}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <Toaster />
        </div>

        <button className={styles.button} type="submit">
          <HiOutlineSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
