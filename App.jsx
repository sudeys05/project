import { useState } from 'react'
import Header from './components/Layout/Header/Header.jsx'
import Sidebar from './components/Layout/Sidebar/Sidebar.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Cases from './components/Cases/Cases.jsx'
import './App.css'

function App() {
  const [activeView, setActiveView] = useState('dashboard')

  const handleSidebarItemClick = (itemId) => {
    setActiveView(itemId)
  }

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />
      case 'cases':
        return <Cases />
      case 'arrest':
        return <div className="placeholder-content">
          <h1>Arrest Management</h1>
          <p>Arrest management interface coming soon...</p>
        </div>
      case 'profile':
        return <div className="placeholder-content">
          <h1>Profile</h1>
          <p>Profile management interface coming soon...</p>
        </div>
      case 'message':
        return <div className="placeholder-content">
          <h1>Messages</h1>
          <p>Message center coming soon...</p>
        </div>
      case 'evidence':
        return <div className="placeholder-content">
          <h1>Evidence Management</h1>
          <p>Evidence tracking interface coming soon...</p>
        </div>
      case 'media':
        return <div className="placeholder-content">
          <h1>Media Library</h1>
          <p>Media management interface coming soon...</p>
        </div>
      case 'updates':
        return <div className="placeholder-content">
          <h1>System Updates</h1>
          <p>Updates and notifications coming soon...</p>
        </div>
      case 'entry':
        return <div className="placeholder-content">
          <h1>Data Entry</h1>
          <p>Data entry interface coming soon...</p>
        </div>
      default:
        return <Dashboard />
    }
  }
  return (
    <div className="app">
      <Header />
      <Sidebar activeItem={activeView} onItemClick={handleSidebarItemClick} />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  )
}

export default App
