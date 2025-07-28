import React from 'react';
import './Header.css';

const Header = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="header">
      <div className="header-content">
        <div className="welcome-section">
          <h1>Welcome, Officer Smith</h1>
          <p className="current-date">{currentDate}</p>
        </div>
        <div className="header-actions">
          <button className="notification-btn">
            <span className="notification-icon">🔔</span>
            <span className="notification-badge">3</span>
          </button>
          <button className="settings-btn">
            <span className="settings-icon">⚙️</span>
          </button>
          <button className="profile-btn">
            <div className="profile-avatar">👮</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;