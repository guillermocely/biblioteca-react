const express = require('express');
const pool = require('../config/db');
const router = express.Router();

// Ruta para obtener libros disponibles
router.get('/books', async (req, res) => {
  try {
    const [books] = await pool.query('SELECT * FROM libros WHERE disponible = true');
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para prestar un libro
router.post('/borrow', async (req, res) => {
  try {
    const { libro_id, usuario_id } = req.body;
    await pool.query('UPDATE libros SET disponible = false WHERE id = ?', [libro_id]);
    await pool.query(
      'INSERT INTO prestamos (libro_id, usuario_id) VALUES (?, ?)',
      [libro_id, usuario_id]
    );
    res.json({ mensaje: 'Libro prestado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para libros pendientes de devolución
router.get('/pending', async (req, res) => {
  const { usuario_id } = req.query;
  try {
    const [prestamos] = await pool.query(
      'SELECT libros.* FROM prestamos JOIN libros ON prestamos.libro_id = libros.id WHERE usuario_id = ? AND devuelto = false',
      [usuario_id]
    );
    res.json(prestamos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;