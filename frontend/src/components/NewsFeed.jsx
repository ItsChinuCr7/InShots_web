import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import { mockNews } from '../data/mockNews';
import { useToast } from '../hooks/use-toast';

const NewsFeed = ({ activeCategory }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      if (activeCategory === 'all') {
        setNews(mockNews.all);
      } else {
        const filteredNews = mockNews.all.filter(
          item => item.category === activeCategory
        );
        setNews(filteredNews);
      }
      setLoading(false);
    }, 300);
  }, [activeCategory]);

  const handleShare = (newsItem) => {
    // Mock share functionality
    if (navigator.share) {
      navigator.share({
        title: newsItem.title,
        text: newsItem.content,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers without Web Share API
      navigator.clipboard.writeText(`${newsItem.title}\n\n${newsItem.content}\n\nRead more at: ${window.location.href}`);
      toast({
        title: "Link copied!",
        description: "News article link copied to clipboard.",
      });
    }
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 h-48 rounded-t-xl"></div>
              <div className="bg-white p-4 rounded-b-xl shadow-lg">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded mb-4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <div className="text-gray-500">
          <h3 className="text-lg font-medium mb-2">No news available</h3>
          <p className="text-sm">Check back later for updates in this category.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((newsItem) => (
          <NewsCard
            key={newsItem.id}
            news={newsItem}
            onShare={handleShare}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;