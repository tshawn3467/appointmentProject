import React from "react";

export const ContactPicker = (props) => {
  return (
    <div>
      <select onChange={props.onChange}>
        <option value="default">No Contact Selected</option>
        {props.contacts.map((element) => {
          return <option value={element.name}>{element.name}</option>
        })}
      </select>
    </div>
  );
};
