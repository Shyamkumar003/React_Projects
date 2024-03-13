import React from 'react'
import {useTheme}from "./ThemeProvider"

export const Content = () => {
    const {theme, toggleTheme} = useTheme();
  return (
    <>
    <div className={`App ${theme}`}>
        <b>Current theme {theme}</b>
        <button onClick={toggleTheme}> Toggle</button>
    </div>
    </>
  )
}

