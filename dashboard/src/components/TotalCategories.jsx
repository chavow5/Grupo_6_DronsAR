// src/components/TotalCategories.jsx
import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../apiService';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/TotalCategories.css';


function TotalCategories() {
    const [totalCategories, setTotalCategories] = useState(0);

    useEffect(() => {
        fetchCategories()
            .then(data => setTotalCategories(data.length))
            .catch(error => console.error("Error fetching categories:", error));
    }, []);

    return (
        <div className="container my-3">
            <div className="row justify-content-center">
                <div className="col-md-4 col-sm-6">
                    <div className="card text-white bg-success shadow-sm">
                        <div className="card-body d-flex flex-column align-items-center">
                            <h5 className="card-title mb-3">Total de Categorías</h5>
                            <h2 className="display-4 fw-bold">{totalCategories}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TotalCategories;
