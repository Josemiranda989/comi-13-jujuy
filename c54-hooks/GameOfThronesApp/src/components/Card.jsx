/* eslint-disable react/prop-types */
export default function Card(props) {
  return (
    <article className="card">
      <h4>{props.nombre}</h4>
      <h5>{props.familia}</h5>
      <img src={props.imagen} alt="Imagen del personaje" />
    </article>
  );
}
