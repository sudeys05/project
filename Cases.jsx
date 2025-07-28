import React, { useState } from 'react';
import CaseFilters from './CaseFilters/CaseFilters.jsx';
import CaseTable from './CaseTable/CaseTable.jsx';
import CaseDetail from './CaseDetail/CaseDetail.jsx';
import './Cases.css';

const Cases = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [filters, setFilters] = useState({
    status: '',
    priority: '',
    dateRange: { start: '', end: '' },
    assignedOfficer: '',
    search: ''
  });

  const [cases] = useState([
    {
      entryId: 'U10001',
      caseId: 'CASE-2024-003',
      title: 'Burglary at Elm St.',
      status: 'Open',
      priority: 'High',
      assignedOfficer: 'Officer Davis',
      dateOpened: '2025-01-15',
      description: 'Break-in reported at residential property on Elm Street. Multiple items stolen including electronics and jewelry.'
    },
    {
      entryId: 'U10002',
      caseId: 'CASE-2024-004',
      title: 'Vehicle Theft Downtown',
      status: 'In Progress',
      priority: 'Critical',
      assignedOfficer: 'Officer Johnson',
      dateOpened: '2025-01-14',
      description: 'Red sedan stolen from downtown parking garage. Security footage available.'
    },
    {
      entryId: 'U10003',
      caseId: 'CASE-2024-005',
      title: 'Vandalism at Park',
      status: 'Closed',
      priority: 'Low',
      assignedOfficer: 'Officer Smith',
      dateOpened: '2025-01-10',
      description: 'Graffiti and property damage reported at Central Park. Suspect identified and charged.'
    },
    {
      entryId: 'U10004',
      caseId: 'CASE-2024-006',
      title: 'Assault Case',
      status: 'On Hold',
      priority: 'Medium',
      assignedOfficer: 'Officer Brown',
      dateOpened: '2025-01-12',
      description: 'Physical altercation between two individuals. Awaiting witness statements.'
    }
  ]);

  const handleAddCase = () => {
    console.log('Add new case');
  };

  const handleViewCase = (caseData) => {
    setSelectedCase(caseData);
  };

  const handleBackToList = () => {
    setSelectedCase(null);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredCases = cases.filter(caseItem => {
    if (filters.status && caseItem.status !== filters.status) return false;
    if (filters.priority && caseItem.priority !== filters.priority) return false;
    if (filters.assignedOfficer && caseItem.assignedOfficer !== filters.assignedOfficer) return false;
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      return (
        caseItem.caseId.toLowerCase().includes(searchLower) ||
        caseItem.entryId.toLowerCase().includes(searchLower) ||
        caseItem.title.toLowerCase().includes(searchLower) ||
        caseItem.assignedOfficer.toLowerCase().includes(searchLower)
      );
    }
    return true;
  });

  if (selectedCase) {
    return <CaseDetail case={selectedCase} onBack={handleBackToList} />;
  }

  return (
    <div className="cases">
      <div className="cases-header">
        <div className="cases-title-section">
          <h1>CASES</h1>
          <span className="cases-date">Last updated: {new Date().toLocaleDateString()}</span>
        </div>
        <button className="add-case-btn" onClick={handleAddCase}>
          + Add Case
        </button>
      </div>

      <CaseFilters filters={filters} onFilterChange={handleFilterChange} />
      
      <CaseTable cases={filteredCases} onViewCase={handleViewCase} />
    </div>
  );
};

export default Cases;