import React, { useState } from 'react';
import axios from '../services/api';
import './Login.css';

const Login = () => {
  const [identificador, setIdentificador] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', {
        identificador,
        contrasena
      });
      localStorage.setItem('user', JSON.stringify(response.data));
      window.location.href = '/dashboard';
    } catch (error) {
      alert('Credenciales incorrectas');
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
      <div className="login-card">
        <h2>Iniciar Sesión</h2>
        <img
          src="/images/logo1.png"
          alt="Logo Biblioteca"
          className="login-logo"
        />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Usuario/Correo</label>
            <input
              type="text"
              placeholder="Ingrese usuario o correo"
              value={identificador}
              onChange={(e) => setIdentificador(e.target.value)}
              autoComplete="username"
              required
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="Ingrese contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Ingresar
          </button>
          <p className="register-link">
            ¿No tienes cuenta? <a href="/register">Regístrate aquí</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;