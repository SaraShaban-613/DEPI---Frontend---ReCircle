// src/components/CommunityStories/CommunityStories.jsx
import React, { useState, useEffect, useRef } from 'react';
import './CommunityStories.css';
import write from "../assets/write.png";
import give from "../assets/give.png";

// Sample data with hashtags
const initialStories = [
    {
        id: 1,
        name: "Sarah Ali",
        initials: "SA",
        role: "Volunteer",
        timeAgo: "2 days ago",
        content: "Just completed 300+ pickups! Grateful to be part of the amazing community we're building together. Every action makes a difference! 💚",
        image: write,
        likes: 12,
        comments: [],
        shares: 2,
        hashtags: ["community", "volunteer", "impact"],
        avatarColor: 'linear-gradient(135deg, #1a7a4d, #2da37a)',
        isOwn: false,
        isLiked: false
    },
    {
        id: 2,
        name: "Mai Mahmoud",
        initials: "MM",
        role: "Donor",
        timeAgo: "3 days ago",
        content: "Thank you to the community — we met a lovely family of 5. Instead of letting it go to waste, I was able to donate it. The gratitude in their eyes made my day! ✨",
        image: null,
        likes: 8,
        comments: [],
        shares: 1,
        hashtags: ["donation", "family", "grateful"],
        avatarColor: 'linear-gradient(135deg, #1a4d7a, #2d6ba3)',
        isOwn: false,
        isLiked: false
    },
    {
        id: 3,
        name: "Salma Walsad",
        initials: "SW",
        role: "Recipient",
        timeAgo: "5 days ago",
        content: "What a wonderful initiative! I received items that I urgently needed for our community. Your contribution provides gifts and meaningful support. Your kindness is changing lives! 🙏",
        image: give,
        likes: 24,
        comments: [],
        shares: 5,
        hashtags: ["thankful", "support", "community"],
        avatarColor: 'linear-gradient(135deg, #7a4d1a, #a37a2d)',
        isOwn: false,
        isLiked: false
    },
    {
        id: 4,
        name: "Norhan Ashry",
        initials: "NA",
        role: "Donor",
        timeAgo: "3 days ago",
        content: "Spring cleaning turned into a wonderful donation opportunity! Cleaned out my closet and found so many clothes my kids had outgrown. Happy to know they'll find new homes! ♻️",
        image: null,
        likes: 12,
        comments: [],
        shares: 1,
        hashtags: ["donation", "recycling", "kids"],
        avatarColor: 'linear-gradient(135deg, #1a4d7a, #2d6ba3)',
        isOwn: false,
        isLiked: false
    }
];

const additionalStories = [
    {
        id: 5,
        name: "Ahmed Hassan",
        initials: "AH",
        role: "Volunteer",
        timeAgo: "1 week ago",
        content: "Organized a community drive this weekend. Collected over 200 items! So proud of our community's generosity. 🌟",
        image: null,
        likes: 18,
        comments: [],
        shares: 3,
        hashtags: ["volunteer", "community", "drive"],
        avatarColor: 'linear-gradient(135deg, #4d1a7a, #6b2da3)',
        isOwn: false,
        isLiked: false
    }
];

// Filter Dropdown Component
const FilterDropdown = ({ activeFilter, onFilterChange, storyCounts, onClose }) => {
    const filterOptions = [
        { value: 'all', label: 'All Stories', icon: 'fas fa-th-large' },
        { value: 'Volunteer', label: 'Volunteers', icon: 'fas fa-hands-helping' },
        { value: 'Donor', label: 'Donors', icon: 'fas fa-gift' },
        { value: 'Recipient', label: 'Recipients', icon: 'fas fa-hand-holding-heart' },
        { value: 'Community Member', label: 'Community', icon: 'fas fa-users' }
    ];

    return (
        <div className="filter-dropdown">
            <div className="filter-dropdown-header">Filter Stories</div>
            <div className="filter-options">
                {filterOptions.map(option => (
                    <div
                        key={option.value}
                        className={`filter-option ${activeFilter === option.value ? 'active' : ''}`}
                        onClick={() => onFilterChange(option.value)}
                    >
                        <i className={option.icon}></i>
                        <span>{option.label}</span>
                        <span className="filter-option-count">
                            {option.value === 'all' ? storyCounts.total : (storyCounts[option.value] || 0)}
                        </span>
                    </div>
                ))}
            </div>
            {activeFilter !== 'all' && (
                <button className="clear-filter-btn" onClick={() => onFilterChange('all')}>
                    Clear Filter
                </button>
            )}
        </div>
    );
};

