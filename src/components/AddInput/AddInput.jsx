import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddInput.module.css";

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
    <>
      <form className={styles.form} action="">
        <input
          className={styles.input}
          type="text"
          name="name"
          id=""
          placeholder="Add Todo"
          value={itemName}
          onChange={handleChange}
        />
        <button className={styles.button} onClick={handleSumbit}>
          Add
        </button>
      </form>
    </>
  );
}

export default AddInput;
