import React, { useContext, useEffect } from 'react'
import { myContext } from '../context/LocalStorageContext'

const Add = () => {

    const { enteredItem, setenteredItem } = useContext(myContext)
    const { todo, settodo } = useContext(myContext)

    // const addTodo = (e) => {
    //     e.preventDefault();
        
    //     let newTodo = {
    //         id: `S_${Math.floor(Math.random() * 100 + 1)}`,
    //         todoitem: enteredItem
    //     };
    
    //     // Use the functional form of setTodo to access the previous state
    //     settodo(prevTodo => {
    //         const updatedTodo = [...prevTodo, newTodo];
    //         localStorage.setItem('todolist', JSON.stringify(updatedTodo));
    //         return updatedTodo;
    //     });
    
    //     setenteredItem('');
    // };
    
    const addTodo=(e)=>{
        e.preventDefault()
        let newTodo={
            id:`S_${Math.floor(Math.random()*1000 + 1)}`,
            todoitem:enteredItem,
            editCheck:false
        }
        todo && settodo([...todo,newTodo])
        setenteredItem('')
    }

    useEffect(()=>{
        localStorage.setItem('todolist',JSON.stringify(todo))
    },[todo])
    
    return (
        <div>
            <div className="row mt-3">
                <div className="col-md-6 m-auto">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="input-group">
                                <input value={enteredItem} onChange={(e) => { setenteredItem(e.target.value) }} type="text" className=' form-control p-2' placeholder='add task here...' />
                                <button onClick={addTodo} className=' btn btn-success px-3 input-group-text'>ADD</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Add