import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../apiService';

function TotalProducts() {
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    fetchProducts().then(data => {
      // Suponiendo que 'data' es un array de productos
      setTotalProducts(data.length); // Cuenta la cantidad de productos en la respuesta
    });
  }, []);

  return (
    <div>
      <h3>Total Products</h3>
      <p>{totalProducts}</p>
    </div>
  );
}

export default TotalProducts;
