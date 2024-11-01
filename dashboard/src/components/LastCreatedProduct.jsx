// dashboard/src/components/LastCreatedProduct.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LastCreatedProduct = () => {
  const [lastProduct, setLastProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLastProduct = async () => {
      try {
        const response = await axios.get('/api/products/products/latest'); // Asegúrate de que esta ruta sea correcta
        setLastProduct(response.data);
      } catch (err) {
        console.error('Error al obtener el último producto:', err);
        setError('No se pudo cargar el último producto.');
      } finally {
        setLoading(false);
      }
    };

    fetchLastProduct();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!lastProduct) {
    return <div>No hay productos disponibles.</div>;
  }

  return (
    <div>
      <h2>Último Producto Creado</h2>
      <h3>{lastProduct.nombre}</h3> {/* Solo muestra el nombre del último producto */}
    </div>
  );
};

export default LastCreatedProduct;
