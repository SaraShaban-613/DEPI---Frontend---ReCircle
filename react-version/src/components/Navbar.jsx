// import Recircle_Logo from '../assets/logo.png'
// import { Link } from 'react-router-dom';

// function Navbar() {
//     return (
//         <header className="d-flex py-2 align-items-center gap-5 px-5 justify-content-center">
//             <div className="logo-section d-flex align-items-center gap-2">
//                 <div className="logo">
//                     <img src={Recircle_Logo} />
//                 </div>
//                 <div className="brand-name">ReCircle</div>
//             </div>

//             <div className="search-container">
//                 <input type="text" className="search-bar rounded-3 px-3 py-2 text-white" placeholder="Search" />
//             </div>

//             <nav className="d-flex align-items-center gap-4">
//                 <div className="links d-flex align-items-center gap-5">
//                     <Link to="/">Home</Link>
//                     <Link to="/about">How it works</Link>
//                     <Link to="/community">Community</Link>
//                     <Link to="/impact">Impact Tracker</Link>
//                     <Link to="/signup" className="login-btn py-2 px-3 rounded-3">Login&nbsp;/&nbsp;Signup</Link>
//                 </div>
//                 {/* <link to="/notification" className="notification-icon">
//                     <svg viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
//                         <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
//                         <path d="M13.73 21a2 2 0 01-3.46 0" />
//                     </svg>
//                 </link> */}

//                 <Link to="/notification" className="notification-icon">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
//                     <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
//                     <path d="M13.73 21a2 2 0 01-3.46 0" />
//                 </svg>
//                 </Link>

//                 <span className="profile-icon">
//                     <svg viewBox="0 0 24 24" fill="none" strokeWidth="1">
//                         <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
//                         <circle cx="12" cy="7" r="4" />
//                     </svg>
//                 </span>
//             </nav>
//         </header>
//     );
// }

// export default Navbar;


import React, { useState, useRef, useEffect } from "react";
import Recircle_Logo from "../assets/logo.png";
import Sarah from "../assets/2.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);

  // Close notification dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="d-flex py-2 align-items-center gap-5 px-5 justify-content-center position-relative">
      {/* Logo Section */}
      <div className="logo-section d-flex align-items-center gap-2">
        <div className="logo">
          <img src={Recircle_Logo} alt="ReCircle Logo" />
        </div>
        <div className="brand-name">ReCircle</div>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-bar rounded-3 px-3 py-2 text-white"
          placeholder="Search"
        />
      </div>

      {/* Navigation Links */}
      <nav className="d-flex align-items-center gap-4 ">
        {/* <div className="links d-flex align-items-center gap-5">
          <Link to="/" >Home</Link>
          <Link to="/about">How it works</Link>
          <Link to="/community">Community</Link>
          <Link to="/impact">Impact Tracker</Link>
          <Link to="/signup" className="login-btn py-2 px-3 rounded-3">
            Login&nbsp;/&nbsp;Signup
          </Link>
        </div> */}
        <div className="links d-flex align-items-center gap-5" >
          <Link to="/">Home</Link>
          <Link to="/about">How it works</Link>
          <Link to="/community">Community</Link>
          <Link to="/impact">Impact Tracker</Link>

          {/* <Link
            to="/signup"
            className="login-btn py-2 px-3 rounded-3"
            style={{ fontSize: "1.2rem", fontWeight: "600" }}
          >
            Login&nbsp;/&nbsp;Signup
          </Link> */}

        </div>
{/* 
        Notification Bell with Dropdown
        <div
          className="notification-wrapper position-relative"
          ref={boxRef}
          onClick={() => setOpen(!open)}
          style={{ cursor: "pointer" }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#333"
            strokeWidth="2"
            width="24"
            height="24"
          >
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 01-3.46 0" />
          </svg>

          Dropdown Panel
          <div
            style={{
              position: "absolute",
              top: "35px",
              right: 0,
              width: "300px",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              overflow: "hidden",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(-10px)",
              pointerEvents: open ? "auto" : "none",
              transition: "all 0.25s ease",
              zIndex: 1000,
            }}
          >
            <h2
              style={{
                fontSize: "14px",
                padding: "10px",
                borderBottom: "1px solid #eee",
                color: "#333",
              }}
            >
              Notifications - <span style={{ color: "red" }}>2</span>
            </h2>

            Notification 1
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #f2f2f2",
                padding: "10px",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#f8f8f8")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "white")
              }
            >
              <img
                src="https://i.imgur.com/uIgDDDd.jpg"
                alt="profile"
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <div>
                <h4
                  style={{
                    margin: "0 0 4px 0",
                    color: "#222",
                    fontSize: "14px",
                  }}
                >
                  Samso aliao
                </h4>
                <p style={{ margin: 0, color: "#777", fontSize: "12px" }}>
                  Samso Nagaro liked your homework
                </p>
              </div>
            </div>

            Notification 2
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #f2f2f2",
                padding: "10px",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#f8f8f8")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "white")
              }
            >
              <img
                src="https://img.icons8.com/flat_round/64/000000/vote-badge.png"
                alt="badge"
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <div>
                <h4
                  style={{
                    margin: "0 0 4px 0",
                    color: "#222",
                    fontSize: "14px",
                  }}
                >
                  John Silvester
                </h4>
                <p style={{ margin: 0, color: "#777", fontSize: "12px" }}>
                  +20 Vista badge earned
                </p>
              </div>
            </div>
          </div>
        </div> */}


