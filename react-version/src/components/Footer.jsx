import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-logo">
                        <img src={logo} alt="ReCircle Logo"></img>
                    </div>
                    <div className="footer-brand">
                        <div className="footer-brand-name fs-2">ReCircle</div>
                        <div className="footer-tagline">Turn Surplus into Support</div>
                    </div>
                </div>

                <p className="footer-mission">Building stronger communities by reducing waste and connecting those who have with those who need.</p>

                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="#">About Us</Link></li>
                            <li><Link to="#">How it Works</Link></li>
                            <li><Link to="#">Impact Stories</Link></li>
                            <li><Link to="#">Careers</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Support</h4>
                        <ul>
                            <li><Link to="#">Help Center</Link></li>
                            <li><Link to="#">Safety Guidelines</Link></li>
                            <li><Link to="#">Contact Us</Link></li>
                            <li><Link to="#">Community Standards</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Legal</h4>
                        <ul>
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Terms of Service</Link></li>
                            <li><Link to="#">Cookie Policy</Link></li>
                            <li><Link to="#">Accessibility</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="newsletter">
                    <h4>Stay Updated</h4>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Enter Your Email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <span>© 2024 ReCircle. All rights reserved.</span>
                        <span>Built with ❤️ for our community.</span>
                    </div>

                    <div className="footer-social">
                        <Link to="#" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" stroke-width="2">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                        </Link>
                        <Link to="#" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" stroke-width="2">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                        </Link>
                        <Link to="#" aria-label="Twitter">
                            <svg viewBox="0 0 24 24" stroke-width="2">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                        </Link>
                    </div>

                    <div className="footer-credits">Made with sustainability in mind</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;