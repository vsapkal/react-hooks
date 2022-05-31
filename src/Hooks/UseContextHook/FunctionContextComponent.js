import React, { useContext } from 'react';
import { ThemeContext } from './UseContext';

const FunctionContextComponent = () => {
    const darkTheme = useContext(ThemeContext)
    const themeStyle = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem',
        height: '15rem',
        width: '18rem'
    }
    return (
        <div style={themeStyle}>Function Theme</div>
    )

}

export default FunctionContextComponent;