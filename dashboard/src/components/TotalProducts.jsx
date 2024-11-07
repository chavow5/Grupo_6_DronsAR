// src/components/TotalProducts.jsx

import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../apiService';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/TotalProducts.css';


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
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-md-4 col-sm-6">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary mb-3">Total de Productos</h5>
              <p className="card-text display-4 fw-bold">{totalProducts}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalProducts;
