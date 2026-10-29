import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

//pages
import Main from './pages/Main'
import ProdutosDetalhes from './pages/ProdutosDetalhes'
import Header from './components/Header'
import Categoria from './pages/Categoria'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/categoria/:nome' element={<Categoria/>}/>
        <Route path='/products/:id' element={<ProdutosDetalhes/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
