import styles from "./Welcome.module.css"
const FormSearch = () => {
    return (
    <form className={styles.search_container} action="">
        <input className={styles.search_input} type="text" /> <button className={styles.search_btn}>Buscar</button>
    </form>);
}

export default FormSearch;