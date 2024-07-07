import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Login from "./components/Login"; // Import the Login component
import Signup from "./components/Signup"; // Import the Signup component
import StocksNews from "./components/StocksNews";
import Ipogmp from "./components/Ipogmp";
import DividendCalendar from "./components/DividendCalendar"; // Import the Dividend Calendar component
import StockPrediction from "./components/stockprediction"; 

const App = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Routes>
      <Route path="/Stocks-God/dividend-calendar" element={<DividendCalendar />} />
        <Route path="/Stocks-God/stock-prediction" element={<StockPrediction />} />
        <Route path="/Stocks-God/stocks-news" element={<StocksNews />} />
        <Route path="/Stocks-God/ipo-gmp" element={<Ipogmp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Stocks-God" element={
          <>
            <Hero />
            <Benefits />
            {/* <Collaboration />
            <Services />
            <Pricing />
            <Roadmap /> */}
            <Footer />
          </>
        } />
      </Routes>
      <ButtonGradient />
    </div>
  );
};

export default App;
