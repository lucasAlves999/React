import React, { useState } from 'react';
import { api } from '../services/api';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    cnpj: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/user', formData);
      alert('Cadastro realizado com sucesso! Verifique seu email para ativar sua conta.');
    } catch (error) {
      alert('Erro ao cadastrar: ' + error.message);
    }
  };

  return (
    <div className='conteiner'>
      <form onSubmit={handleSubmit}/>
        <h1>Cadastro de usuário</h1>

          <input placeholder='name' name='nome' type='text' onChange={handleChange} required></input>

          <input placeholder='email' name='email' type='email' onChange={handleChange} required></input>

          <input placeholder='password' name='password' type='password' onChange={handleChange} required></input>

          <input placeholder='cnpj' name='cnpj' type='text' onChange={handleChange} required></input>

          <input placeholder='phone' name='phone' type='tel' onChange={handleChange} required></input>

          <button type='submit'>Cadastrar</button>
    </div>
      
  )
    
};

export default Cadastro;