import { Link, useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useState } from "react";

import stocksgod from "../asset/Stocks God.png"; // Correct path to your image
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const location = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation((prev) => !prev); // Toggle openNavigation state
    if (!openNavigation) {
      disablePageScroll(); // Disable page scroll when opening navigation
    } else {
      enablePageScroll(); // Enable page scroll when closing navigation
    }
  };

  const handleClick = () => {
    enablePageScroll(); // Always enable page scroll when a link is clicked
    setOpenNavigation(false); // Close the navigation menu
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link to="/" className="flex items-center w-[12rem] xl:mr-8">
          <img src={stocksgod} width={50} height={30} alt="Stocks God" />
          <span className="ml-2 text-white text-xl font-semibold">Stocks God</span>
        </Link>

        <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === location.pathname ? "z-2 lg:text-n-1" : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <Link to="/signup" className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block">
          New account? Sign up
        </Link>
        <Button className="hidden lg:flex" to="/login">
          Sign in
        </Button>

        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;