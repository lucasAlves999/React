import React, { useState } from 'react';
import { api } from '../services/api';
import { auth } from '../services/auth';

const CadastroProduto = () => {
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    preco: '',
    quantidade: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/products', formData, auth.getToken());
      alert('Produto cadastrado com sucesso!');
    } catch (error) {
      alert('Erro ao cadastrar produto: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Cadastro de Produto</h2>
      <form onSubmit={handleSubmit}>
        <input name="nome" placeholder="Nome" onChange={handleChange} required />
        <input name="descricao" placeholder="Descrição" onChange={handleChange} required />
        <input name="preco" type="number" placeholder="Preço" onChange={handleChange} required />
        <input name="quantidade" type="number" placeholder="Quantidade" onChange={handleChange} required />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroProduto;