import React from "react";
import { artistArray } from "../server/artists";
import ItemList from "../components/ItemList";

const Artists = () => {
  return (
    <div>
      <ItemList items={artistArray} maxItemsToShow={artistArray.length} path="/artist" idPath="/artists" />
    </div>
  );
};

export default Artists;
