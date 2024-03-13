
import { useContext, useState, createContext } from "react"
  
const ThemeContext = createContext();


export const ThemeProvider = ({children}) => {

    let [theme, setTheme] = useState('light');

    const toggleTheme=()=>{
        setTheme((prevTheme) => prevTheme==='light'?'dark':'light')
    }
  return (
    <div>
        <ThemeProvider value={{theme,toggleTheme}}>
        {children}
        </ThemeProvider>
    </div>
  )
}

//CUSTOM HOOK

export const useTheme =()=> {
    return useContext(ThemeContext);
}