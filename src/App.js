import { useState } from "react";
import ItemList from "./components/ItemList/ItemList";
import Navbar from "./components/Navbar/Navbar";

const filters = ["all", "active", "completed"];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  const onChange = (index) => {
    setFilter(filters[index]);
  };
  return (
    <>
      <Navbar filters={filters} filter={filter} onChange={onChange}></Navbar>
      <ItemList filter={filter}></ItemList>
    </>
  );
}

export default App;
