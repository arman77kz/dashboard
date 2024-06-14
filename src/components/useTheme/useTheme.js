
import { useState, useContext, createContext } from 'react';


const themes = {
  light: {
    colors: {
      background: '#ffffff',
      text: '#000000',
      primary: '#fff',
      secondary: '#fff',
    },
    spacing: (factor) => factor * 8,
  },
  dark: {
    colors: {
      background: '#000000',
      text: '#ffffff',
      primary: '#fff',
      secondary: '#fff',
    },
    spacing: (factor) => factor * 8,
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === themes.light ? themes.dark : themes.light));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
