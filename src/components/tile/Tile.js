import React from "react";

export const Tile = (props) => {

  const objectToRender = Object.values(props.object);

  return (
    <div className="tile-container">
      {objectToRender.map((element, index) => {
        if (index===0) {
          return <p key={index} className="tile-title">{element}</p>
        }
        return <p key={index} className="tile">{element}</p>
      })}    
    </div>
  );
};
