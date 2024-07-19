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
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';

const App = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Routes>
      <Route path="/dividend-calendar" element={<DividendCalendar />} />
        <Route path="/stock-prediction" element={<StockPrediction />} />
        <Route path="/stocks-news" element={<StocksNews />} />
        <Route path="/ipo-gmp" element={<Ipogmp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={
          <>
            <Hero />
            <Collaboration />
            <Benefits />
            
            {/* <Services />
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
