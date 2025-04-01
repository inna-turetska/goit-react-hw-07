import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { useSelector } from "react-redux";
import {
  selectFilteredContacts,
  selectError,
  selectIsloading,
} from "../../redux/contactsSlice";
import { toast } from "react-toastify";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    toast.error("All fields must be filled!", {
      position: "top-right",
      autoClose: 3000,
    });
    return;
  }

  return (
    <ul className={styles.container}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
