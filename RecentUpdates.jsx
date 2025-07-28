import React from 'react';
import './RecentUpdates.css';

const RecentUpdates = () => {
  const updates = [
    {
      id: 'UPD003',
      date: '2024-01-15',
      time: '14:30',
      officer: 'Officer Johnson',
      caseId: 'CASE-2024-001',
      description: 'Evidence submitted for forensic analysis',
      priority: 'HIGH'
    },
    {
      id: 'UPD002',
      date: '2024-01-15',
      time: '12:15',
      officer: 'Officer Davis',
      caseId: 'CASE-2024-002',
      description: 'Witness statement recorded',
      priority: 'MEDIUM'
    },
    {
      id: 'UPD001',
      date: '2024-01-15',
      time: '09:45',
      officer: 'Officer Smith',
      caseId: 'CASE-2024-003',
      description: 'Suspect interview completed',
      priority: 'HIGH'
    },
    {
      id: 'UPD004',
      date: '2024-01-14',
      time: '16:20',
      officer: 'Officer Wilson',
      caseId: 'CASE-2024-004',
      description: 'Crime scene photos uploaded',
      priority: 'LOW'
    },
    {
      id: 'UPD005',
      date: '2024-01-14',
      time: '11:30',
      officer: 'Officer Brown',
      caseId: 'CASE-2024-005',
      description: 'Background check completed',
      priority: 'MEDIUM'
    }
  ];

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'HIGH': return 'priority-high';
      case 'MEDIUM': return 'priority-medium';
      case 'LOW': return 'priority-low';
      default: return 'priority-medium';
    }
  };

  return (
    <div className="recent-updates">
      <h2 className="section-title">Recent Updates</h2>
      <div className="updates-table-container">
        <table className="updates-table">
          <thead>
            <tr>
              <th>Entry ID</th>
              <th>Date & Time</th>
              <th>Officer</th>
              <th>Case ID</th>
              <th>Description</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {updates.map((update) => (
              <tr key={update.id} className="update-row">
                <td className="entry-id">{update.id}</td>
                <td className="date-time">
                  <div className="date">{update.date}</div>
                  <div className="time">{update.time}</div>
                </td>
                <td className="officer-name">{update.officer}</td>
                <td className="case-id">
                  <button className="case-link">{update.caseId}</button>
                </td>
                <td className="description">{update.description}</td>
                <td className="priority">
                  <span className={`priority-badge ${getPriorityClass(update.priority)}`}>
                    {update.priority}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentUpdates;