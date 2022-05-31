import React, { useState } from 'react'
import ClassContextComponent from './ClassContextComponent';
import FunctionContextComponent from './FunctionContextComponent';

export const ThemeContext = React.createContext();

function UseContext() {
    const [darkTheme, setDarkTheme] = useState(true);
    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        <>
            <ThemeContext.Provider value={darkTheme}>
                <FunctionContextComponent />
                <button onClick={toggleTheme}>Toggle Theme</button>
                <ClassContextComponent />
            </ThemeContext.Provider>

        </>
    )
}

export default UseContext