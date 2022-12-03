import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";
import styles from "./Navbar.module.css";
import { HiMoon, HiSun } from "react-icons/hi";
function Navbar({ filters, filter, onChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <button className={styles.darkButton} onClick={toggleDarkMode}>
        {!darkMode ? <HiMoon></HiMoon> : <HiSun></HiSun>}
      </button>
      <div>
        {filters.map((f, i) => (
          <button
            className={`${styles.filter} ${f === filter && styles.selected}`}
            key={i}
            onClick={() => onChange(i)}
          >
            {f}
          </button>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
