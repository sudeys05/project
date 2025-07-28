import React from 'react';
import CaseOverview from './CaseOverview/CaseOverview.jsx';
import QuickActions from './QuickActions/QuickActions.jsx';
import RecentUpdates from './RecentUpdates/RecentUpdates.jsx';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <CaseOverview />
        <QuickActions />
        <RecentUpdates />
      </div>
    </div>
  );
};

export default Dashboard;