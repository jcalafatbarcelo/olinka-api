//import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from './components/Inicio';
import Menu from './components/Menu';
import OlinkaMod from './components/OlinkaMod';
import OlinkaServer from "./components/OlinkaServer";
import ListadoObjetos from "./components/ListadoObjetos";

import './App.css';

export default function App ()
{
  
  return (
    <div className='container'>
      <Router>
        <Menu></Menu>
        <Routes>
            <Route exact path='/life-is-feudal'  >
              <Route exact path='/life-is-feudal/nuestro-servidor' element={<OlinkaServer />}></Route>
            <Route exact path='/life-is-feudal/olinka-mod' element={<OlinkaMod />}></Route>
            <Route path='/life-is-feudal/olinka-mod/:filtro' element={<ListadoObjetos />} />
              <Route exact path='/life-is-feudal/' element={<OlinkaServer />}></Route>
            </Route>
            
            <Route exact path='/' element={<Inicio />}></Route>
        </Routes>
      </Router>
    </div>
  );
}