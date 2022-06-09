import styles from "./Card.module.css";

const Card = ({ img, age, setInfo, id, setVisible }) => {
  const handleClick = () => {
    setInfo(id);
    setVisible(true);
    window.matchMedia("(min-width: 600px)").matches
      ? window.scrollTo(0, 200)
      : window.scrollTo(0, 0);
  };

  return (
    <figure onClick={handleClick} className={styles.figure}>
      <img className={styles.figure__image} src={img} alt="card de película" />
    </figure>
  );
};

export default Card;
