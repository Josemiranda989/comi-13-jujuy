import PropTypes from "prop-types";
import Styles from "./TarjetaHelado.module.css";

export default function TarjetaHelado(props) {
  return (
    <div className={Styles.card}>
      <h5>Sabor: {props.nombre || "Sin definir"}</h5>
      <p>Cantidad: {props.stock || 0}</p>
      <p>Precio: ${props.precio || 0.0}</p>
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
