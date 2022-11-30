import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddInput({ addItem, deleteItem }) {
  let [itemName, setItemName] = useState("");
  let handleChange = (e) => {
    setItemName(e.target.value);
  };
  let handleSumbit = (e) => {
    e.preventDefault();
    if (itemName.trim() === "") {
      setItemName("");
      return;
    }
    addItem({ id: uuidv4(), name: itemName, active: false });
    setItemName("");
  };
  return (
    <div>
      <form action="">
        <input
          type="text"
          name="name"
          id=""
          placeholder="Add Todo"
          value={itemName}
          onChange={handleChange}
        />
      </form>
      <button onClick={handleSumbit}>Add</button>
    </div>
  );
}

export default AddInput;
