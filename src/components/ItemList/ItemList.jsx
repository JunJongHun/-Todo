import React from "react";
import AddInput from "../AddInput/AddInput";
import Item from "../Item/Item";
import { useRef, useState } from "react";
import { initialItems } from "../../data";

function ItemList() {
  const [items, setItems] = useState(initialItems);

  const nextId = useRef(3);

  const addItem = (item) => {
    setItems([...items, { name: item, active: false, id: nextId.current }]);
    nextId.current += 1;
  };
  return (
    <section>
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id}></Item>
        ))}
      </ul>
      <AddInput addItem={addItem}></AddInput>
    </section>
  );
}

export default ItemList;
