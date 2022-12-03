import React, { useEffect } from "react";
import AddInput from "../AddInput/AddInput";
import Item from "../Item/Item";
import { useState } from "react";
import { initialItems } from "../../data";
import styles from "./ItemList.module.css";

function ItemList({ filter }) {
  const [items, setItems] = useState(() => readTodosFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (item) => {
    setItems(items.map((v) => (v.id === item.id ? item : v)));
  };

  let filterData = getFilterData(filter, items);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filterData.map((item) => (
          <Item
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            updateItem={updateItem}
          ></Item>
        ))}
      </ul>
      <AddInput addItem={addItem}></AddInput>
    </section>
  );
}

export default ItemList;

function readTodosFromLocalStorage() {
  console.log("readtodo함수 실행..");
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

function getFilterData(filter, items) {
  if (filter === "all") return items;
  else if (filter === "active") return items.filter((i) => !i.active);
  else return items.filter((i) => i.active);
}
