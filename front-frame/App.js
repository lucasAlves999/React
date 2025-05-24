import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Ativar from './pages/Ativar';
import Login from './pages/Login';
import UpdateUser from './pages/UpdateUser';
import CadastroProduto from './pages/CadastroProduto';
import ListaProdutos from './pages/ListaProdutos';
import UpdateProduto from './pages/UpdateProduto';
import InativarProduto from './pages/InativarProduto';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/users" element={<Cadastro />} />
        <Route path="/ativar" element={<Ativar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/:userId" element={<UpdateUser />} />
        <Route path="/cadastro-produto" element={<CadastroProduto />} />
        <Route path="/produtos" element={<ListaProdutos />} />
        <Route path="/atualizar-produto/:productId" element={<UpdateProduto />} />
        <Route path="/inativar-produto/:productId" element={<InativarProduto />} />
      </Routes>
    </Router>
  );
}
console.log("App.js está funcionando!");

export default App;


