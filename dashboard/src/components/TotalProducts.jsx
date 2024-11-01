// src/components/TotalProducts.jsx

import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../apiService';

function TotalProducts() {
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    fetchProducts()
      .then(data => {
        setTotalProducts(data.length); // Cuenta la cantidad de productos
      })
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="card text-center shadow-sm my-3" style={{ maxWidth: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title text-primary">Total de Productos</h5>
        <p className="card-text display-4 fw-bold">
          {totalProducts}
        </p>
      </div>
    </div>
  );
}

export default TotalProducts;
