import { useState } from "react";
import { Line } from "react-chartjs-2";
import Select from "react-select";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

/*
  Expanded list of symbols from Tiingo.
  This list includes popular companies. Note that if a user types a company not available in this list,
  react-select will show no option instead of displaying any unmatched suggestion.
*/
const options = [
    { value: "AAPL", label: "Apple Inc. (AAPL)" },
    { value: "GOOGL", label: "Alphabet Inc. (GOOGL)" },
    { value: "MSFT", label: "Microsoft Corporation (MSFT)" },
    { value: "AMZN", label: "Amazon.com Inc. (AMZN)" },
    { value: "TSLA", label: "Tesla Inc. (TSLA)" },
    { value: "META", label: "Meta Platforms Inc. (META)" },
    { value: "NFLX", label: "Netflix Inc. (NFLX)" },
    { value: "NVDA", label: "NVIDIA Corporation (NVDA)" },
    { value: "BRK.B", label: "Berkshire Hathaway Inc. (BRK.B)" },
    { value: "JPM", label: "JPMorgan Chase & Co. (JPM)" },
    { value: "V", label: "Visa Inc. (V)" },
    { value: "WMT", label: "Walmart Inc. (WMT)" },
    { value: "BAC", label: "Bank of America Corporation (BAC)" },
    { value: "DIS", label: "The Walt Disney Company (DIS)" },
    { value: "KO", label: "The Coca-Cola Company (KO)" },
    { value: "PEP", label: "PepsiCo Inc. (PEP)" },
    { value: "INTC", label: "Intel Corporation (INTC)" },
    { value: "CSCO", label: "Cisco Systems Inc. (CSCO)" },
    { value: "PFE", label: "Pfizer Inc. (PFE)" },
    { value: "MRK", label: "Merck & Co. Inc. (MRK)" },
    { value: "ORCL", label: "Oracle Corporation (ORCL)" },
    { value: "CRM", label: "Salesforce.com Inc. (CRM)" },
    { value: "ADBE", label: "Adobe Inc. (ADBE)" },
    { value: "IBM", label: "IBM (IBM)" },
    { value: "QCOM", label: "QUALCOMM Inc. (QCOM)" },
    { value: "SAP", label: "SAP SE (SAP)" },
    { value: "AMD", label: "Advanced Micro Devices Inc. (AMD)" },
    { value: "TWTR", label: "Twitter Inc. (TWTR)" },
    { value: "SNAP", label: "Snap Inc. (SNAP)" },
    { value: "UBER", label: "Uber Technologies Inc. (UBER)" },
    { value: "LYFT", label: "Lyft Inc. (LYFT)" },
    { value: "SHOP", label: "Shopify Inc. (SHOP)" },
    { value: "SQ", label: "Block Inc. (SQ)" },
    { value: "ZM", label: "Zoom Video Communications Inc. (ZM)" },
    { value: "DOCU", label: "DocuSign Inc. (DOCU)" },
    { value: "ROKU", label: "Roku Inc. (ROKU)" },
    { value: "F", label: "Ford Motor Company (F)" },
    { value: "GM", label: "General Motors Company (GM)" },
    { value: "NKE", label: "Nike Inc. (NKE)" },
  { value: "MRNA", label: "Moderna Inc. (MRNA)" },
  { value: "BIDU", label: "Baidu Inc. (BIDU)" },
  { value: "COST", label: "Costco Wholesale Corporation (COST)" },
  { value: "T", label: "AT&T Inc. (T)" },
  { value: "VZ", label: "Verizon Communications Inc. (VZ)" },
  { value: "CVX", label: "Chevron Corporation (CVX)" },
  { value: "XOM", label: "Exxon Mobil Corporation (XOM)" },
  { value: "WFC", label: "Wells Fargo & Company (WFC)" },
  { value: "C", label: "Citigroup Inc. (C)" },
  { value: "GS", label: "The Goldman Sachs Group (GS)" },
  { value: "AXP", label: "American Express Company (AXP)" },
  { value: "BK", label: "The Bank of New York Mellon Corporation (BK)" },
  { value: "TMO", label: "Thermo Fisher Scientific Inc. (TMO)" },
  { value: "ABT", label: "Abbott Laboratories (ABT)" },
  { value: "LLY", label: "Eli Lilly and Company (LLY)" },
  { value: "UNH", label: "UnitedHealth Group Incorporated (UNH)" },
  { value: "CI", label: "Cigna Corporation (CI)" },
  { value: "AON", label: "Aon PLC (AON)" },
  { value: "MMC", label: "Marsh & McLennan Companies (MMC)" },
  { value: "WLTW", label: "Willis Towers Watson (WLTW)" },
  { value: "DUK", label: "Duke Energy Corporation (DUK)" },
  { value: "SO", label: "The Southern Company (SO)" },
  { value: "NEE", label: "NextEra Energy Inc. (NEE)" },
  { value: "EXC", label: "Exelon Corporation (EXC)" },
  { value: "AEP", label: "American Electric Power (AEP)" },
  { value: "PLD", label: "Prologis Inc. (PLD)" },
  { value: "AMT", label: "American Tower Corporation (AMT)" },
  { value: "CCI", label: "Crown Castle International Corp. (CCI)" },
  { value: "SPG", label: "Simon Property Group Inc. (SPG)" },
  { value: "WELL", label: "Welltower Inc. (WELL)" },
  { value: "EQIX", label: "Equinix Inc. (EQIX)" },
  { value: "CBRE", label: "CBRE Group Inc. (CBRE)" },
  { value: "VTR", label: "Ventas Inc. (VTR)" },
  { value: "O", label: "Realty Income Corporation (O)" },
  { value: "EQR", label: "Equity Residential (EQR)" },
  { value: "AVB", label: "AvalonBay Communities Inc. (AVB)" },
  { value: "MPW", label: "Medical Properties Trust (MPW)" },
  { value: "IRM", label: "Iron Mountain Incorporated (IRM)" },
  { value: "PH", label: "Parker-Hannifin Corporation (PH)" },
  { value: "HON", label: "Honeywell International Inc. (HON)" },
  { value: "GE", label: "General Electric Company (GE)" },
  { value: "MMM", label: "3M Company (MMM)" },
  { value: "CAT", label: "Caterpillar Inc. (CAT)" },
  { value: "DE", label: "Deere & Company (DE)" },
  { value: "DOW", label: "Dow Inc. (DOW)" },
  { value: "LMT", label: "Lockheed Martin Corporation (LMT)" },
  { value: "BA", label: "The Boeing Company (BA)" },
  { value: "GD", label: "General Dynamics Corporation (GD)" },
  { value: "NOC", label: "Northrop Grumman Corporation (NOC)" },
  { value: "RTX", label: "Raytheon Technologies Corporation (RTX)" },
  { value: "ISRG", label: "Intuitive Surgical Inc. (ISRG)" },
  { value: "MTCH", label: "Match Group Inc. (MTCH)" },
  { value: "MAR", label: "Marriott International (MAR)" },
  { value: "HLT", label: "Hilton Worldwide Holdings Inc. (HLT)" },
  { value: "CCL", label: "Carnival Corporation (CCL)" },
  { value: "DAL", label: "Delta Air Lines Inc. (DAL)" },
  { value: "UAL", label: "United Airlines Holdings Inc. (UAL)" },
  { value: "LUV", label: "Southwest Airlines Co. (LUV)" },
  { value: "AAL", label: "American Airlines Group Inc. (AAL)" },
  { value: "GPS", label: "The Gap Inc. (GPS)" },
  { value: "MCD", label: "McDonald's Corporation (MCD)" }
  // Expand the list further as needed.
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#1e1e1e",
    borderColor: state.isFocused ? "#6b46c1" : "#4A5568",
    boxShadow: state.isFocused ? "0 0 0 1px #6b46c1" : null,
    "&:hover": { borderColor: "#6b46c1" },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
  input: (provided) => ({
    ...provided,
    color: "white",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#a0aec0",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#1e1e1e",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#6b46c1" : "#1e1e1e",
    color: "white",
    "&:hover": { backgroundColor: "#6b46c1" },
  }),
};

