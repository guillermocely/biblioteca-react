import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error al obtener libros:', error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Libros Disponibles</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>Título:</strong> {book.titulo} <br />
            <strong>Autor:</strong> {book.autor} <br />
            <strong>ISBN:</strong> {book.isbn}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;