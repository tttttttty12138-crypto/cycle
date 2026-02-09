
import React from 'react';
import { Page } from '../types';
import { Recycle, UserCircle } from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  userPoints: number;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage, userPoints }) => {
  const navItems = [
    { id: Page.Home, label: '首页' },
    { id: Page.Market, label: '二手交易' },
    { id: Page.Knowledge, label: '知识共享' },
    { id: Page.Errands, label: '跑腿互助' },
    { id: Page.Points, label: '积分中心' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => setCurrentPage(Page.Home)}
          >
            <div className="bg-navy-900 p-2 rounded-lg mr-2 group-hover:scale-110 transition-transform">
              <Recycle className="text-vibrant-orange w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-navy-900">
              Sycle<span className="text-vibrant-orange">.</span>
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-medium transition-colors hover:text-vibrant-orange ${
                  currentPage === item.id ? 'text-vibrant-orange' : 'text-gray-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center bg-navy-50 px-3 py-1 rounded-full border border-navy-100">
              <span className="text-xs text-navy-600 mr-2 font-semibold">豆豆</span>
              <span className="text-sm font-bold text-navy-900">{userPoints}</span>
            </div>
            <button 
              onClick={() => setCurrentPage(Page.Profile)}
              className={`p-2 rounded-full transition-all ${
                currentPage === Page.Profile ? 'bg-navy-100 text-navy-900' : 'text-gray-400 hover:text-navy-900'
              }`}
            >
              <UserCircle className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
