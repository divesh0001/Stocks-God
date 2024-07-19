
import React from 'react';
import './stocksnews.css';

const newsData = [
  {
    title: "Budget 2024 news",
    content: "Defence budget increased by 10% in 2024",
    company: "Cochin Shipyard, HAL, BEL, BDL, GRSE, Garden Reach Shipbuilders & Engineers, Mazagon Dock Shipbuilders"
},
    {
        title: "Defense stock got order form government ",
        content: "Hindustan Aeronautics Ltd. recieves order worth Rs 537 crore",
        company: "HAL"
    },
    {
        title: "TCS profit falls",
        content: "TCS profit falls 7% to Rs 9,008 crore in Q2",
        company: "TCS"
    },
    
    // Add more news items here
];

const StocksNews = () => {
    return (
        <div className="news-container">
            {newsData.map((news, index) => (
                <div key={index} className="news-box">
                    <h2 className="news-title">{news.title}</h2>
                    <p className="news-content">{news.content}</p>
                    <p className="news-footer">Stocks to get Affected - <span className="company-name">{news.company}</span></p>
                </div>
            ))}
        </div>
    );
}

export default StocksNews;
