import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import styles from "./Formulario.module.css";

const Formulario = ({ children, keyword }) => {
  const { setData, data } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(keyword.film);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {children}
    </form>
  );
};

export default Formulario;
// sm:w-96 gap-4 flex flex-wrap justify-center
