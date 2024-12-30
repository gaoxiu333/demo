import { createContext, useContext, useState } from "react";

const ThemeContext = createContext('light');

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>当前主题：{theme}</p>
      <button onClick={toggleTheme}>切换主题</button>
    </div>
  );
};

export { ThemeContext, ThemeSwitcher, ThemeProvider };
