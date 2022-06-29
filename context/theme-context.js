import { createContext, useContext } from "react";

const themes = {
  light: {
    name: 'light',
    background: '#f2f2f2',
    foreground: '#ffebcc',
    text: '#0d0d0d',
    primary: '#cc7a00'
  },

  dark: {
    name: 'dark',
    background: '#1a1a1a',
    foreground: '#e6e6ff',
    text: '#f2f2f2',
    primary: '#0000ff'
  }
};

const ThemeContext = createContext();

export {
  themes,
  ThemeContext,
  useContext
};