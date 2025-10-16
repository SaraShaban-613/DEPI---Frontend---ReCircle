import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ImpactOverview from './components/ImpactOverview'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HowItWorks from './components/HowItWorks'
import SignUp from './components/SignUp'
import Community from './components/Community'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<HowItWorks />} />
        <Route path='/community' element={<Community />} />
        <Route path='/impact' element={<ImpactOverview />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      {/* <Dashboard /> */}
      <Footer />
    </>
  )
}

export default App;
