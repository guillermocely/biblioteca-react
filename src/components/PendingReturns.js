import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PendingReturns = () => {
  const [pendingBooks, setPendingBooks] = useState([]);

  useEffect(() => {
    const fetchPendingBooks = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await axios.get(
          `http://localhost:3001/api/books/pending?usuario_id=${userId}`
        );
        setPendingBooks(response.data);
      } catch (error) {
        console.error('Error al obtener libros pendientes:', error);
      }
    };
    fetchPendingBooks();
  }, []);

  return (
    <div>
      <h2>Libros Pendientes</h2>
      <ul>
        {pendingBooks.map(book => (
          <li key={book.id}>
            <strong>Título:</strong> {book.titulo} <br />
            <strong>Fecha de préstamo:</strong> {book.fecha_prestamo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PendingReturns;