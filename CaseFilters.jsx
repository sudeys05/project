import React from 'react';
import './CaseFilters.css';

const CaseFilters = ({ filters, onFilterChange }) => {
  const handleFilterChange = (key, value) => {
    onFilterChange({
      ...filters,
      [key]: value
    });
  };

  const statusOptions = ['', 'Open', 'In Progress', 'Closed', 'On Hold'];
  const priorityOptions = ['', 'Low', 'Medium', 'High', 'Critical'];
  const officerOptions = ['', 'Officer Davis', 'Officer Johnson', 'Officer Smith', 'Officer Brown'];

  return (
    <div className="case-filters">
      <div className="filter-row">
        <div className="filter-group">
          <label>Status</label>
          <select
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="filter-select"
          >
            <option value="">All Status</option>
            {statusOptions.slice(1).map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Priority</label>
          <select
            value={filters.priority}
            onChange={(e) => handleFilterChange('priority', e.target.value)}
            className="filter-select"
          >
            <option value="">All Priority</option>
            {priorityOptions.slice(1).map(priority => (
              <option key={priority} value={priority}>{priority}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Date Opened</label>
          <input
            type="date"
            value={filters.dateRange.start}
            onChange={(e) => handleFilterChange('dateRange', { ...filters.dateRange, start: e.target.value })}
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label>Assigned Officer</label>
          <select
            value={filters.assignedOfficer}
            onChange={(e) => handleFilterChange('assignedOfficer', e.target.value)}
            className="filter-select"
          >
            <option value="">All Officers</option>
            {officerOptions.slice(1).map(officer => (
              <option key={officer} value={officer}>{officer}</option>
            ))}
          </select>
        </div>

        <div className="filter-group search-group">
          <label>Search</label>
          <input
            type="text"
            placeholder="Search by case ID, entry ID, officer, or title..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="filter-input search-input"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseFilters;