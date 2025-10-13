import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ImpactOverview from './components/ImpactOverview'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/impact' element={<ImpactOverview />} />
      </Routes> */}

      <ImpactOverview />
      <Footer />
    </>
  )
}

export default App;
