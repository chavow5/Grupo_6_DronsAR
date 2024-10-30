// dashboard/src/components/LastCreatedProduct.jsx
import React, { useEffect, useState } from 'react';
import { fetchLastCreatedProduct } from '../apiService';

function LastCreatedProduct() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchLastCreatedProduct().then(data => setProduct(data));
  }, []);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h3>Last Created Product</h3>
      <p>Name: {product.name}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

export default LastCreatedProduct;
