CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombres VARCHAR(100) NOT NULL,
  correo VARCHAR(100) UNIQUE NOT NULL,
  telefono VARCHAR(20),
  usuario VARCHAR(50) UNIQUE NOT NULL,
  contrasena VARCHAR(255) NOT NULL
);

CREATE TABLE libros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  autor VARCHAR(100),
  isbn VARCHAR(20),
  disponible BOOLEAN DEFAULT true
);

CREATE TABLE prestamos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT,
  libro_id INT,
  fecha_prestamo DATE DEFAULT CURRENT_DATE,
  fecha_devolucion DATE,
  devuelto BOOLEAN DEFAULT false,
  FOREIGN KEY (usuario_id) REFERENCES users(id),
  FOREIGN KEY (libro_id) REFERENCES libros(id)
);