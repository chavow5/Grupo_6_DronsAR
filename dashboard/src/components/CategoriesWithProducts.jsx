// dashboard/src/components/CategoriesWithProducts.jsx
import React, { useEffect, useState } from 'react';
import { fetchCategoriesWithProducts } from '../apiService';

function CategoriesWithProducts() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategoriesWithProducts()
            .then(data => setCategories(data))
            .catch(error => console.error("Error fetching categories with products:", error));
    }, []);

    return (
        <div>
            <h2>Categorías con Total de Productos</h2>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>
                        {category.name}: {category.totalProducts} productos
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoriesWithProducts;
