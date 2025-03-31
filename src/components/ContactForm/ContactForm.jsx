import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { toast } from "react-toastify";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();

    if (!name || !phone) {
      toast.error("All fields must be filled!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    const newContact = {
      id: crypto.randomUUID(),
      name: name,
      number: phone,
    };
    dispatch(addContact(newContact));

    form.reset();
    toast.success(`${newContact.name} has been added!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.container}>
        <label className={styles.label}>Name</label>
        <input className={styles.input} type="text" name="name" />
        <label className={styles.label}>Number</label>
        <input className={styles.input} type="text" name="phone" />
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    </div>
  );
};
