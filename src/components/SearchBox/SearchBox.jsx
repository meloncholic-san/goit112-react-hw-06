import { useState } from "react";
import css from './SearchBox.module.css';

export default function SearchBox({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  function handleFilter(event) {
    const value = event.target.value;
    setInputValue(value);
    onSearch(value);
  }

  return (
    <div className={css.searchBox}>
      <label htmlFor="searchInput">Find contact by name:</label>
      <input
        id="searchInput"
        onChange={handleFilter}
        type="text"
        value={inputValue}
        className={css.input}
      />
    </div>
  );
}
