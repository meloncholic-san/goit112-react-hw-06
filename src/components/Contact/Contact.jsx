import css from './Contact.module.css';

import { removeContact }from "../../redux/contactsSlice"
import { useDispatch } from 'react-redux';

export default function Contact({ contact: { id, name, number }}) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeContact(id));
  };

  return (
    <div className={css.contact}>
      <div>
        <p className={css.name}>Name: {name}</p>
        <p className={css.phone}>Phone: {number}</p>
      </div>
      <button className={css.button} onClick={handleDelete}>Delete</button>
    </div>
  );
}
