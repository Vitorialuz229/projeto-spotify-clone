import React, { useEffect } from 'react';

interface MainProps {
  isDarkMode: boolean;
}

const Main: React.FC<MainProps> = ({ isDarkMode }) => {
  useEffect(() => {
  
  }, [isDarkMode]);

  return (
    <div className={`flex rounded-lg mx-3 px-4 pt-8 pb-5 flex-col relative ${isDarkMode ? 'text-white bg-neutral-900' : 'text-black bg-neutral-200'}`}>
      <h1 className="text-xl font-bold hover:underline">
        Artistas populares
      </h1>
      <div className="flex flex-wrap items-center justify-start space-x-4 space-y-4 mt-4">
        {/* Example Artist */}
        <div className="flex flex-col">
          <img
            src="URL_DA_IMAGEM"
            alt="Artista"
            className="h-36 w-36 rounded-full"
          />
          <h2 className="text-base font-medium text-left hover:underline">
            Nome do Artista
          </h2>
          <p className="text-gray-400 text-sm text-left">Artista</p>
        </div>
         <div className="absolute top-5 right-6">
          <h3 className={`font-bold text-sm  hover:underline ${isDarkMode ? 'text-gray-400' : 'text-gray-900'}`}>Mostrar tudo</h3>
        </div>
      </div>
    </div>
  );
};

export default Main;
