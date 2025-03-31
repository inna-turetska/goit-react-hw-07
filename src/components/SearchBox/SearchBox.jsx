import styles from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

function SearchBox() {
  const dispatch = useDispatch();

  const onSearch = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <div className={styles.container}>
      <p className={styles.text}>Find contacts by name</p>{" "}
      <input
        type="text"
        name="text"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
