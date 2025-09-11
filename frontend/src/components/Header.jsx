import React from 'react';
import { Menu, Search, Bell } from 'lucide-react';

const Header = ({ onMenuClick, onSearchClick }) => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left: Menu & Logo */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onMenuClick}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 md:hidden"
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">in</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">
                inshorts
              </h1>
              <span className="text-xs text-gray-500 hidden sm:inline">
                stay informed
              </span>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center space-x-2">
            <button
              onClick={onSearchClick}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>

            <div className="hidden md:flex items-center space-x-3 ml-4">
              <button className="text-sm text-gray-600 hover:text-red-500 transition-colors duration-200">
                Read Now
              </button>
              <button className="text-sm text-gray-600 hover:text-red-500 transition-colors duration-200">
                Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;