import React from 'react';
import Main from './Main';
import { useTheme } from '../context/ThemeContext';

export function Home() {
  const { isDarkMode } = useTheme(); 

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <Main />
    </div>
  );
}