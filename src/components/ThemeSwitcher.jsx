import React, { useState, useEffect } from "react";

function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="my-4 text-center">
      <h3
        onClick={toggleTheme}
        className=" cursor-pointer text-sm font-medium text-[rgba(17, 21, 23, 1)] dark:text-white"
      >
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </h3>
    </div>
  );
}

export default ThemeSwitcher;
