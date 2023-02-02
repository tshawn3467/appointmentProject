import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = (props) => {
  return (
    <div>
      {props.listOfStuff.map((element) => {
        return <Tile object={element} />
      })}
    </div>
  );
};
