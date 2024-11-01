// dashboard/src/Dashboard.jsx
import React from 'react';
import TotalProducts from './components/TotalProducts';
import LastCreatedProduct from './components/LastCreatedProduct';
import CategoriesWithProducts from './components/CategoriesWithProducts';
import TotalUsers from './components/TotalUsers';
import TotalCategories from './components/TotalCategories';
import ProductsList from './components/ProductsList';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <TotalProducts />
      <LastCreatedProduct />
      <CategoriesWithProducts />
      <TotalUsers />
      <TotalCategories />
      <ProductsList />
    </div>
  );
}

export default Dashboard;
