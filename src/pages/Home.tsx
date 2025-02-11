import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Main from './components/main';

export function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Main isDarkMode={isDarkMode} />
    </div>
  );
}
