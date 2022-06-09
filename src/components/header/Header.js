import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <figure className={styles.header__imagecontainer}>
        <img
          src="https://i.postimg.cc/FRGLtGx0/icon-play.png"
          alt="Foto de Código"
          width="100%"
          className={styles.header_image}
        />
      </figure>
      <h2 className={styles.name}>INFOPelículas</h2>
    </header>
  );
};

export default Header;