import Inicio from './components/Inicio';
import React, { useState } from 'react';
import CrearEncuesta from './components/CrearEncuesta';
import Encuesta from './components/Encuesta';
import encuestas from './data/encuestas.json';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  const [listaEncuestas, setListaEncuestas] =
  useState(encuestas);
  const agregarEncuesta = (nuevaEncuesta) => {
  nuevaEncuesta.id = listaEncuestas.length + 1
  setListaEncuestas([...listaEncuestas, nuevaEncuesta]);
  };
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio listaEncuestas={listaEncuestas} />} />
      <Route path="/crear-encuesta" element={<CrearEncuesta agregarEncuesta={agregarEncuesta}/>} />
      <Route path='/encuesta/:id' element={<Encuesta listaEncuestas={listaEncuestas} />} />
      <Route path="*" element={<NotFound />}/>
</Routes>
</BrowserRouter>
  );
  
}

export default App;
