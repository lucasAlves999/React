import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { auth } from '../services/auth';

const UpdateUser = ({ userId }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(/users/${userId}, auth.getToken());
        setFormData({
          nome: response.nome,
          email: response.email,
        });
      } catch (error) {
        alert('Erro ao carregar dados do usuário: ' + error.message);
      }
    };
    fetchUser();
  }, [userId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(/users/${userId}, formData, auth.getToken());
      alert('Dados atualizados com sucesso!');
    } catch (error) {
      alert('Erro ao atualizar: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Atualizar Dados</h2>
      <form onSubmit={handleSubmit}>
        <input name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
};

export default UpdateUser;