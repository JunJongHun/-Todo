import React from "react";
import { act } from "react-dom/test-utils";
import { BsFillTrashFill } from "react-icons/bs";
import styles from "./Item.module.css";
function Item({ item, deleteItem, updateItem }) {
  let { name, active } = item;
  let handleChange = (e) => {
    let active = e.target.checked;
    updateItem({ ...item, active });
  };
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        onChange={handleChange}
        type="checkbox"
        name="checkbox"
        id=""
        checked={active}
      />
      <div className={styles.text}>{name}</div>
      <span className={styles.icon}>
        <button className={styles.button}>
          <BsFillTrashFill
            onClick={() => {
              deleteItem(item.id);
            }}
          ></BsFillTrashFill>
        </button>
      </span>
    </li>
  );
}

export default Item;
