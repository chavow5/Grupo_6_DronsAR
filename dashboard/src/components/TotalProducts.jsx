// dashboard/src/components/TotalProducts.jsx
import React, { useEffect, useState } from 'react';
import { fetchTotals } from '../apiService';

function TotalProducts() {
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    fetchTotals().then(data => setTotalProducts(data.products));
  }, []);

  return (
    <div>
      <h3>Total Products</h3>
      <p>{totalProducts}</p>
    </div>
  );
}

export default TotalProducts;
