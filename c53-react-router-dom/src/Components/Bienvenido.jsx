import PropTypes from "prop-types";

export default function Bienvenido({ nombre, apellido, edad }) {
  return (
    <div>
      <h5>
        Hola: {nombre || "Invitado"} {apellido || ""}
      </h5>
      <p>edad: {edad}</p>
    </div>
  );
}

Bienvenido.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired,
  edad: PropTypes.number,
};
