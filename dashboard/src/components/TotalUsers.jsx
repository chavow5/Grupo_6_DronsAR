import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../apiService'; // Confirma que esté bien importado

function TotalUsers() {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    fetchUsers().then(data => setTotalUsers(data.length)); // Ajusta según la estructura de los datos de usuario
  }, []);

  return (
    <div>
      <h3>Total Users</h3>
      <p>{totalUsers}</p>
    </div>
  );
}

export default TotalUsers;
