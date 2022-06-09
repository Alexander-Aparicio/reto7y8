import axios from "axios";

const GetFilms = async (movie) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  try {
    const res = await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movie}&language=es`
      )
      .then((res) => res.data.results);
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
};

export default GetFilms;
