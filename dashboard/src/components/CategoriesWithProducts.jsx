// dashboard/src/components/CategoriesWithProducts.jsx
import React, { useEffect, useState } from 'react';
import { fetchCategoriesWithProducts } from '../apiService';  // Importar la función existente
import 'bootstrap/dist/css/bootstrap.min.css';

function CategoriesWithProducts() {
  const [categories, setCategories] = useState([]);  // Estado para las categorías
  const [loading, setLoading] = useState(true);  // Estado para la carga
  const [error, setError] = useState(null);  // Estado para los errores

  // Efecto para obtener las categorías con el total de productos
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await fetchCategoriesWithProducts();  // Llamar a la función de apiService
        setCategories(data);  // Guardar las categorías en el estado
      } catch (err) {
        console.error('Error al obtener las categorías:', err);  // Manejo de error
        setError('No se pudieron cargar las categorías.');
      } finally {
        setLoading(false);  // Termina el estado de carga
      }
    };

    fetchCategories();  // Llamar a la función fetchCategories al cargar el componente
  }, []);  // Solo se ejecuta una vez al montar el componente

  if (loading) {
    return <div>Cargando...</div>;  // Muestra cargando mientras se obtienen las categorías
  }

  if (error) {
    return <div>{error}</div>;  // Muestra el error si hay uno
  }

  if (categories.length === 0) {
    return <div>No hay categorías disponibles.</div>;  // Si no hay categorías disponibles
  }

  return (
    <div className="container my-3">
      <h2 className="mb-4 text-center">Categorías con Total de Productos</h2>
      <div className="row">
        {categories.map(category => (
          <div className="col-md-4 mb-3" key={category.id}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{category.nombre}</h5>
                <p className="card-text"><strong>Total de productos:</strong> {category.productCount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesWithProducts;
