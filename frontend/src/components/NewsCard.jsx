import React from 'react';
import { Card } from './ui/card';
import { Share2, ExternalLink, Clock } from 'lucide-react';

const NewsCard = ({ news, onShare }) => {
  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      {/* Image Section */}
      <div className="relative h-48 bg-gray-100">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&q=80';
          }}
        />
        <div className="absolute top-3 right-3">
          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium uppercase">
            {news.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
          {news.title}
        </h3>
        
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {news.content}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>{news.time}</span>
          </div>
          <span className="font-medium">{news.source}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <span className="text-xs text-gray-600">by {news.author}</span>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={() => onShare(news)}
              className="flex items-center space-x-1 text-gray-600 hover:text-red-500 transition-colors duration-200"
            >
              <Share2 className="w-4 h-4" />
              <span className="text-xs">Share</span>
            </button>
            
            <button className="flex items-center space-x-1 text-gray-600 hover:text-red-500 transition-colors duration-200">
              <ExternalLink className="w-4 h-4" />
              <span className="text-xs">Read</span>
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NewsCard;