import "./Card.css";

const Card = ({ img, age, setInfo, id }) => {
  const handleClick = () => {
    setInfo(id);
    window.scrollTo(0, 200);
  };

  return (
    <figure className="figure">
      <img
        className="figure__image"
        src={img}
        alt="card de película"
        onClick={handleClick}
      />
      <figcaption className="figure__caption">
        <p>{age}</p>
      </figcaption>
    </figure>
  );
};

export default Card;
