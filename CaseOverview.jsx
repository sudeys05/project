import React from 'react';
import './CaseOverview.css';

const CaseOverview = () => {
  const overviewData = [
    {
      title: 'Open Cases',
      value: '32',
      change: '+2 from last week',
      changeType: 'increase',
      icon: '📂',
      color: 'blue'
    },
    {
      title: 'In Progress',
      value: '14',
      change: '+2 from last week',
      changeType: 'increase',
      icon: '⏳',
      color: 'yellow'
    },
    {
      title: 'Closed Cases',
      value: '67',
      change: '+2 from last week',
      changeType: 'increase',
      icon: '✅',
      color: 'green'
    },
    {
      title: 'Priority Cases',
      value: '5',
      change: '+2 from last week',
      changeType: 'increase',
      icon: '🚨',
      color: 'red'
    }
  ];

  return (
    <div className="case-overview">
      <h2 className="section-title">Case Overview</h2>
      <div className="overview-grid">
        {overviewData.map((item, index) => (
          <div key={index} className={`overview-card ${item.color}`}>
            <div className="card-header">
              <div className="card-icon">{item.icon}</div>
              <div className="card-value">{item.value}</div>
            </div>
            <div className="card-content">
              <h3 className="card-title">{item.title}</h3>
              <div className={`card-change ${item.changeType}`}>
                {item.change}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseOverview;