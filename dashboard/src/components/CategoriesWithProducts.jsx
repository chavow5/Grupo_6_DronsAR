import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../apiService'; // Confirma que esté bien importado

function CategoriesWithProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h3>Products by Category</h3>
      {/* Renderizado de productos */}
    </div>
  );
}

export default CategoriesWithProducts;
