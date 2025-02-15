import React, { PropsWithChildren } from "react";
import Header from "../components/Header";
import { useTheme } from "../context/ThemeContext";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? "bg-black" : "bg-white"}`}>
      <Header />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
