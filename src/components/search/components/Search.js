import styles from "./Search.module.css";

const Search = ({ children }) => {
  return <input value={children} className={styles.search} type={"submit"} />;
};

export default Search;
// bg-yellow-600 w-20 text-white px-4 py-1 rounded-lg cursor-pointer
