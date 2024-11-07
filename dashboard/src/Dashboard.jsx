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
import './Dashboard.css';

function Dashboard() {
  return (
    <Router>
      <ProSidebarProvider>
        <div className="dashboard-container">
          <Sidebar className="sidebar">
            <Menu>
              <MenuItem className="menu-item" component={<Link to="/last-product" />}>Último Producto</MenuItem>
              <MenuItem className="menu-item" component={<Link to="/total-products" />}>Total de Productos</MenuItem>
              <MenuItem className="menu-item" component={<Link to="/total-categories" />}>Total de Categorías</MenuItem>
              <MenuItem className="menu-item" component={<Link to="/total-users" />}>Total de Usuarios</MenuItem>
              <MenuItem className="menu-item" component={<Link to="/products-list" />}>Lista de Productos</MenuItem>
              <MenuItem className="menu-item" component={<Link to="/categories" />}>Categorías</MenuItem>
            </Menu>
          </Sidebar>
          
          {/* Contenido principal que se ajusta al menú */}
          <main className="main-content">
            <Routes>
              <Route path="/last-product" element={<LastCreatedProduct />} />
              <Route path="/total-products" element={<TotalProducts />} />
              <Route path="/total-categories" element={<TotalCategories />} />
              <Route path="/total-users" element={<TotalUsers />} />
              <Route path="/products-list" element={<ProductsList />} />
              <Route path="/categories" element={<CategoriesWithProducts />} />
            </Routes>
          </main>
        </div>
      </ProSidebarProvider>
    </Router>
  );
}

export default Dashboard;
