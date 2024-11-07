// src/components/TotalUsers.jsx

import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../apiService'; // Confirma que esté bien importado
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/TotalUsers.css';


function TotalUsers() {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    fetchUsers()
      .then(data => setTotalUsers(data.length)) // Ajusta según la estructura de los datos de usuario
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-md-4 col-sm-6">
          <div className="card text-center text-white bg-info shadow-sm">
            <div className="card-body d-flex flex-column align-items-center">
              <h5 className="card-title mb-3">Total de Usuarios</h5>
              <h2 className="display-4 fw-bold">{totalUsers}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalUsers;
