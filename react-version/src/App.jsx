import Navbar from './components/Navbar'
import Home from './components/Home'
import ImpactOverview from './components/ImpactOverview'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HowItWorks from './components/HowItWorks'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'
import DonorDashboard from './components/DonorDashboard'
import VolunteerDashboard from './components/VolunteerDashboard'
import Login from "./components/Login";
import CommunityStories from "./components/Communitystories.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import TestLogout from "./components/Testing";

function App() {

  return (
    <>
      <Navbar />
      {/* 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<HowItWorks />} />
        <Route path='/community' element={<CommunityStories />} />
        <Route path='/impact' element={<ImpactOverview />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/donor' element={<DonorDashboard />} />
        <Route path='/volunteer' element={<VolunteerDashboard />} />
      </Routes>
      */}

      {/* <TestLogout /> Remove this after testing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<HowItWorks />} />
        <Route path="/community" element={<CommunityStories />} />
        <Route path="/impact" element={<ImpactOverview />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/donor" element={<DonorDashboard />} />
          <Route path="/volunteer" element={<VolunteerDashboard />} />
        </Route>
      </Routes>



      <Footer />
    </>
  )
}

export default App;
