import React from "react";
import { FaPlay } from "react-icons/fa";

interface ItemCardProps {
  image: string;
  name: string;
  artist?: string;
  description?: string;
  isDarkMode: boolean;
  isRoundImage?: boolean;
}

const ItemCard: React.FC<ItemCardProps> = ({
  image,
  name,
  artist,
  description,
  isDarkMode,
  isRoundImage = false,
}) => {
  return (
    <div
      className={`group relative flex flex-col items-center p-4 rounded-lg 
        transition duration-300 
        ${isDarkMode
          ? "hover:shadow-lg hover:bg-gradient-to-t hover:from-neutral-800 hover:via-neutral-800/10 hover:to-transparent"
          : "hover:shadow-lg hover:bg-gradient-to-t hover:from-neutral-300 hover:via-neutral-300/10 hover:to-transparent"
        }`}
    >
      <div className="relative flex justify-center items-center w-36 h-36">
        <img
          src={image}
          alt={name}
          className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${isRoundImage ? "rounded-full" : "rounded-lg"}`}
        />
        <button className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition duration-300">
          <div className="bg-green-500 p-3 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <FaPlay size={24} className="text-white" />
          </div>
        </button>
      </div>

      <h2 className="text-base font-medium text-left hover:underline mt-2">{name}</h2>
      <p className="text-gray-400 text-sm text-left">
        {description || artist} 
      </p>
    </div>
  );
};

export default ItemCard;
