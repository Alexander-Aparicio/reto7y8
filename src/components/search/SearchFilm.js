import { useState } from "react";
import Formulario from "./components/Formulario";
import InputSearch from "./components/InputSearch";
import Search from "./components/Search";

const SearchFilms = () => {
  const [keyword, setKeyword] = useState({ film: "" });

  return (
    <Formulario keyword={keyword}>
      <InputSearch keyword={keyword} setKeyword={setKeyword}>
        Buscar película
      </InputSearch>
      <Search>Buscar</Search>
    </Formulario>
  );
};

export default SearchFilms;
