import React from "react";
import styles from "./Info.module.css";

const Info = () => {
  return (
    <figure className={styles.info}>
      <img
        className={styles.image}
        src="./img/vengadores.jpg"
        alt="poster de película"
      />
      <figcaption className={styles.description}>
        <h2 className={styles.title}>La película</h2>
        <p className={styles.sinopsis}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quo ad
          distinctio vel assumenda cupiditate sit eos labore error! Asperiores
          corrupti facilis omnis delectus, maxime et repellat nemo ratione
          soluta.
        </p>
        <div className={styles.data}>
          <p className={styles.score}>
            Puntuación: <span>10</span>
          </p>
          <p className={styles.premiere}>
            Fecha de estreno: <span>10/11/2022</span>
          </p>
        </div>
        <button className={styles.button}>Regresar</button>
      </figcaption>
    </figure>
  );
};

export default Info;
