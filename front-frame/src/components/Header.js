import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../services/auth';

const Header = () => {
  const handleLogout = () => {
    auth.removeToken();
    window.location.href = '/login';
  };

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        {!auth.isAuthenticated() ? (
          <>
            <Link to="/cadastro">Cadastro</Link>
            <Link to="/login">Login</Link>
            <Link to="/ativar">Ativar Conta</Link>
          </>
        ) : (
          <>
            <Link to="/cadastro-produto">Cadastrar Produto</Link>
            <Link to="/produtos">Listar Produtos</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;