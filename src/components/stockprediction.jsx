import React, { useState } from "react";

const StockPrediction = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [prediction, setPrediction] = useState(null);

  const mockPredictionData = {
    currentPrice: '₹120',
    weekly: '₹130',
    monthly: '₹140',
    yearly: '₹180',
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Simulate fetching prediction based on the search term
    // In a real application, you would call an API to get the prediction data
    setPrediction(mockPredictionData);
  };

  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className="text-3xl font-bold text-center text-white mb-8">Stocks Predictor</h1>
      <p className="text-center text-purple-300 mb-8">This is the Stocks predictor page.</p>
      <form onSubmit={handleSearch} className="flex justify-center mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter company name"
          className="w-full max-w-md p-2 rounded-md border border-gray-300"
        />
        <button
          type="submit"
          className="ml-4 p-2 bg-purple-600 text-white rounded-md"
        >
          Search
        </button>
      </form>
      {prediction && (
        <div className="bg-purple-800 text-white rounded-md shadow-md p-4 max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">Prediction for {searchTerm}</h2>
          <div className="border-b border-purple-400 pb-2 mb-2">
            <p><strong>Current Price:</strong> {prediction.currentPrice}</p>
          </div>
          <div className="border-b border-purple-400 pb-2 mb-2">
            <p><strong>Weekly Target:</strong> {prediction.weekly}</p>
          </div>
          <div className="border-b border-purple-400 pb-2 mb-2">
            <p><strong>Monthly Target:</strong> {prediction.monthly}</p>
          </div>
          <div className="pb-2">
            <p><strong>Yearly Target:</strong> {prediction.yearly}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StockPrediction;