// Share Modal Component (keep existing)
const ShareModal = ({ story, onClose }) => {
    const shareUrl = window.location.href;
    const shareText = `${story.content.substring(0, 100)}${story.content.length > 100 ? '...' : ''}`;

    const shareOptions = [
        {
            name: 'Facebook',
            icon: 'fab fa-facebook',
            color: '#1877f2',
            action: () => {
                window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
                    '_blank',
                    'width=600,height=400'
                );
            }
        },
        {
            name: 'Twitter',
            icon: 'fab fa-twitter',
            color: '#1da1f2',
            action: () => {
                window.open(
                    `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
                    '_blank',
                    'width=600,height=400'
                );
            }
        },
        {
            name: 'WhatsApp',
            icon: 'fab fa-whatsapp',
            color: '#25d366',
            action: () => {
                window.open(
                    `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
                    '_blank'
                );
            }
        },
        {
            name: 'LinkedIn',
            icon: 'fab fa-linkedin',
            color: '#0077b5',
            action: () => {
                window.open(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
                    '_blank',
                    'width=600,height=400'
                );
            }
        },
        {
            name: 'Email',
            icon: 'fas fa-envelope',
            color: '#ea4335',
            action: () => {
                window.location.href = `mailto:?subject=${encodeURIComponent('Check out this community story')}&body=${encodeURIComponent(shareText + '\n\n' + shareUrl)}`;
            }
        },
        {
            name: 'Copy Link',
            icon: 'fas fa-link',
            color: '#3d5a40',
            action: () => {
                navigator.clipboard.writeText(shareUrl).then(() => {
                    alert('Link copied to clipboard!');
                    onClose();
                }).catch(() => {
                    alert('Failed to copy link');
                });
            }
        }
    ];

    return (
        <div className="share-overlay" onClick={onClose}>
            <div className="share-modal" onClick={(e) => e.stopPropagation()}>
                <div className="share-header">
                    <h3>Share Story</h3>
                    <button className="close-btn" onClick={onClose}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className="share-options">
                    {shareOptions.map((option, index) => (
                        <button
                            key={index}
                            className="share-option-btn"
                            onClick={option.action}
                            style={{ '--hover-color': option.color }}
                        >
                            <div className="share-icon" style={{ backgroundColor: option.color }}>
                                <i className={option.icon}></i>
                            </div>
                            <span>{option.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Comments Section Component (keep existing)
const CommentsSection = ({ storyId, comments, onAddComment, onEditComment, onDeleteComment, onClose }) => {
    const [newComment, setNewComment] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            onAddComment(storyId, newComment);
            setNewComment('');
        }
    };

    const handleEdit = (comment) => {
        setEditingId(comment.id);
        setEditText(comment.content);
    };

    const handleSaveEdit = (commentId) => {
        if (editText.trim()) {
            onEditComment(storyId, commentId, editText);
            setEditingId(null);
            setEditText('');
        }
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setEditText('');
    };

    return (
        <div className="comments-overlay" onClick={onClose}>
            <div className="comments-modal" onClick={(e) => e.stopPropagation()}>
                <div className="comments-header">
                    <h3>Comments</h3>
                    <button className="close-btn" onClick={onClose}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="comments-list">
                    {comments.length === 0 ? (
                        <p className="no-comments">No comments yet. Be the first to comment!</p>
                    ) : (
                        comments.map(comment => (
                            <div key={comment.id} className="comment-item">
                                <div className="comment-avatar">
                                    {comment.author.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="comment-content">
                                    <div className="comment-header">
                                        <span className="comment-author">{comment.author}</span>
                                        <span className="comment-time">{comment.timeAgo}</span>
                                    </div>
                                    {editingId === comment.id ? (
                                        <div className="comment-edit">
                                            <input
                                                type="text"
                                                value={editText}
                                                onChange={(e) => setEditText(e.target.value)}
                                                className="comment-edit-input"
                                            />
                                            <div className="comment-edit-actions">
                                                <button
                                                    className="btn-save"
                                                    onClick={() => handleSaveEdit(comment.id)}
                                                >
                                                    Save
                                                </button>
                                                <button
                                                    className="btn-cancel"
                                                    onClick={handleCancelEdit}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <p className="comment-text">{comment.content}</p>
                                            {comment.isOwn && (
                                                <div className="comment-actions">
                                                    <button
                                                        className="comment-action-btn"
                                                        onClick={() => handleEdit(comment)}
                                                    >
                                                        <i className="fas fa-edit"></i> Edit
                                                    </button>
                                                    <button
                                                        className="comment-action-btn delete"
                                                        onClick={() => onDeleteComment(storyId, comment.id)}
                                                    >
                                                        <i className="fas fa-trash"></i> Delete
                                                    </button>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <form className="comment-input-section" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Write a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="comment-input"
                    />
                    <button
                        type="submit"
                        className="comment-submit-btn"
                        disabled={!newComment.trim()}
                    >
                        <i className="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </div>
    );
};

// Story Card Component
const StoryCard = ({
                       story,
                       onLike,
                       onComment,
                       onShare,
                       onDelete
                   }) => {
    const [showLikeAnimation, setShowLikeAnimation] = useState(false);
    const [showCommentAnimation, setShowCommentAnimation] = useState(false);

    const handleLikeClick = () => {
        onLike(story.id);
        setShowLikeAnimation(true);
        setTimeout(() => setShowLikeAnimation(false), 600);
    };

    const handleCommentClick = () => {
        setShowCommentAnimation(true);
        setTimeout(() => setShowCommentAnimation(false), 600);
        onComment(story.id);
    };

    return (
        <div className="story-card">
            <div className="story-header">
                <div className="avatar" style={{ background: story.avatarColor }}>
                    {story.initials}
                </div>
                <div className="story-info">
                    <div className="story-name">{story.name}</div>
                    <div className="story-meta">
                        <span className="story-role">{story.role}</span>
                        <span>{story.timeAgo}</span>
                    </div>
                </div>
                {story.isOwn && (
                    <button
                        className="delete-story-btn"
                        onClick={() => onDelete(story.id)}
                        title="Delete post"
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                )}
            </div>
            <div className="story-content">
                <p className="story-text">{story.content}</p>
                {story.image && (
                    <div className="story-image-container">
                        <img
                            src={story.image}
                            alt="Story"
                            className="story-image"
                        />
                    </div>
                )}
                {story.location && (
                    <div className="story-location">
                        <i className="fas fa-map-marker-alt"></i> {story.location}
                    </div>
                )}
                {story.hashtags && story.hashtags.length > 0 && (
                    <div className="story-hashtags">
                        {story.hashtags.map((tag, index) => (
                            <span key={index} className="hashtag">
                                <i className="fas fa-hashtag"></i>
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            <div className="story-footer">
                <div
                    className={`footer-item ${story.isLiked ? 'liked' : ''} ${showLikeAnimation ? 'animate-like' : ''}`}
                    onClick={handleLikeClick}
                    style={{ cursor: 'pointer' }}
                >
                    <i className={`fas fa-heart ${story.isLiked ? 'heart-filled' : ''}`}></i>
                    <span className="count">{story.likes}</span>
                    {showLikeAnimation && (
                        <div className="floating-heart">
                            <i className="fas fa-heart"></i>
                        </div>
                    )}
                </div>
                <div
                    className={`footer-item ${showCommentAnimation ? 'animate-comment' : ''}`}
                    onClick={handleCommentClick}
                    style={{ cursor: 'pointer' }}
                >
                    <i className="fas fa-comment"></i>
                    <span className="count">{story.comments.length}</span>
                    {showCommentAnimation && (
                        <div className="comment-bubble">
                            <i className="fas fa-comment"></i>
                        </div>
                    )}
                </div>
                <div
                    className="footer-item"
                    onClick={() => onShare(story.id)}
                    style={{ cursor: 'pointer' }}
                >
                    <i className="fas fa-share"></i> <span className="count">{story.shares}</span>
                </div>
            </div>
        </div>
    );
};

export default function CommunityStories() {
    const [stories, setStories] = useState(initialStories);
    const [storyInput, setStoryInput] = useState('');
    const [hashtagInput, setHashtagInput] = useState('');
    const [currentHashtags, setCurrentHashtags] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [hasMoreStories, setHasMoreStories] = useState(true);
    const [activeCommentsStoryId, setActiveCommentsStoryId] = useState(null);
    const [activeShareStoryId, setActiveShareStoryId] = useState(null);
    const [activeFilter, setActiveFilter] = useState('all');
    const [showFilterDropdown, setShowFilterDropdown] = useState(false);
    const [stats, setStats] = useState({
        stories: 147,
        comments: 892,
        engagement: 234
    });

    const fileInputRef = useRef(null);
    const filterRef = useRef(null);

    // Close filter dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setShowFilterDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Calculate stats based on current stories
    useEffect(() => {
        const totalComments = stories.reduce((sum, story) => sum + story.comments.length, 0);
        const totalEngagement = stories.reduce((sum, story) => sum + story.likes + story.shares, 0);

        setStats({
            stories: stories.length,
            comments: totalComments,
            engagement: totalEngagement
        });
    }, [stories]);

    // Filter stories based on active filter
    const filteredStories = activeFilter === 'all'
        ? stories
        : stories.filter(story => story.role === activeFilter);

    // Calculate story counts by role
    const storyCounts = {
        total: stories.length,
        'Volunteer': stories.filter(s => s.role === 'Volunteer').length,
        'Donor': stories.filter(s => s.role === 'Donor').length,
        'Recipient': stories.filter(s => s.role === 'Recipient').length,
        'Community Member': stories.filter(s => s.role === 'Community Member').length
    };

    // Handle hashtag input
    const handleHashtagKeyPress = (e) => {
        if (e.key === 'Enter' && hashtagInput.trim()) {
            e.preventDefault();
            const tag = hashtagInput.trim().replace(/^#/, '').toLowerCase();
            if (!currentHashtags.includes(tag)) {
                setCurrentHashtags([...currentHashtags, tag]);
            }
            setHashtagInput('');
        }
    };

    const removeHashtag = (tagToRemove) => {
        setCurrentHashtags(currentHashtags.filter(tag => tag !== tagToRemove));
    };

    // Handle photo upload
    const handlePhotoClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle location
    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const location = `${position.coords.latitude.toFixed(2)}, ${position.coords.longitude.toFixed(2)}`;
                    setSelectedLocation(location);
                    alert(`Location added: ${location}`);
                },
                (error) => {
                    const manualLocation = prompt("Enter your location:");
                    if (manualLocation) {
                        setSelectedLocation(manualLocation);
                    }
                }
            );
        } else {
            const manualLocation = prompt("Geolocation not supported. Enter your location:");
            if (manualLocation) {
                setSelectedLocation(manualLocation);
            }
        }
    };

    // Handle like action
    const handleLike = (storyId) => {
        setStories(prevStories =>
            prevStories.map(story =>
                story.id === storyId
                    ? {
                        ...story,
                        likes: story.isLiked ? story.likes - 1 : story.likes + 1,
                        isLiked: !story.isLiked
                    }
                    : story
            )
        );
    };

    // Handle opening comments
    const handleComment = (storyId) => {
        setActiveCommentsStoryId(storyId);
    };

    // Handle adding a comment
    // Handle adding a comment
    const handleAddComment = (storyId, commentText) => {
        const newComment = {
            id: Date.now(),
            author: "You",
            content: commentText,
            timeAgo: "Just now",
            isOwn: true
        };

        setStories(prevStories =>
            prevStories.map(story =>
                story.id === storyId
                    ? { ...story, comments: [...story.comments, newComment] }
                    : story
            )
        );
    };

    // Handle editing a comment
    const handleEditComment = (storyId, commentId, newText) => {
        setStories(prevStories =>
            prevStories.map(story =>
                story.id === storyId
                    ? {
                        ...story,
                        comments: story.comments.map(comment =>
                            comment.id === commentId
                                ? { ...comment, content: newText }
                                : comment
                        )
                    }
                    : story
            )
        );
    };

    // Handle deleting a comment
    const handleDeleteComment = (storyId, commentId) => {
        if (window.confirm("Are you sure you want to delete this comment?")) {
            setStories(prevStories =>
                prevStories.map(story =>
                    story.id === storyId
                        ? {
                            ...story,
                            comments: story.comments.filter(comment => comment.id !== commentId)
                        }
                        : story
                )
            );
        }
    };

    // Handle share action
    const handleShare = (storyId) => {
        setActiveShareStoryId(storyId);
        setStories(prevStories =>
            prevStories.map(story =>
                story.id === storyId
                    ? { ...story, shares: story.shares + 1 }
                    : story
            )
        );
    };

    // Handle load more stories
    const handleLoadMore = () => {
        setStories(prevStories => [...prevStories, ...additionalStories]);
        setHasMoreStories(false);
    };

    // Handle deleting a story
    const handleDeleteStory = (storyId) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            setStories(prevStories => prevStories.filter(story => story.id !== storyId));
        }
    };

    // Handle filter change
    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
        setShowFilterDropdown(false);
    };

    // Handle submitting a new story
    const handleSubmitStory = () => {
        if (storyInput.trim()) {
            const newStory = {
                id: Date.now(),
                name: "You",
                initials: "YU",
                role: "Community Member",
                timeAgo: "Just now",
                content: storyInput,
                image: selectedImage,
                location: selectedLocation,
                hashtags: currentHashtags,
                likes: 0,
                comments: [],
                shares: 0,
                avatarColor: 'linear-gradient(135deg, #1a7a4d, #2da37a)',
                isOwn: true,
                isLiked: false
            };

            setStories([newStory, ...stories]);
            setStoryInput('');
            setSelectedImage(null);
            setSelectedLocation(null);
            setCurrentHashtags([]);
            setHashtagInput('');
        }
    };

    // Get active story's comments and shares
    const activeStory = stories.find(story => story.id === activeCommentsStoryId);
    const activeShareStory = stories.find(story => story.id === activeShareStoryId);

    return (
        <div className="main-content">
            {/* Hidden file input */}
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />

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
                            value={storyInput}
                            onChange={(e) => setStoryInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSubmitStory()}
                        />
                    </div>

                    {/* Hashtag Input */}
                    <div className="hashtag-input-wrapper">
                        <input
                            type="text"
                            className="hashtag-input"
                            placeholder="Add hashtags (press Enter to add)..."
                            value={hashtagInput}
                            onChange={(e) => setHashtagInput(e.target.value)}
                            onKeyPress={handleHashtagKeyPress}
                        />
                        {currentHashtags.length > 0 && (
                            <div className="story-hashtags" style={{ marginTop: '10px' }}>
                                {currentHashtags.map((tag, index) => (
                                    <span key={index} className="hashtag" style={{ cursor: 'pointer' }}>
                                        <i className="fas fa-hashtag"></i>
                                        {tag}
                                        <i
                                            className="fas fa-times"
                                            style={{ marginLeft: '6px', fontSize: '10px' }}
                                            onClick={() => removeHashtag(tag)}
                                        ></i>
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Preview selected image */}
                    {selectedImage && (
                        <div className="image-preview">
                            <img src={selectedImage} alt="Preview" />
                            <button
                                className="remove-image-btn"
                                onClick={() => setSelectedImage(null)}
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    )}

                    {/* Show selected location */}
                    {selectedLocation && (
                        <div className="location-preview">
                            <i className="fas fa-map-marker-alt"></i> {selectedLocation}
                            <button
                                className="remove-location-btn"
                                onClick={() => setSelectedLocation(null)}
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    )}

                    <div className="action-buttons">
                        <button className="action-btn" onClick={handlePhotoClick}>
                            <i className="fas fa-camera" /> Photo
                        </button>
                        <button className="action-btn" onClick={handleLocationClick}>
                            <i className="fas fa-map-marker-alt" /> Location
                        </button>
                        <button
                            className="action-btn"
                            onClick={handleSubmitStory}
                            disabled={!storyInput.trim()}
                        >
                            <i className="fas fa-paper-plane" /> Post
                        </button>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="stats-section">
                    <div className="stats-title fs-3">This Week's Community Impact</div>
                    <div className="stats">
                        <div className="stat-item">
                            <div className="stat-number">{stats.stories}</div>
                            <div className="stat-label">Stories</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">{stats.comments}</div>
                            <div className="stat-label">Comments</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">{stats.engagement}</div>
                            <div className="stat-label">Engagement</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Community Updates */}
            <div className="community-section">
                <div className="section-title">
                    Community Updates
                    <div className="filter-btn-wrapper" ref={filterRef}>
                        <button
                            className="filter-btn border p-2 border rounded"
                            onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                        >
                            <i className="fas fa-filter"></i> Filter
                        </button>
                        {activeFilter !== 'all' && (
                            <span className="filter-badge">1</span>
                        )}
                        {showFilterDropdown && (
                            <FilterDropdown
                                activeFilter={activeFilter}
                                onFilterChange={handleFilterChange}
                                storyCounts={storyCounts}
                                onClose={() => setShowFilterDropdown(false)}
                            />
                        )}
                    </div>
                </div>

                {activeFilter !== 'all' && (
                    <div style={{
                        marginBottom: '20px',
                        padding: '12px 16px',
                        background: '#e8f5e9',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span style={{ color: '#3d5a40', fontWeight: 600, fontSize: '14px' }}>
                            <i className="fas fa-filter" style={{ marginRight: '8px' }}></i>
                            Showing: {activeFilter} ({filteredStories.length} {filteredStories.length === 1 ? 'story' : 'stories'})
                        </span>
                        <button
                            onClick={() => setActiveFilter('all')}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: '#3d5a40',
                                cursor: 'pointer',
                                fontWeight: 600,
                                fontSize: '14px'
                            }}
                        >
                            <i className="fas fa-times"></i> Clear
                        </button>
                    </div>
                )}

                <div className="updates">
                    {filteredStories.length === 0 ? (
                        <div style={{
                            textAlign: 'center',
                            padding: '60px 20px',
                            color: '#999',
                            background: 'white',
                            borderRadius: '16px',
                            border: '2px dashed #ddd'
                        }}>
                            <i className="fas fa-inbox" style={{ fontSize: '48px', marginBottom: '16px', opacity: 0.5 }}></i>
                            <p style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>No stories found</p>
                            <p style={{ fontSize: '14px' }}>Try adjusting your filter or be the first to share!</p>
                        </div>
                    ) : (
                        filteredStories.map(story => (
                            <StoryCard
                                key={story.id}
                                story={story}
                                onLike={handleLike}
                                onComment={handleComment}
                                onShare={handleShare}
                                onDelete={handleDeleteStory}
                            />
                        ))
                    )}
                </div>
            </div>

            {/* Load More Button */}
            {hasMoreStories && filteredStories.length > 0 && (
                <div className="section-title justify-content-center d-flex my-4">
                    <button
                        className="filter-btn border p-3 border rounded justify-content-center"
                        style={{ fontSize: "1.5rem", fontWeight: "500" }}
                        onClick={handleLoadMore}
                    >
                        Load More Stories
                    </button>
                </div>
            )}

            {/* Comments Modal */}
            {activeCommentsStoryId && activeStory && (
                <CommentsSection
                    storyId={activeCommentsStoryId}
                    comments={activeStory.comments}
                    onAddComment={handleAddComment}
                    onEditComment={handleEditComment}
                    onDeleteComment={handleDeleteComment}
                    onClose={() => setActiveCommentsStoryId(null)}
                />
            )}

            {/* Share Modal */}
            {activeShareStoryId && activeShareStory && (
                <ShareModal
                    story={activeShareStory}
                    onClose={() => setActiveShareStoryId(null)}
                />
            )}
        </div>
    );
}