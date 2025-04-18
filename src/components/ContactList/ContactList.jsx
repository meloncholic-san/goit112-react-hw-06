import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from './ContactList.module.css';


export default function ContactList() {

  const contacts = useSelector((state) => state.contacts.contacts);
  const searchFilter  = useSelector((state) => state.filter.searchFilter);

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.listItem}>
          <Contact contact={contact}/>
        </li>
      ))}
    </ul>
  );
}
