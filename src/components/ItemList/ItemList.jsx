import React from "react";
import AddInput from "../AddInput/AddInput";
import Item from "../Item/Item";
import { useState } from "react";
import { initialItems } from "../../data";

function ItemList({ filter }) {
  const [items, setItems] = useState(initialItems);

  const addItem = (item) => {
    setItems([...items, item]);
    console.log(item);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (item) => {
    setItems(items.map((v) => (v.id === item.id ? item : v)));
  };

  let filterData = getFilterData(filter, items);

  return (
    <section>
      <ul>
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

function getFilterData(filter, items) {
  if (filter === "all") return items;
  else if (filter === "active") return items.filter((i) => !i.active);
  else return items.filter((i) => i.active);
}
