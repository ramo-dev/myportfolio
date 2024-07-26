import { createContext, useEffect, useState, ReactNode } from "react";


interface ThemeContextType {
  theme: boolean,
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const defaultContextValue: ThemeContextType = {
  theme: false,
  toggleTheme: () => { },
};

export const ThemeContext = createContext<ThemeContextType>(defaultContextValue);


