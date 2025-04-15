import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Bienvenido a la Biblioteca</h1>
      <nav>
        <Link to="/books">Ver Libros</Link>
        <Link to="/borrow">Prestar Libro</Link>
        <Link to="/pending">Libros Pendientes</Link>
      </nav>
    </div>
  );
};

export default Dashboard;