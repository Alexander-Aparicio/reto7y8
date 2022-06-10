import SearchFilms from "../search/SearchFilm";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.branding}>
        <figure className={styles.header_imagecontainer}>
          <img
            src="https://i.postimg.cc/FRGLtGx0/icon-play.png"
            alt="Foto de Código"
            width="100%"
            className={styles.header_image}
          />
        </figure>
        <h2 className={styles.name}>INFOPelículas</h2>
      </div>

      {window.matchMedia("(min-width: 600px)").matches ? <SearchFilms /> : null}
    </header>
  );
};

export default Header;
