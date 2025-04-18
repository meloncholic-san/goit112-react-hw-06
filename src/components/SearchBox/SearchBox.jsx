import css from './SearchBox.module.css';

import { changeFilter } from '../../redux/filtersSlice'
import { useDispatch, useSelector } from "react-redux";

export default function SearchBox() {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.filter.searchFilter)

  function handleFilter(event) {
    dispatch(changeFilter(event.target.value));
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
