import React, { useEffect, useState } from "react";
import { Songs } from "../model/Songs";
import { songsArray } from "../server/songs";
import { useTheme } from "../context/ThemeContext";

const ArtistSongs: React.FC<{ artistName: string }> = ({ artistName }) => {
  const [songs, setSongs] = useState<Songs[]>([]);
  const [showAll, setShowAll] = useState(false); 
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const filteredSongs = songsArray.filter((song) => song.artist === artistName);
    setSongs(filteredSongs);  
  }, [artistName]);

  const handleShowAllToggle = () => {
    setShowAll(!showAll);  
  };

  return (
    <div className="flex flex-col items-center justify-end w-full">
      <div className="w-full mt-6">
        {songs.length === 0 ? (
          <p className={`${isDarkMode ? "text-white" : "text-black"}`}>
            Nenhuma música encontrada para este artista.
          </p>
        ) : (
          <div className="space-y-6">
            {songs.slice(0, showAll ? songs.length : 5).map((song, index) => (
              <div key={song.id} className="flex items-center space-x-4">
                <span className={`${isDarkMode ? "text-white" : "text-black"} text-lg`}>
                  {index + 1}
                </span>
                <img
                  src={song.image}
                  alt={song.name}
                  className="w-12 h-12 rounded-lg"
                />
                <div className="flex-1 flex justify-between items-center">
                  <div className="flex flex-col">
                    <h4 className={`${isDarkMode ? "text-white" : "text-black"}`}>
                      {song.name}
                    </h4>
                  </div>
                  <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {song.duration}
                  </p>
                </div>
              </div>
            ))}

            <div className="w-full flex justify-start mt-4">
              <button 
                onClick={handleShowAllToggle}
                className={`font-bold text-sm py-2 rounded-lg transition-all hover:underline ${
                  isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-900 hover:text-black"
                }`}
              >
                {showAll ? "Mostrar Menos" : "Ver Mais"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistSongs;
