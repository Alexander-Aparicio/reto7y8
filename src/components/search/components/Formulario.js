import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

const Formulario = ({ children, keyword }) => {
  const { setData, data } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(keyword.film);
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" sm:w-96 gap-4 flex flex-wrap justify-center"
    >
      {children}
    </form>
  );
};

export default Formulario;
