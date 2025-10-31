import React, { useState } from 'react';
import './Dashboard.css';

export default function Dashboard() {
    // Roles
    const [role, setRole] = useState('donor');
    const roles = [
        { key: 'donor',     icon: 'far fa-heart',          title: 'Donor',      subtitle: 'List and Donate items' },
        { key: 'volunteer', icon: 'fas fa-hands-helping',  title: 'Volunteer',  subtitle: 'Pickup & deliver donations' },
        { key: 'recipient', icon: 'fas fa-truck',          title: 'Recipient',  subtitle: 'Browse & request items' },
    ];

    // Nav
    const [nav, setNav] = useState('home');
    const navItems = [
        { key: 'home',  icon: 'fas fa-home' },
        { key: 'loc',   icon: 'fas fa-map-marker-alt' },
        { key: 'box',   icon: 'fas fa-box' },
        { key: 'chart', icon: 'fas fa-chart-line' },
        { key: 'people',icon: 'fas fa-users' },
    ];

    // Stats
    const stats = [
        { key:'pending', icon:'fas fa-clock',     label:'Pending',        value:2   },
        { key:'helped',  icon:'fas fa-heart',     label:'Lives Helped',   value:340 },
        { key:'received',icon:'fas fa-box-open',  label:'Items Received', value:127 },
        { key:'month',   icon:'fas fa-chart-line',label:'This Month',     value:18  },
    ];

    // Active Requests
    const requests = [
        {
            title: 'Fresh Bread & Pastries',
            from:  'Local Bakery',
            qty:    '15 Items',
            eta:    '30 mins',
            badges: [
                { text:'Track',      cls:'badge-track'   },
                { text:'In Transit', cls:'badge-info'    },
            ]
        },
        {
            title: 'Children’s Clothing',
            from:  'Community Clothing',
            qty:    '25 Items',
            eta:    'Tomorrow, 2:00 PM',
            badges: [
                { text:'Confirmed',  cls:'badge-confirmed' },
            ]
        }
    ];

    // Nearby Donations
    const donations = [
        {
            title: 'Fresh produce (vegetables & fruits)',
            tag:   'Food',
            donor: 'Green Grocery Market',
            dist:  '1.2 miles away',
            expires: '2 days',
            action: 'Request This Donation',
            cls:   'btn-request'
        },
        {
            title: 'Winter Clothing (Coats, Sweaters)',
            tag:   'Clothing',
            donor: 'Mai Mahmoud',
            dist:  '0.8 miles away',
            expires: '5 days',
            action: 'Request This Donation',
            cls:   'btn-request'
        },
        {
            title: 'Packaged Meals (Sandwiches, Salads)',
            tag:   'Food',
            donor: 'Campus Cafeteria',
            dist:  '2.1 miles away',
            expires: 'Expired Today',
            action: 'Consume Today',
            cls:   'btn-expired'
        }
    ];

    return (
        <div className="dashboard">
            <h1>Select Your Role</h1>
            <p className="subtitle">Choose how you’d like to participate in the ReCircle Community</p>

            {/* Roles */}
            <div className="role-selection">
                {roles.map(r => (
                    <div
                        key={r.key}
                        className={`role-card ${role === r.key ? 'selected' : ''}`}
                        onClick={() => setRole(r.key)}
                    >
                        <div className="role-icon"><i className={r.icon}></i></div>
                        <h3>{r.title}</h3>
                        <p>{r.subtitle}</p>
                    </div>
                ))}
            </div>

            {/* Nav */}
            <nav className="dashboard-nav">
                {navItems.map(n => (
                    <div
                        key={n.key}
                        className={`nav-item ${nav === n.key ? 'active' : ''}`}
                        onClick={() => setNav(n.key)}
                    >
                        <i className={n.icon}></i>
                    </div>
                ))}
            </nav>

            {/* Stats */}
            <div className="stats-grid">
                {stats.map(s => (
                    <div key={s.key} className="stat-box">
                        <i className={s.icon}></i>
                        <div>
                            <span className="stat-value">{s.value}</span>
                            <span className="stat-label">{s.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Active Requests */}
            <div className="requests-section">
                <h3>Your Active Requests</h3>
                <p className="section-subtitle">Track your requested donations</p>
                {requests.map((rq, i) => (
                    <div key={i} className="request-card">
                        <div className="request-info">
                            <h4>{rq.title}</h4>
                            <p>From: {rq.from}, {rq.qty}</p>
                            <p className="eta"><i className="fas fa-clock"></i> {rq.eta}</p>
                        </div>
                        <div className="request-badges">
                            {rq.badges.map((b, j) => (
                                <span key={j} className={`badge ${b.cls}`}>{b.text}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Available Donations */}
            <div className="donations-section">
                <h3>Available Donations Near You</h3>
                <p className="section-subtitle">
                    Browse and request items from donors in your community
                </p>

                <div className="donation-search-wrapper">
                    <i className="fas fa-search search-icon"></i>
                    <input
                        type="text"
                        className="donation-search"
                        placeholder="Search by item type, category…"
                    />
                </div>

                <div className="donation-list">
                    {donations.map((d, i) => (
                        <div key={i} className="donation-card">
                            <div className="card-header">
                                <img src={d.image} alt={d.title} className="donation-icon"/>
                                <div className="card-title">
                                    <h4>{d.title}</h4>
                                    <span className={`donation-tag tag-${d.tag.toLowerCase()}`}>
              {d.tag}
            </span>
                                </div>
                            </div>

                            <p className="donor">Donated by: {d.donor}</p>

                            <div className="donation-meta">
                                <div>
                                    <i className="fas fa-box"></i>
                                    <span>{d.quantity}</span>
                                </div>
                                <div>
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>{d.distance}</span>
                                </div>
                            </div>

                            {d.note && (
                                <div className={`donation-note note-${d.noteType}`}>
                                    {d.note}
                                </div>
                            )}

                            <button className={`donation-btn ${d.cls}`}>
                                {d.action}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            {/* Organization Impact */}
            <div className="impact-section">
                <h3>Your Organization’s Impact</h3>
                <p className="section-subtitle">How donations are helping your community</p>
                <div className="impact-cards">
                    <div className="impact-card">
                        <i className="fas fa-box-open"></i>
                        <div>
                            <span className="impact-value">127</span>
                            <span className="impact-label">Items Received</span>
                        </div>
                    </div>
                    <div className="impact-card">
                        <i className="fas fa-heart"></i>
                        <div>
                            <span className="impact-value">340</span>
                            <span className="impact-label">People Served</span>
                        </div>
                    </div>
                </div>
                <div className="impact-bar">
                    <div className="impact-progress" style={{width: '85%'}}/>
                </div>
                <p className="impact-final">Monthly Need Fulfillment: <strong>85%</strong></p>
            </div>
        </div>
    );
}