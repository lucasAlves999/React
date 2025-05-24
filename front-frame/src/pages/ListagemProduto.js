import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { auth } from '../services/auth';

const ListaProdutos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await api.get('/products', auth.getToken());
        setProdutos(response);
      } catch (error) {
        alert('Erro ao carregar produtos: ' + error.message);
      }
    };
    fetchProdutos();
  }, []);

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.nome}</td>
              <td>{produto.descricao}</td>
              <td>R$ {produto.preco.toFixed(2)}</td>
              <td>{produto.quantidade}</td>
              <td>{produto.ativo ? 'Ativo' : 'Inativo'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaProdutos;