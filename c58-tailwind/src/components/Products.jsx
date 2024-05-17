import { useState, useEffect } from "react";
import Card from "./Card";

const limit = 9;
// const skip = 20;

export default function Products() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products/?limit=${limit}&skip=${
        currentPage * limit
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.log(error);
        setErrors(error);
      })
      .finally(() => setLoading(false));
  }, [currentPage]);

  const pagAnterior = () => {
    setCurrentPage(currentPage - 1);
  };

  const pagSiguiente = () => {
    setCurrentPage(currentPage + 1);
  };

  if (loading) return <p className="text-4xl text-center p-20">Loading...</p>;
  if (errors) return <p>{errors.message}</p>;
  if (products)
    return (
      <div className="mt-2">
        <h1 className="text-4xl text-center font-bold text-gray-800">
          Products
        </h1>

        <div className="flex justify-center items-center">
          <button
            className="p-2 bg-slate-700 text-slate-400 m-3"
            onClick={pagAnterior}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          <p>{currentPage}</p>
          <button
            className="p-2 bg-slate-700 text-slate-400"
            onClick={pagSiguiente}
            disabled={products.length < limit}
          >
            Siguiente
          </button>
        </div>

        <ul className="flex flex-wrap gap-1 justify-center">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </ul>
      </div>
    );
}
