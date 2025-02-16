import React from "react";
import { FaPlay } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

interface ItemCardProps {
  id: number;
  image: string;
  name: string;
  banner?: string;
  duration?: string;
  audio?: string;
  artist?: string;
  description?: string;
  isRoundImage?: boolean;
  idPath: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  id,
  image,
  banner,
  name,
  artist,
  duration,
  audio,
  description,
  isRoundImage = false,
  idPath
}) => {
  const { isDarkMode } = useTheme(); 
  return (
    <Link 
      to={`${idPath}/${id}`}
      state={{ id, image, banner, name, artist, description, audio, duration }}
      className={`group relative flex flex-col items-center p-4 rounded-lg transition duration-300 ${
        isDarkMode
          ? "hover:shadow-lg hover:bg-gradient-to-t hover:from-neutral-800 hover:via-neutral-800/10 hover:to-transparent"
          : "hover:shadow-lg hover:bg-gradient-to-t hover:from-neutral-300 hover:via-neutral-300/10 hover:to-transparent"
      }`}>
        
      <div className="relative flex justify-center items-center w-36 h-36">
        <img src={image} alt={name} className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${isRoundImage ? "rounded-full" : "rounded-lg"}`} />
        <button className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition duration-300">
          <div className="bg-green-500 p-3 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <FaPlay size={24} className="text-white" />
          </div>
        </button>
      </div>
      <h2 className="text-base font-medium text-left hover:underline mt-2">{name}</h2>
      <p className="text-gray-400 text-sm text-left">{description || artist}</p>
    </Link>
  );
};

export default ItemCard;
