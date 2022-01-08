import React from "react"
const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
    const [theme, setTheme] = React.useState("dark")
    
    function toggleTheme() {
        setTheme(prevTheme => {
            return prevTheme === "light" ? "dark" : "light"
        })
    }
    
    return (
        <ThemeContext.Provider value={{theme: theme, toggleTheme: toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}
