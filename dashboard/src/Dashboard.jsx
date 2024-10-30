// dashboard/src/Dashboard.jsx
import React from 'react';
import TotalProducts from './components/TotalProducts';
import LastCreatedProduct from './components/LastCreatedProduct';
import CategoriesWithProducts from './components/CategoriesWithProducts';
import TotalUsers from './components/TotalUsers';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <TotalProducts />
      <LastCreatedProduct />
      <CategoriesWithProducts />
      <TotalUsers />
    </div>
  );
}

export default Dashboard;
