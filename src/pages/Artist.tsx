import React from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaCheckCircle, FaPlay } from "react-icons/fa";
import ArtistSongs from "../components/ArtistSongs";

const Artist: React.FC = () => {
  const { isDarkMode } = useTheme();
  const location = useLocation();
  const artist = location.state;

  if (!artist) {
    return (
      <h2 className="text-center text-red-500">Artista não encontrado!</h2>
    );
  }

  return (
    <div
      className={`flex flex-col items-center overflow-hidden mx-3 md:mx-8 lg:mx-16 xl:mx-32 first:rounded-t-lg last:rounded-b-lg
        ${
          isDarkMode ? "text-white bg-neutral-900" : "text-black bg-neutral-200"
        }`}
    >
      <div className="relative w-full group">
        <img
          src={artist.banner}
          alt={artist.name}
          className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute gap-2 bottom-4 left-4 right-4 md:left-8 md:right-8 lg:left-16 lg:right-16 flex flex-col">
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-blue-500 text-lg md:text-xl lg:text-2xl" />
            <p className="text-sm md:text-base lg:text-lg text-gray-300">
              Artista verificado
            </p>
          </div>
          <h2 className="text-white text-3xl font-extrabold sm:text-4xl md:text-6xl lg:text-8xl break-words leading-none gap-4">
            {artist.name}
          </h2>
          <p className="text-gray-300 text-sm md:text-base lg:text-lg">
            16.040.119 ouvintes mensais
          </p>
        </div>
      </div>

      <div className="w-full flex gap-6 mt-4 px-4">
        <button className="bg-green-500 px-5 py-5 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <FaPlay
            size={16}
            className={`${isDarkMode ? "text-black" : "text-white"}`}
          />
        </button>
        <button className="bg-transparent font-bold px-7 rounded-3xl border-2 border-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          Seguir
        </button>
      </div>

      <div className="w-full flex flex-col mt-6 px-4">
        <h2 className="text-2xl font-semibold text-white">Populares</h2>

        <div className="flex-1 mt-1 px-6">
          <ArtistSongs artistName={artist.name} />
        </div>
      </div>
    </div>
  );
};

export default Artist;
