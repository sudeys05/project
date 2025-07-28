import React, { useState } from 'react';
import './CaseTable.css';

const CaseTable = ({ cases, onViewCase }) => {
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedCases = [...cases].sort((a, b) => {
    if (!sortField) return 0;
    
    let aValue = a[sortField];
    let bValue = b[sortField];
    
    if (sortField === 'dateOpened') {
      aValue = new Date(aValue);
      bValue = new Date(bValue);
    }
    
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Open': return 'status-open';
      case 'In Progress': return 'status-progress';
      case 'Closed': return 'status-closed';
      case 'On Hold': return 'status-hold';
      default: return '';
    }
  };

  const getPriorityBadgeClass = (priority) => {
    switch (priority) {
      case 'Low': return 'priority-low';
      case 'Medium': return 'priority-medium';
      case 'High': return 'priority-high';
      case 'Critical': return 'priority-critical';
      default: return '';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="case-table-container">
      <table className="case-table">
        <thead>
          <tr>
            <th onClick={() => handleSort('entryId')} className="sortable">
              Entry ID
              {sortField === 'entryId' && (
                <span className="sort-indicator">{sortDirection === 'asc' ? '↑' : '↓'}</span>
              )}
            </th>
            <th onClick={() => handleSort('caseId')} className="sortable">
              Case ID
              {sortField === 'caseId' && (
                <span className="sort-indicator">{sortDirection === 'asc' ? '↑' : '↓'}</span>
              )}
            </th>
            <th onClick={() => handleSort('title')} className="sortable">
              Title
              {sortField === 'title' && (
                <span className="sort-indicator">{sortDirection === 'asc' ? '↑' : '↓'}</span>
              )}
            </th>
            <th>Status</th>
            <th>Priority</th>
            <th onClick={() => handleSort('assignedOfficer')} className="sortable">
              Assigned Officer
              {sortField === 'assignedOfficer' && (
                <span className="sort-indicator">{sortDirection === 'asc' ? '↑' : '↓'}</span>
              )}
            </th>
            <th onClick={() => handleSort('dateOpened')} className="sortable">
              Date Opened
              {sortField === 'dateOpened' && (
                <span className="sort-indicator">{sortDirection === 'asc' ? '↑' : '↓'}</span>
              )}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedCases.map((caseItem) => (
            <tr key={caseItem.entryId} className="case-row" onClick={() => onViewCase(caseItem)}>
              <td className="entry-id">{caseItem.entryId}</td>
              <td className="case-id">
                <span className="case-link">{caseItem.caseId}</span>
              </td>
              <td className="case-title">{caseItem.title}</td>
              <td>
                <span className={`status-badge ${getStatusBadgeClass(caseItem.status)}`}>
                  {caseItem.status}
                </span>
              </td>
              <td>
                <span className={`priority-badge ${getPriorityBadgeClass(caseItem.priority)}`}>
                  {caseItem.priority}
                </span>
              </td>
              <td className="officer-name">{caseItem.assignedOfficer}</td>
              <td className="date-opened">{formatDate(caseItem.dateOpened)}</td>
              <td className="actions">
                <button 
                  className="action-btn view-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewCase(caseItem);
                  }}
                >
                  View
                </button>
                <button 
                  className="action-btn edit-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('Edit case:', caseItem.caseId);
                  }}
                >
                  Edit
                </button>
                <button 
                  className="action-btn archive-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('Archive case:', caseItem.caseId);
                  }}
                >
                  Archive
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {sortedCases.length === 0 && (
        <div className="no-cases">
          <p>No cases found matching your filters.</p>
        </div>
      )}
    </div>
  );
};

export default CaseTable;