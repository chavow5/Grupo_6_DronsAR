// src/components/TotalCategories.jsx
import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../apiService';

function TotalCategories() {
    const [totalCategories, setTotalCategories] = useState(0);

    useEffect(() => {
        fetchCategories()
            .then(data => setTotalCategories(data.length))
            .catch(error => console.error("Error fetching categories:", error));
    }, []);

    return <div>Total de categorías: {totalCategories}</div>;
}

export default TotalCategories;
