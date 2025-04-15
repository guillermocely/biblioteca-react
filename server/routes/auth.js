const express = require('express');
const bcrypt = require('bcryptjs');
const pool = require('../config/db');
const router = express.Router();

// Ruta de registro
router.post('/register', async (req, res) => {
  try {
    const { nombres, correo, telefono, username, contrasena } = req.body;
    const hashedPassword = await bcrypt.hash(contrasena, 10);
    await pool.query(
      'INSERT INTO users SET ?',
      {
        nombres,
        correo,
        telefono,
        username,
        contrasena: hashedPassword
      }
    );
    res.status(201).json({ mensaje: 'Usuario registrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta de login
router.post('/login', async (req, res) => {
  try {
    const { identificador, contrasena } = req.body;
    const [user] = await pool.query(
      'SELECT * FROM users WHERE correo = ? OR username = ?',
      [identificador, identificador]
    );
    if (!user[0]) return res.status(404).json({ error: 'Usuario no encontrado' });
    const validPassword = await bcrypt.compare(contrasena, user[0].contrasena);
    if (!validPassword) return res.status(401).json({ error: 'Contraseña incorrecta' });
    res.json({
      id: user[0].id,
      nombres: user[0].nombres,
      correo: user[0].correo
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;