import React, { useEffect, useState } from 'react';

const API_KEY = 'pub_564c3316cb4f49a98793614a40f2e186'; // Replace with your NewsData.io API key
const QUERY = 'stock market OR stocks OR investing OR finance';

function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      setError('');
      try {
        const response = await fetch(
          `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=${encodeURIComponent(QUERY)}&language=en&category=business,top`
        );
        const data = await response.json();
        if (data && data.results) {
          setArticles(data.results);
        } else {
          setError('No news found.');
        }
      } catch (err) {
        setError('Failed to fetch news.');
      }
      setLoading(false);
    }

    fetchNews();
  }, []);

  if (loading) return <div>Loading news...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Latest Stock Market News</h2>
      <ul>
        {articles.map((article, idx) => (
          <li key={idx} style={{marginBottom: '1em', borderBottom: '1px solid #eee', paddingBottom: '1em'}}>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              <strong>{article.title}</strong>
            </a>
            <div>
              <small>
                {article.pubDate ? new Date(article.pubDate).toLocaleString() : ''}
                {article.source_id ? ` | Source: ${article.source_id}` : ''}
              </small>
            </div>
            <p>{article.description && article.description.length > 200
              ? article.description.slice(0,200) + '...'
              : article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;