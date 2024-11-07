import React, { useEffect, useState } from 'react';
import { fetchLastCreatedProduct } from '../apiService';  // Importar la función fetchLastCreatedProduct

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
    return <div>Cargando...</div>;  // Muestra cargando mientras se obtiene el producto
  }

  if (error) {
    return <div>{error}</div>;  // Muestra el error si hay uno
  }

  if (!lastProduct) {
    return <div>No hay productos disponibles.</div>;  // Si no se encuentra el producto
  }

  return (
    <div>
      <h2>Último Producto Creado</h2>
      <h3>{lastProduct.nombre}</h3> {/* Muestra el nombre del último producto */}
      <p><strong>Marca:</strong> {lastProduct.marca}</p>
      <p><strong>Modelo:</strong> {lastProduct.modelo}</p>
      <p><strong>Descripción:</strong> {lastProduct.descripcion}</p>
      <p><strong>Precio:</strong> ${lastProduct.precio}</p>
      <img 
        src={`/img/productsImg/${lastProduct.image}`} 
        alt={lastProduct.nombre} 
        style={{ width: '200px', height: 'auto' }} 
      />
    </div>
  );
};

export default LastCreatedProduct;
