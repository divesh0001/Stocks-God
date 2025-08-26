import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './customCalendar.css'; // To add custom styles

// Replace with your EOD Historical Data API key!
const EOD_API_KEY = 'd2mr2bpr01qsk3op2j4gd2mr2bpr01qsk3op2j50'; 
const TICKERS = ['AAPL.US', 'MSFT.US', 'KO.US', 'T.US', 'VZ.US', 'JNJ.US', 'PG.US'];

const dividendsData = {
  '2024-07-20': [
    { companyName: "Sample Company 1", dividendAmount: "$5.00" },
    { companyName: "Sample Company 2", dividendAmount: "$2.50" },
  ],
  '2024-07-21': [
    { companyName: "Sample Company 3", dividendAmount: "$3.00" },
    { companyName: "Sample Company 4", dividendAmount: "$4.00" },
    { companyName: "Sample Company 5", dividendAmount: "$1.50" },
  ],
  '2024-07-22': [
    { companyName: "Sample Company 6", dividendAmount: "$3.00" },
    { companyName: "Sample Company 7", dividendAmount: "$4.00" },
    { companyName: "Sample Company 8", dividendAmount: "$1.50" },
  ],
  '2024-07-23': [
    { companyName: "Sample Company 9", dividendAmount: "$3.00" },
    { companyName: "Sample Company 10", dividendAmount: "$4.00" },
    { companyName: "Sample Company 11", dividendAmount: "$1.50" },
  ],
  '2024-07-24': [
    { companyName: "Sample Company 12", dividendAmount: "$3.00" },
    { companyName: "Sample Company 13", dividendAmount: "$4.00" },
    { companyName: "Sample Company 14", dividendAmount: "$1.50" },
  ],
  '2024-07-25': [
    { companyName: "Sample Company 15", dividendAmount: "$3.00" },
    { companyName: "Sample Company 16", dividendAmount: "$4.00" },
    { companyName: "Sample Company 17", dividendAmount: "$1.50" },
  ],
  // Add more data as needed
};

const DividendCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [dividendInfo, setDividendInfo] = useState([]);
  const [latestDividends, setLatestDividends] = useState([]);
  const [loadingDividends, setLoadingDividends] = useState(true);

  // Fetch latest dividends for selected tickers (right panel)
  useEffect(() => {
    async function fetchLatestDividends() {
      setLoadingDividends(true);
      const results = [];
      for (const symbol of TICKERS) {
        try {
          const url = `https://eodhistoricaldata.com/api/dividends/${symbol}?api_token=${EOD_API_KEY}&fmt=json`;
          const response = await fetch(url);
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            const latest = data[0]; // Latest dividend
            results.push({
              symbol: symbol.replace('.US', ''),
              dividend: latest.amount,
              exDate: latest.exDate,
              payDate: latest.payDate
            });
          } else {
            results.push({
              symbol: symbol.replace('.US', ''),
              dividend: 'N/A',
              exDate: 'N/A',
              payDate: 'N/A'
            });
          }
        } catch (e) {
          results.push({
            symbol: symbol.replace('.US', ''),
            dividend: 'Error',
            exDate: 'Error',
            payDate: 'Error'
          });
        }
      }
      setLatestDividends(results);
      setLoadingDividends(false);
    }

    fetchLatestDividends();
  }, []);

  const handleDateClick = (value) => {
    const dateString = value.toISOString().split('T')[0];
    const data = dividendsData[dateString] || [];
    setDividendInfo(data);
  };

  return (
    <div className="min-h-screen bg-black p-8 flex flex-col md:flex-row">
      {/* Calendar panel (left) */}
      <div className="w-full md:w-2/3 p-4">
        <h1 className="text-3xl font-bold text-center text-white mb-8">Dividend Calendar</h1>
        <h2 className="text-2xl font-normal text-white mb-4">Currently we have data for 20-25 July</h2>
        <Calendar
          onClickDay={handleDateClick}
          value={date}
          onChange={setDate}
          className="bg-purple-800 text-white rounded-md shadow-md p-4"
        />
        {dividendInfo.length > 0 && (
          <div className="bg-purple-800 text-white rounded-md shadow-md p-4 mt-4">
            <h2 className="text-2xl font-bold mb-4">Dividend Information</h2>
            {dividendInfo.map((info, index) => (
              <div key={index} className="border-b border-purple-400 pb-2 mb-2">
                <p><strong>Company Name:</strong> {info.companyName}</p>
                <p><strong>Dividend Amount:</strong> {info.dividendAmount}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Latest dividends (right) */}
      <div className="w-full md:w-1/3 bg-purple-800 text-white rounded-md shadow-md p-4 mt-4 md:mt-0 md:ml-2">
        <h2 className="text-2xl font-bold mb-4">Latest Stock Dividends</h2>
        {loadingDividends ? (
          <div>Loading latest dividends...</div>
        ) : (
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Symbol</th>
                <th className="text-left">Dividend</th>
                <th className="text-left">Ex-Dividend Date</th>
                <th className="text-left">Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {latestDividends.map((div, idx) => (
                <tr key={idx}>
                  <td>{div.symbol}</td>
                  <td>{div.dividend}</td>
                  <td>{div.exDate}</td>
                  <td>{div.payDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DividendCalendar;