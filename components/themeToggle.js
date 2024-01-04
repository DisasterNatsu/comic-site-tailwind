import React, { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const ThemeToggle = ({ classes }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.className = "bg-gradient-to-r from-gray-900 to-gray-950";
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.className = "bg-gradient-to-r from-orange-100 to-orange-50";

      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className={`relative w-16 h-8 flex item-center dark:bg-grey-900 bg-teal-500 cursor-pointer rounded-full p-1 ${classes}`}
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon className="text-white mt-[2px] ml-[2px]" size={18} />
      <div
        className="absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
      <BsSunFill
        className={`ml-[10px] text-yellow-400 mt-[2px] ${
          darkMode ? "" : "hidden"
        }`}
        size={18}
      />
    </div>
  );
};

export default ThemeToggle;
