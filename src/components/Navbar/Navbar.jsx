import React from "react";

function Navbar({ filters, filter, onChange }) {
  return (
    <div>
      {filters.map((f, i) => (
        <button key={i} onClick={() => onChange(i)}>
          {f}
        </button>
      ))}
    </div>
  );
}

export default Navbar;
