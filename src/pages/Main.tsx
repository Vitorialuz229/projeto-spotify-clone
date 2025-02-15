import React from "react";
import ItemList from "../components/ItemList";
import SingleItem from "../components/SingleItem";
import { artistArray } from "../server/artists";
import { songsArray } from "../server/songs";
 
const Main: React.FC = () => {
  return (
    <div className="first:rounded-t-lg last:rounded-b-lg">
      <ItemList 
        items={artistArray} 
        maxItemsToShow={6} 
        path="/artist"
      />
      <SingleItem 
      items={songsArray} 
      maxItemsToShow={12}
      path="/song"
      />
    </div>
  );
};

export default Main;
