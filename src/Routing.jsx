import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Monuments from './pages/Monuments/Monuments';
import MonumentsDetails from './pages/MonumentsDetails/MonumentDetails';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/monuments' element={<Monuments />}/>
        <Route path='/detail/:id' element={<MonumentsDetails />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App