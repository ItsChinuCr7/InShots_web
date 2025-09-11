import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CategoryNav from "./components/CategoryNav";
import NewsFeed from "./components/NewsFeed";
import { Toaster } from "./components/ui/toaster";
import { categories } from "./data/mockNews";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setShowMobileMenu(false);
  };

  const handleMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleSearchClick = () => {
    // Mock search functionality
    console.log("Search clicked");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onMenuClick={handleMenuClick}
        onSearchClick={handleSearchClick}
      />
      
      <CategoryNav 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      
      <main className="pb-6">
        <NewsFeed activeCategory={activeCategory} />
      </main>
      
      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="bg-white w-64 h-full p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Menu</h2>
              <button 
                onClick={() => setShowMobileMenu(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                    activeCategory === category.id
                      ? 'bg-red-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
