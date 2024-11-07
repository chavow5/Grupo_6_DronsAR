import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../apiService';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProductsList.css';  // Importa el CSS para el listado de productos

function ProductsList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts()
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching products list:", error));
    }, []);

    return (
        <div className="container my-3">
            <h2 className="mb-4 text-center">Listado de Productos</h2>
            <div className="row">
                {products.map(product => (
                    <div className="col-md-4 col-sm-6 mb-3" key={product.id}>
                        <div className="card shadow-sm h-100">
                            {product.image && (
                                <img src={`/img/productsImg/${product.image}`} className="card-img-top" alt={product.nombre} />
                            )}
                            <div className="card-body">
                                <h5 className="card-title">{product.nombre}</h5>
                                <p className="card-text"><strong>Marca:</strong> {product.marca}</p>
                                <p className="card-text"><strong>Modelo:</strong> {product.modelo}</p>
                                <p className="card-text">
                                    <strong>Precio:</strong> ${product.precio}
                                </p>
                                <p className="card-text"><strong>Descripción:</strong> {product.descripcion}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsList;
