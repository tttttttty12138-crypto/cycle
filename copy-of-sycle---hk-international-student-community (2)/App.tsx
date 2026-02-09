
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Market from './pages/Market';
import Knowledge from './pages/Knowledge';
import Errands from './pages/Errands';
import Points from './pages/Points';
import Profile from './pages/Profile';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [userPoints, setUserPoints] = useState(1248);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home setCurrentPage={setCurrentPage} onVerify={() => setCurrentPage(Page.Profile)} />;
      case Page.Market:
        return <Market />;
      case Page.Knowledge:
        return <Knowledge />;
      case Page.Errands:
        return <Errands />;
      case Page.Points:
        return <Points />;
      case Page.Profile:
        return <Profile />;
      default:
        return <Home setCurrentPage={setCurrentPage} onVerify={() => setCurrentPage(Page.Profile)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-vibrant-orange selection:text-white">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        userPoints={userPoints} 
      />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />
      
      {/* Toast / Notification Container would go here */}
    </div>
  );
};

export default App;
