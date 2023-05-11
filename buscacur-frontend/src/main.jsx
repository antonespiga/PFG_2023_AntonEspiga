import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'

import App from './App'
import Header from './components/Header'
//import Buscador from './components/Buscador'
//import BarraSelectores from './components/BarraSelectores'
import Home from './pages/Home'
import Footer from './components/Footer'
import Consultas from './pages/Consultas'
import Login from './pages/Login'
import Registro from './components/Registro'
import Admin from './pages/Admin'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      
      <Routes>
        <Route exact path = '/' element = { <Home/> } /> 
        <Route exact path = '/login' element = { <Login/> } />
        <Route exact path = '/registro' element = { <Registro/> } />
        <Route exact path='/cursos/tipo' element={ <Consultas/>} />
        <Route exact path = '/consultas' element = { <Consultas/>}/>
        <Route exact path = '/admin' element = { <Admin />}/>
      </Routes>
    




    </BrowserRouter>




  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('footer')).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
)
