import React from 'react';

const CategoryNav = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="bg-white shadow-sm border-b sticky top-16 z-40">
      <div className="max-w-6xl mx-auto">
        <div className="flex overflow-x-auto scrollbar-hide py-3 px-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex-shrink-0 px-4 py-2 mx-1 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-red-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-1">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;