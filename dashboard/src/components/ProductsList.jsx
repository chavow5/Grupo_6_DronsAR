// dashboard/src/components/ProductsList.jsx
import React, { useEffect, useState } from 'react';
import { fetchProductsList } from '../apiService';

function ProductsList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProductsList()
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching products list:", error));
    }, []);

    return (
        <div>
            <h2>Listado de Productos</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductsList;
