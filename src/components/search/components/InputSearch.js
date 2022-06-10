import styles from "./InputSearch.module.css";

const InputSearch = ({ children, keyword, setKeyword }) => {
  return (
    <input
      name="film"
      onChange={(e) =>
        setKeyword({ ...keyword, [e.target.name]: e.target.value })
      }
      value={keyword.film}
      type={"search"}
      className={styles.input}
      placeholder={children}
    />
  );
};

export default InputSearch;
// rounded-md px-2 py-1 w-56 sm:max-w-sm
