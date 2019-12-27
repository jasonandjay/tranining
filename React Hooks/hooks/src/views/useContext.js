import React, {useContext} from 'react'
import ThemeContext from '../context/themeContext'

export default props=>{
    return <ThemeContext.Provider value={{background: 'pink', foreground: 'green'}}>
        <Parent />
    </ThemeContext.Provider>

    // return <Parent />
}

function Parent(props){
    return <Child/>
}

function Child(props){
    const theme = useContext(ThemeContext);
    console.log('theme...', theme);

    return (
        <button style={{ background: theme.background, color: theme.foreground }}>
          I am styled by theme context!
        </button>
      );
}