import React from 'react'
import { useTheme } from '../context/ThemeContext';

const Artists = () => {
  const { isDarkMode } = useTheme(); 
  
  return (
    <div  className={`flex mx-3 px-4 pt-8 pb-5 flex-col relative 
      first:rounded-t-lg last:rounded-b-lg
     ${isDarkMode ? "text-white bg-neutral-900" : "text-black bg-neutral-200"}`}
 >
      
    </div>
  )
}

export default Artists
