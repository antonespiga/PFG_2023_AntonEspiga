import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from './components/Header'
import Buscador from './components/Buscador'
import Selectores from './components/Selectores'
import Home from './components/Home'
import Footer from './components/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Buscador/>
    <Selectores/>
    <Home/>
    <Footer/>
  </React.StrictMode>,
)
