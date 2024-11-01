// src/Dashboard.jsx

import React from 'react';
import { ProSidebarProvider, Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importa tus componentes
import LastCreatedProduct from './components/LastCreatedProduct';
import TotalProducts from './components/TotalProducts';
import TotalCategories from './components/TotalCategories';
import TotalUsers from './components/TotalUsers';
import ProductsList from './components/ProductsList';
import CategoriesWithProducts from './components/CategoriesWithProducts';

function Dashboard() {
  return (
    <Router>
      <ProSidebarProvider>
        <Sidebar>
          <Menu>
            <MenuItem component={<Link to="/last-product" />}>Último Producto</MenuItem>
            <MenuItem component={<Link to="/total-products" />}>Total de Productos</MenuItem>
            <MenuItem component={<Link to="/total-categories" />}>Total de Categorías</MenuItem>
            <MenuItem component={<Link to="/total-users" />}>Total de Usuarios</MenuItem>
            <MenuItem component={<Link to="/products-list" />}>Lista de Productos</MenuItem>
            <MenuItem component={<Link to="/categories" />}>Categorías</MenuItem>
          </Menu>
        </Sidebar>
        
        {/* Define las rutas para cada componente */}
        <main style={{ marginLeft: '250px', padding: '20px' }}>
          <Routes>
            <Route path="/last-product" element={<LastCreatedProduct />} />
            <Route path="/total-products" element={<TotalProducts />} />
            <Route path="/total-categories" element={<TotalCategories />} />
            <Route path="/total-users" element={<TotalUsers />} />
            <Route path="/products-list" element={<ProductsList />} />
            <Route path="/categories" element={<CategoriesWithProducts />} />
          </Routes>
        </main>
      </ProSidebarProvider>
    </Router>
  );
}

export default Dashboard;
