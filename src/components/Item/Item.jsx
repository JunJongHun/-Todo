import React from "react";

function Item({ item }) {
  return (
    <li>
      <input type="checkbox" name="checkbox" id="" />
      <div>{item.name}</div>
    </li>
  );
}

export default Item;
