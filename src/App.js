import { useState } from "react";
import ItemList from "./components/ItemList/ItemList";
import Navbar from "./components/Navbar/Navbar";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  const onChange = (index) => {
    setFilter(filters[index]);
  };
  return (
    <DarkModeProvider>
      <Navbar filters={filters} filter={filter} onChange={onChange}></Navbar>
      <ItemList filter={filter}></ItemList>
    </DarkModeProvider>
  );
}

export default App;
