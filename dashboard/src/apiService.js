// dashboard/src/apiService.js

// dashboard/src/apiService.js

const API_BASE_URL = 'http://localhost:3000/api'; // Apunta al backend

// Función para obtener totales de productos, usuarios, y categorías
export async function fetchTotals() {
  const response = await fetch(`${API_BASE_URL}/totals`);
  return response.json();
}

// Función para obtener el último producto creado
export async function fetchLastCreatedProduct() {
  const response = await fetch(`${API_BASE_URL}/products/latest`);
  return response.json();
}

// Función para obtener el total de categorías
export async function fetchCategoriesWithProducts() {
  const response = await fetch(`${API_BASE_URL}/categories`);
  return response.json();
}

// Función para obtener la lista de productos
export async function fetchProductsList() {
  const response = await fetch(`${API_BASE_URL}/products`);
  return response.json();
}



// Función para obtener la lista de productos y contar el total
export async function fetchProducts() {
  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) {
    throw new Error(`Error ${response.status}`);
  }
  return response.json();
}

// Función para obtener la lista de usuarios
export async function fetchUsers() {  // Agregada
  const response = await fetch(`${API_BASE_URL}/users`);
  return response.json();
}
