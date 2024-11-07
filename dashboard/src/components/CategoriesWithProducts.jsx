import React, { useEffect, useState } from 'react';
import { fetchCategoriesWithProducts } from '../apiService';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CategoriesWithProducts.css';

function CategoriesWithProducts() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await fetchCategoriesWithProducts();
        setCategories(data);
      } catch (err) {
        setError('No se pudieron cargar las categorías.');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (categories.length === 0) {
    return <div>No hay categorías disponibles.</div>;
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
