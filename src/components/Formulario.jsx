import { useState } from 'react';
import Card from './Card';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [deporte, setDeporte] = useState('');
  const [error, setError] = useState('');
  const [card, setCard] = useState(false);

  const onChangeNombre = (e) => setNombre(e.target.value);
  const onChangeDeporte = (e) => setDeporte(e.target.value);

  const nombreValidado = () => {
    return nombre.trim().length >= 3;
  };
  const deporteValidado = () => {
    return deporte.trim().length >= 6;
  };

  const handleOnChange = (e) => {
    e.preventDefault();

    const validadorNombre = nombreValidado();
    const validadorDeporte = deporteValidado();

    if (validadorNombre && validadorDeporte) {
      setCard(true);
      setError('');
    } else {
      setCard(false);
      setError('Por favor chequea que la información sea correcta');
    }
  };

  return (
    <div className="formulario-fondo">
      <h1>Tu deporte</h1>
      <h3>Nombre y deporte favorito</h3>
      <form onSubmit={handleOnChange}>
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={onChangeNombre}
        />
        <br />

        <label htmlFor="nombre"> Deporte: </label>
        <input
          type="text"
          placeholder="Ingresa tu deporte"
          value={deporte}
          onChange={onChangeDeporte}
        />
        <br />

        <button type="submit">Enviar</button>
        {!card ? null : <Card nombre={nombre} deporte={deporte} />}
        {error ? <p className="msj-error">{error}</p> : null}
      </form>
    </div>
  );
};

export default Formulario;
