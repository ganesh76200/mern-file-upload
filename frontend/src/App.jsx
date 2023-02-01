import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Multiimage from './pages/Multiimage'
import Navbar from './pages/Navbar'
import SIngleimage from './pages/SIngleimage'
import FormUpload from './pages/FormUplod'

const App = () => {
  return<BrowserRouter>
  <Navbar />
  <Routes>
    <Route  path='/' element={<h1>Home Page</h1>} />
    <Route  path='/multi-image-upload' element={<Multiimage />} />
    <Route  path='/single-image-upload' element={<SIngleimage />} />
    <Route  path='/form-upload' element={<FormUpload />} />
  </Routes>
  
  </BrowserRouter>
}

export default App