import React, { useState } from "react";

function AddInput({ addItem }) {
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
    addItem(itemName);
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
