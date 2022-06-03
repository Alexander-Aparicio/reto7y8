import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import GetFilms from "../../../helpers/fetch";
import Card from "./card/Card";
import Info from "../info/Info";
import "./Gallery.css";

const Gallery = () => {
  const [info, setInfo] = useState(null);
  const { data } = useContext(DataContext);
  console.log(data);

  const urlImg = "https://image.tmdb.org/t/p/w500";

  const [films, setFilms] = useState([]);

  useEffect(() => {
    GetFilms(`${data}`).then((res) => setFilms(res));
  }, [data]);

  return (
    <article className="article">
      <h1 className="article__title">🍿 ¡BIENVENIDO! 😎</h1>
      <p className="article__description">
        Busca información sobre las películas a estrenarse, encuentra films que
        todavía no viste y te recomendaron.
      </p>

      {window.matchMedia("(min-width: 600px)").matches ? null : <Info />}

      <section className="section">
        <h2 className="section__title">Acción - Terror y más</h2>
        <div className="article-cards-container">
          <div className="article-cards">
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
              <article>
                <h2>{films.filter((card) => card.id === info)[0].title}</h2>
                <div>
                  <img
                    src={`${urlImg}${
                      films.filter((card) => card.id === info)[0].poster_path
                    }`}
                    alt="poster de film"
                  />
                </div>
                <div>
                  <p>{films.filter((card) => card.id === info)[0].overview}</p>
                  <p>
                    Popularidad:{" "}
                    <span>
                      {films.filter((card) => card.id === info)[0].popularity}
                    </span>
                  </p>
                  <button onClick={() => setInfo("")}>Regresar</button>
                </div>
              </article>
            ) : null}
          </div>
        </div>
      </section>
    </article>
  );
};

export default Gallery;
