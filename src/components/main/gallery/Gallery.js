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
    <article className="article w-full py-24 sm:py-36 z-40">
      <h1 className=" text-slate-300 text-2xl text-center sm:text-5xl">
        🍿 ¡BIENVENIDO! 😎
      </h1>
      <p className="text-slate-300 text-lg sm:text-2xl py-4 my-4 px-4 text-center">
        Busca información sobre las películas a estrenarse, encuentra films que
        todavía no viste y te recomendaron.
      </p>

      {window.matchMedia("(min-width: 600px)").matches ? null : <Info />}

      <section className="section w-full">
        <h2 className=" text-2xl sm:text-4xl text-yellow-500 p-5 text-center">
          Acción - Terror y más
        </h2>
        <div className="article-cards-container">
          <div className="article-cards relative w-full flex flex-wrap justify-center items-baseline my-8 gap-x-4 gap-y-7 px-3 sm:px-14 sm:gap-x-6 md:px-20 md:gap-x-9 md:gap-y-16 z-40">
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
              <h3 className="absolute inset-1/4 text-center text-yellow-50 text-3xl">
                --- No se encontraron resultados ---
              </h3>
            )}

            {films.find((card) => card.id === info) !== undefined ? (
              <article className="card-info rounded-lg flex flex-wrap justify-center border-2 py-8 px-10 absolute inset-x-5 sm:inset-x-14 md:inset-x-52 xl:inset-x-56 2xl:inset-x-80 top-0 bg-gray-800 gap-x-14 gap-y-10">
                <h2 className="text-center w-full text-yellow-500 text-2xl sm:text-4xl">
                  {films.filter((card) => card.id === info)[0].title}
                </h2>
                <div className=" w-64">
                  <img
                    className=" w-full"
                    src={`${urlImg}${
                      films.filter((card) => card.id === info)[0].poster_path
                    }`}
                    alt="poster de film"
                  />
                </div>
                <div className="py-4 my-4 px-4 max-w-md">
                  <p className="text-slate-300 text-lg sm:text-2xl text-left">
                    {films.filter((card) => card.id === info)[0].overview}
                  </p>
                  <p className="text-slate-300 text-lg sm:text-2xl text-left my-4">
                    Popularidad:{" "}
                    <span className="text-yellow-500">
                      {films.filter((card) => card.id === info)[0].popularity}
                    </span>
                  </p>
                  <button
                    onClick={() => setInfo("")}
                    className="px-4 py-2 border-2 text-yellow-50 rounded-lg bg-red-600 hover:bg-red-500 my-4 text-xl"
                  >
                    Regresar
                  </button>
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
