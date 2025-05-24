import React, { useState } from 'react';
import { api } from '../services/api';

const Ativar = () => {
  const [email, setEmail] = useState('');
  const [codigo, setCodigo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/ativar', { email, codigo });
      alert('Conta ativada com sucesso!');
    } catch (error) {
      alert('Erro ao ativar conta: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Ativar Conta</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          placeholder="Código de ativação" 
          value={codigo} 
          onChange={(e) => setCodigo(e.target.value)} 
          required 
        />
        <button type="submit">Ativar</button>
      </form>
    </div>
  );
};

export default Ativar;