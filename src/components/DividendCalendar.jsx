import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'; // Import the CSS for the calendar

const DividendCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [dividendStocks, setDividendStocks] = useState([]);

  const onChange = (newDate) => {
    setDate(newDate);
    // Here you would typically fetch the dividend stocks for the selected date from your data source
    // For demonstration, let's assume a static list for selected dates
    const selectedDate = newDate.toISOString().slice(0, 10); // Format date as YYYY-MM-DD
    const mockDividends = {
      "2024-07-15": ["Company A", "Company B", "Company C"],
      "2024-07-20": ["Company X", "Company Y"],
      // Add more mock data as needed
    };
    const stocks = mockDividends[selectedDate] || [];
    setDividendStocks(stocks);
  };

  // Custom tile content function to style each date
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dayOfWeek = date.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // 0 is Sunday, 6 is Saturday

      // Return different styling based on weekend or weekday
      return (
        <div className={`text-center text-xs pt-1 rounded-full ${isWeekend ? 'bg-red-100' : 'bg-purple-200'}`}>
          {date.getDate()}
        </div>
      );
    }
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-2 gap-4">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-center text-white">Dividend Calendar</h1>
        <p className="text-lg mb-6 text-center text-white">Explore upcoming dividend dates.</p>
        <div className="bg-purple-800 rounded-lg shadow-lg p-6">
          <Calendar
            onChange={onChange}
            value={date}
            className="react-calendar"
            tileContent={tileContent}
          />
        </div>
        <p className="text-sm text-center mt-4 text-white">
          Click on a date to view details.
        </p>
      </div>
      <div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-bold mb-2">Dividends for {date.toLocaleDateString()}</h2>
          {dividendStocks.length > 0 ? (
            <ul className="list-disc list-inside">
              {dividendStocks.map((stock, index) => (
                <li key={index}>{stock}</li>
              ))}
            </ul>
          ) : (
            <p>No dividends found for selected date.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DividendCalendar;
