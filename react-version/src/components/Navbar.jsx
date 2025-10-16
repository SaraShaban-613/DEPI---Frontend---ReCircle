import Recircle_Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className="d-flex py-2 align-items-center gap-5 px-5">
            <div className="logo-section d-flex align-items-center gap-2">
                <div className="logo">
                    <img src={Recircle_Logo} />
                </div>
                <div className="brand-name">ReCircle</div>
            </div>

            <div className="search-container">
                <input type="text" className="search-bar rounded-3 px-3 py-2 text-white" placeholder="Search" />
            </div>

            <nav className="d-flex align-items-center gap-4">
                <div className="links d-flex align-items-center gap-5">
                    <Link to="/">Home</Link>
                    <Link to="/about">How it works</Link>
                    <Link to="/community">Community</Link>
                    <Link to="/impact">Impact Tracker</Link>
                    <Link to="/signup" className="login-btn py-2 px-3 rounded-3">Login&nbsp;/&nbsp;Signup</Link>
                </div>
                <span className="notification-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
                        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 01-3.46 0" />
                    </svg>
                </span>
                <span className="profile-icon">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                </span>
            </nav>
        </header>
    );
}

export default Navbar;