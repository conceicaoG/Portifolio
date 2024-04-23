import React from 'react'; // Mantenha apenas esta linha

import Header from './components/Header/Header.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./page/inicio/Inicio";
import Sobre from "./page/sobre/Sobre";
import Projetos from "./page/projetos/Projetos";
import { GlobalStyle } from './components/Header/header_styled.jsx';

export default function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/projetos" element={<Projetos/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}