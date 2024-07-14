import React, { useEffect } from 'react';
import './stocksnews.css';

const StocksNews = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//widget.tagembed.com/embed.min.js";
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="stocks-news">
      <h2>Stock Market News</h2>
      <div className="tagembed-widget" style={{ width: '100%', height: '100%' }} data-widget-id="156517" view-url="https://widget.tagembed.com/156517"></div>
    </div>
  );
};

export default StocksNews;
