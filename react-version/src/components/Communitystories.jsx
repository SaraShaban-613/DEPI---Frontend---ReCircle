// src/components/CommunityStories/CommunityStories.jsx
import React from 'react';
import './CommunityStories.css';
import write from "../assets/write.png";
import give from "../assets/give.png";


export default function CommunityStories() {
    return (
        <div className="main-content">
            {/* Page Header */}
            <div className="page-header">
                <h1>Community Stories</h1>
                <p>See how our community is making a difference, one donation at a time.</p>

                {/* Story Input Section */}
                <div className="story-input-section">
                    <div className="input-header">
                        <div className="you-label">You</div>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Share your impact story..."
                        />
                    </div>
                    <div className="action-buttons">
                        <button className="action-btn">
                            <i className="fas fa-camera" /> Photo
                        </button>
                        <button className="action-btn">
                            <i className="fas fa-map-marker-alt" /> Location
                        </button>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="stats-section">
                    <div className="stats-title fs-3">This Week's Community Impact</div>
                    <div className="stats">
                        <div className="stat-item">
                            <div className="stat-number">147</div>
                            <div className="stat-label">Stories</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">892</div>
                            <div className="stat-label">Comments</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">234</div>
                            <div className="stat-label">Engagement</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Community Updates */}
            <div className="community-section">
                <div className="section-title">
                    Community Updates
                    <button className="filter-btn border p-2 border rounded">Filter</button>
                </div>

                <div className="updates">
                    {/* Story Card #1 */}
                    <div className="story-card">
                        <div className="story-header">
                            <div className="avatar">SA</div>
                            <div className="story-info">
                                <div className="story-name">Sarah Ali</div>
                                <div className="story-meta">
                                    <span className="story-role">Volunteer</span>
                                    <span>2 days ago</span>
                                </div>
                            </div>
                        </div>
                        <div className="story-content">
                            Just completed 300+ pickups! Grateful to be part of the amazing community we're building together. Every action makes a difference! 💚
                            <img src={write} alt="ReCircle Logo" class="img-fluid rounded-3 story-img p-3"/>
                        </div>
                        <div className="story-footer">
                            <div className="footer-item">
                                <i className="fas fa-heart"></i> 12
                            </div>
                            <div className="footer-item">
                                <i className="fas fa-comment"></i> 5
                            </div>
                            <div className="footer-item">
                                <i className="fas fa-share"></i> 2
                            </div>
                        </div>
                    </div>

                    {/* Story Card #2 */}
                    <div className="story-card">
                        <div className="story-header">
                            <div className="avatar" style={{background: 'linear-gradient(135deg, #1a4d7a, #2d6ba3)'}}>MM</div>
                            <div className="story-info">
                                <div className="story-name">Mai Mahmoud</div>
                                <div className="story-meta">
                                    <span className="story-role">Donor</span>
                                    <span>3 days ago</span>
                                </div>
                            </div>
                        </div>
                        <div className="story-content">
                            Thank you to the community — we met a lovely family of 5. Instead of letting it go to waste, I was able to donate it. The gratitude in their eyes made my day! ✨
                        </div>
                        <div className="story-footer">
                            <div className="footer-item">
                                <i className="fas fa-heart"></i> 8
                            </div>
                            <div className="footer-item">
                                <i className="fas fa-comment"></i> 3
                            </div>
                            <div className="footer-item">
                                <i className="fas fa-share"></i> 1
                            </div>
                        </div>
                    </div>

                    {/* Story Card #3 */}
                    <div className="story-card">
                        <div className="story-header">
                            <div className="avatar" style={{background: 'linear-gradient(135deg, #7a4d1a, #a37a2d)'}}>SW</div>
                            <div className="story-info">
                                <div className="story-name">Salma Walsad</div>
                                <div className="story-meta">
                                    <span className="story-role">Recipient</span>
                                    <span>5 days ago</span>
                                </div>
                            </div>
                        </div>
                        <div className="story-content">
                            What a wonderful initiative! I received items that I urgently needed for our community. Your contribution provides gifts and meaningful support. Your kindness is changing lives! 🙏
                            <img src={give} alt="ReCircle Logo" class="img-fluid rounded-3 story-img p-3"/>
                        </div>

                        <div className="story-footer">
                            <div className="footer-item">
                                <i className="fas fa-heart"></i> 24
                            </div>
                            <div className="footer-item">
                                <i className="fas fa-comment"></i> 10
                            </div>
                            <div className="footer-item">
                                <i className="fas fa-share"></i> 5
                            </div>
                        </div>
                    </div>

                                        {/* Story Card #2 */}
                    <div className="story-card">
                        <div className="story-header">
                            <div className="avatar" style={{background: 'linear-gradient(135deg, #1a4d7a, #2d6ba3)'}}>NA</div>
                            <div className="story-info">
                                <div className="story-name">Norhan Ashry</div>
                                <div className="story-meta">
                                    <span className="story-role">Donor</span>
                                    <span>3 days ago</span>
                                </div>
                            </div>
                        </div>
                        <div className="story-content">
                        Spring cleaning turned into a wonderful donation opportunity! Cleaned out my closet and found so many clothes my kids had outgrown. Happy to know they'll find new homes! ♻️
                        </div>
                        <div className="story-footer">
                            <div className="footer-item">
                                <i className="fas fa-heart"></i> 12
                            </div>
                            <div className="footer-item">
                                <i className="fas fa-comment"></i> 3
                            </div>
                            <div className="footer-item">
                                <i className="fas fa-share"></i> 1
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
                <div className="section-title justify-content-center d-flex my-4">
                    <button className="filter-btn border p-3 border rounded justify-content-center"style={{ fontSize: "1.5rem", fontWeight: "500" }}>Load More Stories</button>
                </div>
        </div>
    );
}