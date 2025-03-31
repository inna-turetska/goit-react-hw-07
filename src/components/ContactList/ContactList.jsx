import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name) || "";

  const filteredContacts = contacts.filter((contact) =>
    contact.name?.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={styles.container}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
