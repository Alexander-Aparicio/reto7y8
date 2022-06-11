import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <figure className={styles.logo}>
        <img
          className={styles.imagen}
          src={"./the-movie-db.svg"}
          alt="logo de the movie db"
        />
      </figure>
      <p className={styles.developer}>Desarrollado por Shess Develop</p>
      <nav className={styles.footerNav}>
        <div className={styles.footerNavContainer}>
          <ul className={styles.footerNavlinkList}>
            <li className={styles.footerNavlinkItem}>
              <a
                href="https://www.instagram.com/"
                className={styles.footerNavlink}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <img
                  src="https://i.postimg.cc/sfJtqS4W/instagram.png"
                  alt="Instagram"
                  className={styles.footerNavlinkImage}
                />
              </a>
            </li>

            <li className={styles.footerNavlinkItem}>
              <a
                href="https://es-la.facebook.com/"
                className={styles.footerNavlink}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <img
                  src="https://i.postimg.cc/7YHyZXZX/facebook.png"
                  alt="Facebook"
                  className={styles.footerNavlinkImage}
                />
              </a>
            </li>

            <li className={styles.footerNavlinkItem}>
              <a
                href="https://www.youtube.com/"
                className={styles.footerNavlink}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <img
                  src="https://i.postimg.cc/dtPYcvbM/youtube.png"
                  alt="YouTube"
                  className={styles.footerNavlinkImage}
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
