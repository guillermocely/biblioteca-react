import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import './Register.css';

const Register = () => {
  const [nombres, setNombres] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [username, setUsername] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', {
        nombres,
        correo,
        telefono,
        username,
        contrasena
      });
      navigate('/login');
    } catch (error) {
      alert('Error al registrar');
    }
  };

  return (
    <div 
      className="login-container"
      style={{
        backgroundImage: "url('/images/fondo2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="register-card">
        <h2>Regístrate</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre(s)</label>
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Correo electrónico</label>
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Teléfono</label>
            <input
              type="tel"
              placeholder="Tu teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Usuario</label>
            <input
              type="text"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="Ingresa una contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="register-btn">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;