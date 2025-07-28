import React from 'react';
import './CaseDetail.css';

const CaseDetail = ({ case: caseData, onBack }) => {
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
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="case-detail">
      <div className="case-detail-header">
        <button className="back-btn" onClick={onBack}>
          ← Back to Cases
        </button>
        <div className="case-detail-title">
          <h1>{caseData.caseId}</h1>
          <div className="case-badges">
            <span className={`status-badge ${getStatusBadgeClass(caseData.status)}`}>
              {caseData.status}
            </span>
            <span className={`priority-badge ${getPriorityBadgeClass(caseData.priority)}`}>
              {caseData.priority}
            </span>
          </div>
        </div>
      </div>

      <div className="case-detail-content">
        <div className="case-info-grid">
          <div className="case-info-section">
            <h3>Case Information</h3>
            <div className="info-item">
              <label>Entry ID:</label>
              <span>{caseData.entryId}</span>
            </div>
            <div className="info-item">
              <label>Title:</label>
              <span>{caseData.title}</span>
            </div>
            <div className="info-item">
              <label>Assigned Officer:</label>
              <span>{caseData.assignedOfficer}</span>
            </div>
            <div className="info-item">
              <label>Date Opened:</label>
              <span>{formatDate(caseData.dateOpened)}</span>
            </div>
          </div>

          <div className="case-narrative-section">
            <h3>Case Narrative</h3>
            <div className="narrative-content">
              <p>{caseData.description}</p>
            </div>
          </div>
        </div>

        <div className="case-sections">
          <div className="section">
            <h3>Linked Evidence</h3>
            <div className="evidence-list">
              <div className="evidence-item">
                <span className="evidence-type">📷</span>
                <div className="evidence-info">
                  <div className="evidence-name">Security Camera Footage</div>
                  <div className="evidence-date">Added: {formatDate(caseData.dateOpened)}</div>
                </div>
              </div>
              <div className="evidence-item">
                <span className="evidence-type">📄</span>
                <div className="evidence-info">
                  <div className="evidence-name">Witness Statement</div>
                  <div className="evidence-date">Added: {formatDate(caseData.dateOpened)}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>Updates Timeline</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">{formatDate(caseData.dateOpened)}</div>
                <div className="timeline-content">
                  <div className="timeline-title">Case Opened</div>
                  <div className="timeline-description">Initial report filed by {caseData.assignedOfficer}</div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">{formatDate(caseData.dateOpened)}</div>
                <div className="timeline-content">
                  <div className="timeline-title">Evidence Collected</div>
                  <div className="timeline-description">Security footage and witness statements obtained</div>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>Suspects / Arrest Info</h3>
            <div className="suspects-list">
              <div className="suspect-item">
                <div className="suspect-info">
                  <div className="suspect-name">No suspects identified</div>
                  <div className="suspect-status">Investigation ongoing</div>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>Officer Comments</h3>
            <div className="comments-section">
              <div className="comment-item">
                <div className="comment-header">
                  <span className="comment-author">{caseData.assignedOfficer}</span>
                  <span className="comment-date">{formatDate(caseData.dateOpened)}</span>
                </div>
                <div className="comment-content">
                  Initial investigation shows signs of forced entry. Canvassing neighborhood for additional witnesses.
                </div>
              </div>
              <div className="add-comment">
                <textarea placeholder="Add a comment..." className="comment-input"></textarea>
                <button className="add-comment-btn">Add Comment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetail;