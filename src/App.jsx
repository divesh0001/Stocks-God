import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Signup from "./components/Signup";
import StocksNews from "./components/StocksNews";
import Ipogmp from "./components/Ipogmp";
import DividendCalendar from "./components/DividendCalendar";
import StockPrediction from "./components/stockprediction";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [backendData, setBackendData] = useState(null);

  // Fetch data from Flask API on page load
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/data") // Update with your Flask API URL
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
        toast.success("Connected to Flask Backend! ✅");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        toast.error("Failed to connect to Flask Backend ❌");
      });
  }, []);

  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/dividend-calendar" element={<DividendCalendar />} />
        <Route path="/stock-prediction" element={<StockPrediction backendData={backendData} />} />
        <Route path="/stocks-news" element={<StocksNews />} />
        <Route path="/ipo-gmp" element={<Ipogmp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={
          <>
            <Hero />
            <Collaboration />
            <Benefits />
            <Footer />
          </>
        } />
      </Routes>
      <ButtonGradient />
    </div>
  );
};

export default App;