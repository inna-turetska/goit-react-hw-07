import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { toast } from "react-toastify";

function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    toast.success(`${contact.name} has been deleted`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className={styles.container}>
      <p>
        {contact.name}:<br /> {contact.number}
      </p>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
export default Contact;
