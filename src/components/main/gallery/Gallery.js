import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import GetFilms from "../../../helpers/fetch";
import Card from "./card/Card";
import Info from "../info/Info";
import styles from "./Gallery.module.css";

const Gallery = () => {
  const [info, setInfo] = useState(null);
  const { data } = useContext(DataContext);
  const urlImg = "https://image.tmdb.org/t/p/w500";
  const [films, setFilms] = useState([]);

  useEffect(() => {
    GetFilms(`${data}`).then((res) => setFilms(res));
  }, [data]);

  return (
    <article className={styles.article}>
      <h1 className={styles.article__title}>🍿 ¡BIENVENIDO! 😎</h1>
      <p className={styles.article__description}>
        Busca información sobre las películas a estrenarse, encuentra films que
        todavía no viste y te recomendaron.
      </p>

      {window.matchMedia("(min-width: 600px)").matches ? null : <p></p>}

      <section className={styles.section}>
        <h2 className={styles.section__title}>Acción - Terror y más</h2>
        <div className={styles.section__cards}>
          {films.length !== 0 ? (
            films.map((card) => {
              if (card.poster_path !== null) {
                return (
                  <Card
                    setInfo={setInfo}
                    id={card.id}
                    key={card.id}
                    img={`${urlImg}${card.poster_path}`}
                    age={card.release_date}
                  />
                );
              } else {
                return null;
              }
            })
          ) : (
            <h3>--- No se encontraron resultados ---</h3>
          )}
          {films.find((card) => card.id === info) !== undefined ? (
            <Info info={films.filter((card) => card.id === info)[0]}></Info>
          ) : null}
        </div>
      </section>
    </article>
  );
};

export default Gallery;
