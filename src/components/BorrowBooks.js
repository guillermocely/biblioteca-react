import React, { useState } from 'react';
import axios from 'axios';

const BorrowBooks = () => {
  const [bookId, setBookId] = useState('');

  const handleBorrow = async () => {
    try {
      await axios.post('http://localhost:3001/api/books/borrow', {
        libro_id: bookId,
        usuario_id: localStorage.getItem('userId') // Asegúrate de guardar el ID del usuario al iniciar sesión
      });
      alert('Libro prestado exitosamente');
    } catch (error) {
      alert('Error al prestar el libro');
    }
  };

  return (
    <div>
      <h2>Prestar Libro</h2>
      <input
        type="text"
        placeholder="ID del libro"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
      />
      <button onClick={handleBorrow}>Prestar</button>
    </div>
  );
};

export default BorrowBooks;