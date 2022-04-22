import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList';


function App() {
    const [theme,setTheme] = useState<string>('light')

    return (
        <div className="App" style={{backgroundColor: theme}}>
            <TodoList ChildTheme={setTheme}/>
        </div>
    )
}

export default App;
