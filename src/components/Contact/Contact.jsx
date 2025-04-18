import css from './Contact.module.css';

export default function Contact({ contact: { id, name, number }, onDelete }) {
  const handleDelete = () => {
    onDelete(id);
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
