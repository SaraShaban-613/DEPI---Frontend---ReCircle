// src/components/Home/Home.jsx
import React from 'react';
import './Home.css';
import logo from "../assets/logo.png";
import { Container, Row, Col } from "react-bootstrap"; 
import 'bootstrap/dist/css/bootstrap.min.css';

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
            {/* Stats Section */}
            <Container className="text-center my-5 py-1">
            <Row
                className="justify-content-center"
                style={{
                display: "flex",
                gap: "200px", // ← this creates visible horizontal spacing
                flexWrap: "wrap", // ensures responsiveness
                }}
            >
                <Col
                xs={12}
                md={3}
                className="d-flex flex-column align-items-center"
                style={{ margin: "15px 0" }}
                >
                <i
                    className="bi bi-recycle"
                    style={{ color: "#375840", fontSize: "4.5rem", marginBottom: "1rem" }}
                ></i>
                <h3 className="fw-bold" style={{ color: "#375840", fontSize: "2.2rem" }}>
                    50K+
                </h3>
                <p className="fw-semibold" style={{ color: "#375840", fontSize: "1.2rem" }}>
                    Pounds Diverted
                </p>
                </Col>

                <Col
                xs={12}
                md={3}
                className="d-flex flex-column align-items-center"
                style={{ margin: "20px 0" }}
                >
                <i
                    className="bi bi-heart"
                    style={{ color: "#375840", fontSize: "4.5rem", marginBottom: "1rem" }}
                ></i>
                <h3 className="fw-bold" style={{ color: "#375840", fontSize: "2.2rem" }}>
                    15K+
                </h3>
                <p className="fw-semibold" style={{ color: "#375840", fontSize: "1.2rem" }}>
                    Meals Provided
                </p>
                </Col>

                <Col
                xs={12}
                md={3}
                className="d-flex flex-column align-items-center"
                style={{ margin: "20px 0" }}
                >
                <i
                    className="bi bi-people"
                    style={{ color: "#375840", fontSize: "4.5rem", marginBottom: "1rem" }}
                ></i>
                <h3 className="fw-bold" style={{ color: "#375840", fontSize: "2.2rem" }}>
                    2.3K+
                </h3>
                <p className="fw-semibold" style={{ color: "#375840", fontSize: "1.2rem" }}>
                    Lives Helped
                </p>
                </Col>
            </Row>
            </Container>


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

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// export default function Home() {
//   return (
//     <div className="home-page text-center my-5 px-3">
//       {/* Logo & Header */}
//       <div className="container mb-5">
//         <img
//           src="/logo.png"
//           alt="ReCircle Logo"
//           className="mb-3"
//           style={{ width: "90px" }}
//         />
//         <h1 className="fw-bold" style={{ color: "#375840" }}>
//           Turn Surplus into Support
//         </h1>
//         <p className="fw-semibold" style={{ color: "#375840", fontSize: "1.2rem" }}>
//           Join ReCircle’s community-driven platform that connects donors, volunteers,
//           and recipients to reduce waste and help those in need.
//         </p>
//       </div>

//       {/* Mission & Vision */}
//       <div className="container my-5">
//         <div className="row justify-content-center">
//           <div className="col-md-4 mb-3">
//             <div className="card border-0 shadow-sm rounded-4">
//               <div className="card-body">
//                 <h6 className="fw-bold text-white py-2 rounded-3" style={{ backgroundColor: "#375840" }}>
//                   Our Mission
//                 </h6>
//                 <p className="mt-3 small fw-semibold" style={{ color: "#375840" }}>
//                   “ReCircle connects donors, recipients, and volunteers to minimize waste,
//                   support vulnerable communities, and make real impact through a smart,
//                   user-friendly platform.”
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4 mb-3">
//             <div className="card border-0 shadow-sm rounded-4">
//               <div className="card-body">
//                 <h6 className="fw-bold text-white py-2 rounded-3" style={{ backgroundColor: "#375840" }}>
//                   Our Vision
//                 </h6>
//                 <p className="mt-3 small fw-semibold" style={{ color: "#375840" }}>
//                   “A world where surplus becomes opportunity and no resource goes to waste —
//                   where generosity and technology unite to build sustainable, caring communities.”
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="container text-center my-5">
//         <div className="row justify-content-center gy-4">
//           <div className="col-md-4">
//             <i className="bi bi-recycle fs-1" style={{ color: "#375840" }}></i>
//             <h3 className="fw-bold mt-2" style={{ color: "#375840" }}>50K+</h3>
//             <p className="fw-semibold" style={{ color: "#375840" }}>Pounds Diverted</p>
//           </div>
//           <div className="col-md-4">
//             <i className="bi bi-heart fs-1" style={{ color: "#375840" }}></i>
//             <h3 className="fw-bold mt-2" style={{ color: "#375840" }}>15K+</h3>
//             <p className="fw-semibold" style={{ color: "#375840" }}>Meals Provided</p>
//           </div>
//           <div className="col-md-4">
//             <i className="bi bi-people fs-1" style={{ color: "#375840" }}></i>
//             <h3 className="fw-bold mt-2" style={{ color: "#375840" }}>2.3K+</h3>
//             <p className="fw-semibold" style={{ color: "#375840" }}>Lives Helped</p>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="container my-5">
//         <div className="row gy-4">
//           <div className="col-md-4">
//             <div className="card border-0 shadow-sm rounded-4 h-100">
//               <div className="card-body">
//                 <i className="bi bi-recycle fs-1" style={{ color: "#375840" }}></i>
//                 <h5 className="fw-bold mt-3" style={{ color: "#375840" }}>Reduce Waste</h5>
//                 <p className="small fw-semibold text-secondary">
//                   “Give surplus a second life”
//                 </p>
//                 <p className="small">
//                   Donate extra food and clothing instead of letting them go to waste.
//                   Every small act helps protect our planet.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card border-0 shadow-sm rounded-4 h-100">
//               <div className="card-body">
//                 <i className="bi bi-heart fs-1" style={{ color: "#375840" }}></i>
//                 <h5 className="fw-bold mt-3" style={{ color: "#375840" }}>Support Communities</h5>
//                 <p className="small fw-semibold text-secondary">
//                   “Your kindness, their hope”
//                 </p>
//                 <p className="small">
//                   Connect with nearby charities, NGOs, and families in need.
//                   Turn your generosity into real change.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card border-0 shadow-sm rounded-4 h-100">
//               <div className="card-body">
//                 <i className="bi bi-graph-up fs-1" style={{ color: "#375840" }}></i>
//                 <h5 className="fw-bold mt-3" style={{ color: "#375840" }}>Track Your Impact</h5>
//                 <p className="small fw-semibold text-secondary">
//                   “See the difference you make”
//                 </p>
//                 <p className="small">
//                   Follow your donations from pickup to delivery and measure your impact
//                   with our community-driven tracker.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
