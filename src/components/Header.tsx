import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import LogoSpotifyLight from "./../assets/logo-light.png";
import LogoSpotifyDark from "./../assets/logo-dark.png";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header
      className={`flex w-full justify-between items-center px-6 py-3 ${isDarkMode ? "text-white bg-black" : "text-black bg-white"}`}
    >
      <img
        src={isDarkMode ? LogoSpotifyDark : LogoSpotifyLight}
        alt="Logo Spotify"
        className="h-10"
      />
      <a
        href="/"
        className={`cursor-pointer text-2xl transition-transform duration-200 hover:scale-105 ${isDarkMode ? "hover:text-gray-300" : "hover:text-gray-700"}`}
      >
        Spotify
      </a>
      <div
        role="button"
        aria-label="Alternar tema"
        className={`w-[70px] h-[30px] rounded-full relative cursor-pointer transition-all duration-300 ${isDarkMode ? "bg-gray-900" : "bg-gray-300"}`}
        onClick={toggleTheme}
      >
        <div
          className={`w-[28px] h-[28px] bg-white rounded-full absolute top-[1px] transition-all duration-300 ease-in-out ${isDarkMode ? "translate-x-[38px]" : "translate-x-[1px]"}`}
        >
          {isDarkMode ? (
            <FaMoon className="text-gray-800 text-[18px] absolute left-[4px] top-[4px]" />
          ) : (
            <FaSun className="text-yellow-500 text-[18px] absolute left-[4px] top-[4px]" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
