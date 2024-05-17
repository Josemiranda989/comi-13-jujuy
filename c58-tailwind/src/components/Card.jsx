/* eslint-disable react/prop-types */
export default function Card({ product }) {
  return (
    <li className="w-44 bg-slate-500 p-3 text-center">
      <h2 className="font-bold">{product.title}</h2>
      <img
        src={product.images[0]}
        className="w-32 h-30 mx-auto"
        alt="product-image"
      />
      <p>{product.price}</p>
    </li>
  );
}
