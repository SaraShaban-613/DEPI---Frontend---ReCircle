import Navbar from './components/Navbar'
import Home from './components/Home'
import ImpactOverview from './components/ImpactOverview'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HowItWorks from './components/HowItWorks'
import SignUp from './components/SignUp'
import Login from "./components/Login";
import CommunityStories from "./components/Communitystories.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";
import MainDashboard from './components/MainDashboard.jsx'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<HowItWorks />} />
        <Route path="/community" element={<CommunityStories />} />
        <Route path="/impact" element={<ImpactOverview />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/mainDashboard" element={<MainDashboard />} />
        </Route>
      </Routes>

      <Footer />
    </>
  )
}

export default App;
