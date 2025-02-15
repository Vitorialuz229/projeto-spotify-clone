import React, { useState } from "react";
import ItemCard from "./ItemCard";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

interface ItemListProps {
  items: Array<{
    id: number;
    image: string;
    banner?: string;
    name: string;
    description: string;
    isRoundImage?: boolean;
  }>;
  maxItemsToShow: number;
  path: string;
}

const ItemList: React.FC<ItemListProps> = ({ items, maxItemsToShow, path }) => {
  const [showAll, setShowAll] = useState(false);
  const { isDarkMode } = useTheme(); 

  const handleShowAllClick = () => {
    setShowAll(true);
  };

  return (
    <div
      className={`flex mx-3 px-4 pt-8 pb-5 flex-col relative 
         first:rounded-t-lg last:rounded-b-lg
        ${isDarkMode ? "text-white bg-neutral-900" : "text-black bg-neutral-200"}`}
    >
      <h1 className="text-xl font-bold hover:underline">Artistas Populares</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items.slice(0, showAll ? items.length : maxItemsToShow).map((currObj) => (
           <ItemCard
           key={currObj.id}
             {...currObj}
             idPath={`${path}`}
           />
         ))}
      </div>

      {!showAll && (
        <div className="absolute top-5 right-6">
          <Link
            to={path}
            onClick={handleShowAllClick}
            className={`font-bold text-sm hover:underline ${
              isDarkMode ? "text-gray-400" : "text-gray-900"
            }`}
          >
            Mostrar tudo
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemList;