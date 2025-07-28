import React from 'react';
import './QuickActions.css';

const QuickActions = () => {
  const actions = [
    {
      title: 'Add Case',
      description: 'Create new case file',
      icon: '➕',
      color: 'blue',
      action: () => console.log('Add new case')
    },
    {
      title: 'New Arrests',
      description: '3 pending entries',
      icon: '🚔',
      color: 'red',
      badge: '3',
      action: () => console.log('New arrests')
    },
    {
      title: 'Geofile Access',
      description: 'Location tracking',
      icon: '🗺️',
      color: 'green',
      action: () => console.log('Geofile access')
    },
    {
      title: 'License Plate',
      description: 'Vehicle lookup',
      icon: '🚗',
      color: 'purple',
      action: () => console.log('License plate lookup')
    },
    {
      title: 'Evidence Log',
      description: 'Upload evidence',
      icon: '🔍',
      color: 'orange',
      action: () => console.log('Evidence log')
    },
    {
      title: 'Generate Report',
      description: 'Create case report',
      icon: '📊',
      color: 'teal',
      action: () => console.log('Generate report')
    }
  ];

  return (
    <div className="quick-actions">
      <h2 className="section-title">Quick Actions</h2>
      <div className="actions-grid">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`action-card ${action.color}`}
            onClick={action.action}
          >
            <div className="action-icon-wrapper">
              <span className="action-icon">{action.icon}</span>
              {action.badge && (
                <span className="action-badge">{action.badge}</span>
              )}
            </div>
            <div className="action-content">
              <h3 className="action-title">{action.title}</h3>
              <p className="action-description">{action.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;