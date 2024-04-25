import PropTypes from "prop-types";
import Styles from "./TarjetaHelado.module.css";

export default function TarjetaHelado(props) {
  return (
    <div className={Styles.card}>
      <h5>Nombre: {props.nombre || "Sabor no definido"}</h5>
      <p>Stock: {props.stock}</p>
      <p>Precio: {props.precio}</p>
    </div>
  );
}

TarjetaHelado.propTypes = {
  nombre: PropTypes.string.isRequired,
  stock: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

  precio: PropTypes.number.isRequired,
};

TarjetaHelado.defaultProps = {
  nombre: "Sin nombre",
  stock: 0,
  precio: 0,
};