const StockPrediction = ({ backendData }) => {
  const [stock, setStock] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  // Update selected option and symbol when user uses the autocomplete.
  const handleSelectChange = (option) => {
    setSelectedOption(option);
    setStock(option.value);
  };
//http://127.0.0.1:5000/api/predict?symbol=${stock}
  const handlePredict = () => {
    if (!stock) {
      alert("Please select a stock symbol first.");
      return;
    }
    setLoading(true);
    fetch(`http://127.0.0.1:5000/api/predict?symbol=${stock}`)
      .then((response) => response.json())
      .then((data) => {
        setPrediction(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching prediction:", error);
        setLoading(false);
      });
  };

  const getChartData = () => {
    if (!prediction || !prediction.dates || !prediction.predicted_prices)
      return {};
    return {
      labels: prediction.dates,
      datasets: [
        {
          label: "Predicted Price",
          data: prediction.predicted_prices,
          fill: false,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          tension: 0.1,
        },
      ],
    };
  };

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">Stock Price Prediction</h1>
      
      <div className="mt-4 max-w-md mx-auto">
        <Select
          options={options}
          value={selectedOption}
          onChange={handleSelectChange}
          placeholder="Type company name or symbol (e.g., AAPL, GOOGL)"
          isSearchable
          styles={customStyles}
        />
      </div>

      <div className="mt-4">
        <button
          onClick={handlePredict}
          className="bg-blue-500 text-white p-2"
          disabled={!stock}
        >
          Predict
        </button>
      </div>

      {loading && <p className="mt-4">Loading...</p>}

      {prediction && !prediction.error && (
        <div className="mt-6">
          <div className="text-lg font-bold">
            <p>Current Price: {prediction.current_price}</p>
            <p>Price after 15 days: {prediction.price_after_15_days}</p>
            <p>Price after 30 days: {prediction.price_after_30_days}</p>
          </div>
          <p className="mt-4 italic">
            You can see the graph below for a brief 30-day prediction.
          </p>
          <div className="mt-6">
            <Line data={getChartData()} />
          </div>
        </div>
      )}

      {prediction && prediction.error && (
        <p className="mt-4 text-red-500">{prediction.error}</p>
      )}

      {backendData && (
        <p className="mt-4">Backend Message: {backendData.message}</p>
      )}
    </div>
  );
};

export default StockPrediction;