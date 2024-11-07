// src/components/LastCreatedProduct.jsx
import React, { useEffect, useState } from 'react';
import { fetchLastCreatedProduct } from '../apiService';  // Importar la función fetchLastCreatedProduct
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa Bootstrap
import '../styles/LastCreatedProduct.css';

const LastCreatedProduct = () => {
  const [lastProduct, setLastProduct] = useState(null);  // Estado para el último producto
  const [loading, setLoading] = useState(true);  // Estado para la carga
  const [error, setError] = useState(null);  // Estado para los errores

  // Efecto para obtener el último producto
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetchLastCreatedProduct();  // Llamar la función de apiService
        setLastProduct(data);  // Guardar el último producto en el estado
      } catch (err) {
        console.error('Error al obtener el último producto:', err);  // Manejo de error
        setError('No se pudo cargar el último producto.');
      } finally {
        setLoading(false);  // Termina el estado de carga
      }
    };

    fetchProduct();  // Llamar a la función fetchProduct al cargar el componente
  }, []);  // Solo se ejecuta una vez al montar el componente

  if (loading) {
    return <div className="text-center my-5"><div className="spinner-border" role="status"><span className="visually-hidden">Cargando...</span></div></div>;  // Muestra cargando mientras se obtiene el producto
  }

  if (error) {
    return <div className="text-center my-5">{error}</div>;  // Muestra el error si hay uno
  }

  if (!lastProduct) {
    return <div className="text-center my-5">No hay productos disponibles.</div>;  // Si no se encuentra el producto
  }

  return (
    <div className="container-fluid my-1">
      <div className="row">
        {/* Columna para el contenido del producto */}
        <div className="col-md-12 col-sm-6 mb-3">
          <h2 className="text-center mb-4">Último Producto Creado</h2>
          <div className="card shadow-sm">
            <div className="image-container">
              <img
                src={`/img/productsImg/${lastProduct.image}`}
                alt={lastProduct.nombre}
                className="card-img-top"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{lastProduct.nombre}</h5>
              <p className="card-text"><strong>Marca:</strong> {lastProduct.marca}</p>
              <p className="card-text"><strong>Modelo:</strong> {lastProduct.modelo}</p>
              <p className="card-text"><strong>Descripción:</strong> {lastProduct.descripcion}</p>
              <p className="card-text"><strong>Precio:</strong> ${lastProduct.precio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastCreatedProduct;
