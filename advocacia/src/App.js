import './App.css';

import Header from './componentes/Header';
import Home from './componentes/Home';
import Footer from './componentes/Footer';
import DetalheServico from './componentes/Servicos/DetalheServico';
import Cadastrar from './componentes/Servicos/Cadastrar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cadastrarServico' element={<Cadastrar/>}/>
        <Route path='/listarServico/id' element={<DetalheServico/>}/>
      </Routes>
      <Footer /> 
    </>
    </BrowserRouter>
    
    
  );
}

export default App;
