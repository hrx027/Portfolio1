import { createContext, useEffect, useState } from "react"; 
 
export const ThemeContext = createContext(); 
 
export default function ThemeProvider({ children }) { 
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches; 
  const [dark, setDark] = useState(prefersDark); 
 
  useEffect(() => { 
    document.documentElement.classList.toggle("dark", dark); 
  }, [dark]); 
 
  return ( 
    <ThemeContext.Provider value={{ dark, setDark }}> 
      {children} 
    </ThemeContext.Provider> 
  ); 
}