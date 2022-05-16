import {createContext} from 'react';

export const colors = {
    white: '#f5f5f5',
    black: '#0a0a0a',
    primary: '#2962ff'
}

export const themes = {
    light: {
        background: colors.white,
        foreground: colors.black
    },
    dark: {
        background: colors.black,
        foreground: colors.white
    }
}

export const ThemeContext = createContext({
    theme: themes.light,
    setTheme: () => {
    },
    toggleTheme: () => {
    }
});
