import styles from "./Welcome.module.css"

const Welcome = () => {
    return (
        <section className={styles.welcome}>
            <h1 className={styles.tittle}>🎥 -- Bienvenido..., disfruta de las series, películas y más --🥤🍿</h1>
            <p className={styles.description}>Aquí podrás observar todas las películas que desees, en distintos idiomas y subtítulos, empieza a disftutar... 👻😎</p>
        </section>
    );
}

export default Welcome;