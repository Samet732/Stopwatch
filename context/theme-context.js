import { createContext, useContext } from "react";

const themes = {
    light: {
        background: '#ffebcc',
        foregorund: '#f2f2f2',
        text: '#0d0d0d',
        primary: '#cc7a00'
    },

    dark: {
        background: '#e6e6ff',
        foregorund: '#1a1a1a',
        text: '#f2f2f2',
        primary: '#000080'
    }
};

const ThemeContext = createContext();

export {
    themes,
    ThemeContext,
    useContext
};