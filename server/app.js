const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const booksRoutes = require('./routes/books');
const app = express();

app.use(cors());
app.use(express.json());

// Rutas de autenticación
app.use('/auth', authRoutes);

// Rutas de libros
app.use('/books', booksRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});