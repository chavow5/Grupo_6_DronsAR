// src/components/ProductsList.jsx
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../apiService';

function ProductsList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then(data => setProducts(data));
    }, []);

    return (
        <div>
            <h4>Lista de productos:</h4>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.nombre} - ${product.precio}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProductsList;
