import styles from "./Info.module.css";

const Info = (props) => {
  const urlImg = "https://image.tmdb.org/t/p/w500";
  const regresar = () => {
    props.setVisible(false);
  };
  return (
    <div className={styles.info}>
      <figure className={styles.figure}>
        <img
          className={styles.image}
          src={`${urlImg}${props.info.poster_path}`}
          alt="poster de película"
        />
      </figure>

      <article className={styles.description}>
        <h2 className={styles.title}>{props.info.title}</h2>
        <div className={styles.sinopsisContainer}>
          <p className={styles.sinopsis}>{props.info.overview}</p>
        </div>
        <div className={styles.data}>
          <p className={styles.score}>
            Puntuación: <span>{props.info.vote_count}</span>
          </p>
          <p className={styles.premiere}>
            Fecha de estreno: <span>{props.info.release_date}</span>
          </p>
        </div>
        <button className={styles.button} onClick={regresar}>
          Regresar
        </button>
      </article>
    </div>
  );
};

export default Info;
