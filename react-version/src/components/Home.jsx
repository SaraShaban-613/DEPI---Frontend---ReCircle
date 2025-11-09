// src/components/Home/Home.jsx
import React from 'react';
import './Home.css';
import logo from "../assets/logo.png";

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="logo-circle">
                    <img src={logo} alt="ReCircle Logo" />
                </div>
                <div className="hero-content">
                    <h1>Turn Surplus into Support</h1>
                    <p>
                        Join ReCircle's community-driven platform that connects donors,
                        volunteers, and recipients to reduce waste and help those in need.
                    </p>
                    <div className="info-cards">
                        <div className="card">
                            <h3>Our Mission</h3>
                            <p>
                                "ReCircle connects donors, recipients, and volunteers to minimize
                                waste, support vulnerable communities, and track real impact
                                through a smart, user-friendly platform."
                            </p>
                        </div>
                        <div className="card">
                            <h3>Our Vision</h3>
                            <p>
                                "A world where surplus becomes opportunity and no resource goes
                                to waste — where generosity and technology unite to build
                                sustainable, caring communities."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24" strokeWidth="1.5">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </div>
                        <h3>Reduce Waste</h3>
                        <p className="tagline">"Give surplus a second life"</p>
                        <p>
                            Donate extra food and clothing instead of letting them go to
                            waste. Every small act helps protect our planet.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24" strokeWidth="1.5">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </div>
                        <h3>Support Communities</h3>
                        <p className="tagline">"Your kindness, their hope"</p>
                        <p>
                            Connect with nearby charities, NGOs, and families in need. Turn
                            your generosity into real change.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24" strokeWidth="1.5">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <path d="M16 2v4M8 2v4M3 10h18" />
                                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
                            </svg>
                        </div>
                        <h3>Track Your Impact</h3>
                        <p className="tagline">"See the difference you make"</p>
                        <p>
                            Follow your donations from pickup to delivery and measure your
                            impact with our community-driven tracker.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}