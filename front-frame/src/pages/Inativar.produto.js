import React, { useState } from 'react';
import { api } from '../services/api';
import { auth } from '../services/auth';

const InativarProduto = ({ productId }) => {
  const [confirmacao, setConfirmacao] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirmacao !== 'CONFIRMAR') {
      alert('Digite "CONFIRMAR" para inativar o produto');
      return;
    }

    try {
      await api.put(/products/${productId}/inactivate, {}, auth.getToken());
      alert('Produto inativado com sucesso!');
    } catch (error) {
      alert('Erro ao inativar produto: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Inativar Produto</h2>
      <p>Digite "CONFIRMAR" para confirmar a inativação do produto ID: {productId}</p>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Digite CONFIRMAR" 
          value={confirmacao} 
          onChange={(e) => setConfirmacao(e.target.value)} 
          required 
        />
        <button type="submit">Inativar Produto</button>
      </form>
    </div>
  );
};

export default InativarProduto;