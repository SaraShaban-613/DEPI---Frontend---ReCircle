// src/components/Login.jsx
import { Link } from "react-router-dom";
import React from "react";
import "./Login.css";       // all your “login-page” styles live here
import logo from "../assets/logo.png";

export default function Login() {
    return (
        <div className="main-container">
            <div className="login-card">
                <h1>ReCircle</h1>
                <p className="login-subtitle">Turn Surplus into Support</p>

                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email or mobile</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button type="submit" className="login-btn-main">
                        Log In
                    </button>
                </form>

                <div className="divider">
                    <div className="divider-line" />
                    <div className="divider-text">or</div>
                    <div className="divider-line" />
                </div>

                <button className="google-btn">
                    <i className="fab fa-google" />
                    Continue with Google
                </button>

                <div className="signup-link">
                    <p className="fw-semibold">Don't have an account? &nbsp;&nbsp;<Link to="/signup" style={{ color: "#738a79" }}> Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
}