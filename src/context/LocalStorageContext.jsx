import { createContext, useState } from "react";

const myContext = createContext()

const LocalStorageContext = ({ children }) => {

    let storedTodo=localStorage.getItem('todolist')

    let todos = storedTodo ? JSON.parse(storedTodo) : []

    // let todos=[{
    //     id:`S_${Math.floor(Math.random()*1000 + 1)}`,
    //     todoitem:'enteredItem',
    //     editCheck:false,
    //     completed:false
    // }]

    const [todo, settodo] = useState(todos)
    const [enteredItem, setenteredItem] = useState('')

    return (
        <myContext.Provider value={{ todo,settodo,enteredItem,setenteredItem }}>
            {children}
        </myContext.Provider>
    )
}

export { myContext, LocalStorageContext }