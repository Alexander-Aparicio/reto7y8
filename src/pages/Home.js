import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.home}>
      <ul className={styles.ul}>
        <li className={styles.li1}>
          <picture>
            <img
              className={styles.imagen}
              src="https://i.postimg.cc/pV1RX2y8/p01.jpg"
              alt="imagen1"
            ></img>
          </picture>
        </li>
        <li className={styles.li2}>
          <picture>
            <img
              className={styles.imagen}
              src="https://i.postimg.cc/90ShxBs1/p02.jpg"
              alt="imagen2"
            ></img>
          </picture>
        </li>
        <li className={styles.li3}>
          <picture>
            <img
              className={styles.imagen}
              src="https://i.postimg.cc/3J47kPDq/p03.jpg"
              alt="imagen3"
            ></img>
          </picture>
        </li>
        <li className={styles.li4}>
          <picture>
            <img
              className={styles.imagen}
              src="https://i.postimg.cc/bJm8nPT7/p04.jpg"
              alt="imagen4"
            ></img>
          </picture>
        </li>
        <li className={styles.li5}>
          <picture>
            <img
              className={styles.imagen}
              src="https://i.postimg.cc/1X4Scd7f/p05.jpg"
              alt="imagen5"
            ></img>
          </picture>
        </li>
      </ul>
      <div className={styles.button_container}>
        <Link to={"/buscador"}>
          <button className={styles.button}>Buscar películas</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
