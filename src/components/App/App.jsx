import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import css from './App.module.css';
import { useState, useEffect} from 'react';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("saved-contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]
  });

  const [filter, setFilter] = useState("");

  const filteredContacts = contacts.filter(
    contact => contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onSearch = (searchName) => {
    setFilter(searchName);
  };

  const onSubmit = (values, id) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { id, name: values.name, number: values.number },
    ]);
  };

  const deleteContact = (idToDelete) => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== idToDelete)
    );
  };

  useEffect(() => {
    localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={onSubmit} />
      <SearchBox onSearch={onSearch} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}