{/* Notification Dropdown */}
<div
  className="notification-wrapper position-relative"
  ref={boxRef}
  onClick={() => setOpen(!open)}
  style={{ cursor: "pointer" }}
>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2F4F39"
    strokeWidth="2"
    width="24"
    height="24"
  >
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 01-3.46 0" />
  </svg>

  {/* Dropdown Panel */}
  <div
    style={{
      position: "absolute",
      top: "35px",
      right: 0,
      width: "320px",
      background: "#FFFFFF",
      borderRadius: "14px",
      border: "1px solid #D9E2DA",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      overflow: "hidden",
      opacity: open ? 1 : 0,
      transform: open ? "translateY(0)" : "translateY(-8px)",
      pointerEvents: open ? "auto" : "none",
      transition: "all 0.25s ease",
      zIndex: 1000,
    }}
  >
    {/* Header */}
    <div
      style={{
        padding: "12px 16px",
        borderBottom: "1px solid #E7EFE8",
        fontSize: "15px",
        fontWeight: "600",
        color: "#2F4F39",
        background: "#F5FAF5",
      }}
    >
      Notifications <span style={{ color: "#3B7A57" }}>(2)</span>
    </div>

    {/* Notification Item */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "12px 16px",
        borderBottom: "1px solid #F0F4F0",
        cursor: "pointer",
        transition: "0.2s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background = "#EEF5EF")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.background = "white")
      }
    >
      <img
        src={Sarah}
        alt="profile"
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "50%",
        }}
      />
      <div>
        <h4
          style={{
            margin: 0,
            fontSize: "14px",
            fontWeight: "600",
            color: "#2F4F39",
          }}
        >
          Samso aliao
        </h4>
        <p
          style={{
            margin: 0,
            fontSize: "13px",
            color: "#5E6F62",
          }}
        >
          Sarah liked your Recent post
        </p>
      </div>
    </div>

    {/* Notification 2 */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "12px 16px",
        cursor: "pointer",
        transition: "0.2s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background = "#EEF5EF")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.background = "white")
      }
    >
    <div
  className="avatar"
  style={{
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #3d5a40, #2d4a30)",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: 600,
    fontSize: "15px",
  }}
>
  MS
</div>

      <div>
        <h4
          style={{
            margin: 0,
            fontSize: "14px",
            fontWeight: "600",
            color: "#2F4F39",
          }}
        >
          Mai Sayed
        </h4>
        <p
          style={{
            margin: 0,
            fontSize: "13px",
            color: "#5E6F62",
          }}
        >
          Added New Post 
        </p>
      </div>
    </div>
  </div>
</div>























        {/* Profile Icon */}
        {/* <link to="/dashboard" className="profile-icon">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1" width="24">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </link> */}

        <Link to="/profile" className="profile-icon">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;

