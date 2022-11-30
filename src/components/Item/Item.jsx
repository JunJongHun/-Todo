import React from "react";
import { act } from "react-dom/test-utils";
import { BsFillTrashFill } from "react-icons/bs";
function Item({ item, deleteItem, updateItem }) {
  let { name, active } = item;
  let handleChange = (e) => {
    let active = e.target.checked;
    updateItem({ ...item, active });
  };
  return (
    <li>
      <input
        onChange={handleChange}
        type="checkbox"
        name="checkbox"
        id=""
        checked={active}
      />
      <div>{name}</div>
      <BsFillTrashFill
        onClick={() => {
          deleteItem(item.id);
        }}
      ></BsFillTrashFill>
    </li>
  );
}

export default Item;
