import './Card.css';

// eslint-disable-next-line react/prop-types
const Card = ({ nombre, deporte }) => {
  return (
    <div className="card">
      <h3>Hola {nombre}!!</h3>
      <p>{deporte} es tu deporte favorito.</p>
    </div>
  );
};

export default Card;
