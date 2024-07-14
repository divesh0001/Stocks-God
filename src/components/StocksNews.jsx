import React, { useEffect, useState } from 'react';
import './stocksnews.css'; // Import your CSS file for styling

const StocksNews = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const response = await fetch('http://localhost:5000/bbc-news'); // Update with your server endpoint
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

        const items = xmlDoc.getElementsByTagName('item');
        const news = Array.from(items).map(item => ({
          title: item.querySelector('title').textContent,
          description: item.querySelector('description').textContent,
          link: item.querySelector('link').textContent,
          thumbnail: item.querySelector('media\\:thumbnail')?.getAttribute('url') || ''
        }));

        setNewsItems(news);
      } catch (error) {
        console.error('Error fetching and parsing RSS feed:', error);
      }
    };

    fetchRSS();
  }, []);

  return (
    <div className="news-container">
      <h2>BBC News RSS Feed</h2>
      {newsItems.map((item, index) => (
        <div key={index} className="news-item">
          <h3><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></h3>
          <p>{item.description}</p>
          {item.thumbnail && <img src={item.thumbnail} alt="Thumbnail" />}
        </div>
      ))}
    </div>
  );
};

export default StocksNews;
