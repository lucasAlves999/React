import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { auth } from '../services/auth';

const UpdateProduto = ({ productId }) => {
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    preco: '',
    quantidade: '',
  });

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await api.get(/products/${productId}, auth.getToken());
        setFormData({
          nome: response.nome,
          descricao: response.descricao,
          preco: response.preco,
          quantidade: response.quantidade,
        });
      } catch (error) {
        alert('Erro ao carregar produto: ' + error.message);
      }
    };
    fetchProduto();
  }, [productId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(/products/${productId}, formData, auth.getToken());
      alert('Produto atualizado com sucesso!');
    } catch (error) {
      alert('Erro ao atualizar produto: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Atualizar Produto</h2>
      <form onSubmit={handleSubmit}>
        <input name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
        <input name="descricao" placeholder="Descrição" value={formData.descricao} onChange={handleChange} required />
        <input name="preco" type="number" placeholder="Preço" value={formData.preco} onChange={handleChange} required />
        <input name="quantidade" type="number" placeholder="Quantidade" value={formData.quantidade} onChange={handleChange} required />
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
};

export default UpdateProduto;