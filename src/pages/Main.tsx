import React from "react";
import ItemList from "./components/ItemList";
import SingleItem from "./components/SingleItem";
import { artistArray } from "../server/artists";
import { songsArray } from "../server/songs";

interface MainProps {
  isDarkMode: boolean;
}

const Main: React.FC<MainProps> = ({ isDarkMode }) => {
  return (
    <div className="first:rounded-t-lg last:rounded-b-lg">
      <ItemList 
        isDarkMode={isDarkMode} 
        items={artistArray} 
        maxItemsToShow={6} 
      />
      <SingleItem isDarkMode={isDarkMode} 
      items={songsArray} 
      maxItemsToShow={12}
      />
    </div>
  );
};

export default Main;
