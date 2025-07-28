import React from 'react';
import './Sidebar.css';

const Sidebar = ({ activeItem, onItemClick }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'cases', label: 'Cases', icon: '📁' },
    { id: 'arrest', label: 'Arrest', icon: '🚔' },
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'message', label: 'Message', icon: '💬' },
    { id: 'evidence', label: 'Evidence', icon: '🔍' },
    { id: 'media', label: 'Media', icon: '📷' },
    { id: 'updates', label: 'Updates', icon: '🔄' },
    { id: 'entry', label: 'Entry', icon: '📝' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Police System</h2>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <div
            key={item.id}
            className={`sidebar-item ${activeItem === item.id ? 'active' : ''}`}
            onClick={() => onItemClick(item.id)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;