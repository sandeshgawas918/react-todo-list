import React, { useContext, useState } from 'react'
import { myContext } from '../context/LocalStorageContext';
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaRegSave } from "react-icons/fa";

const ListItem = ({ Todo }) => {

    const { todo, settodo } = useContext(myContext)

    const [currentTodoMSg, setcurrentTodoMsg] = useState(Todo.todoitem)

    // const [editable, seteditable] = useState(false)

    let deleteTask = (id) => {
        let updatedTodo = todo.filter((item) => {
            return item.id != id
        })
        settodo(updatedTodo)
    }

    let editTask = (id, e) => {
        settodo((prev) => (
            prev.map((prevtodo) => (
                prevtodo.id == id ? { ...prevtodo, editCheck: !prevtodo.editCheck } : prevtodo
            ))
        ))
    }

    let saveTask = (id) => {
        settodo((prev) => (
            prev.map((prevtodo) => (
                prevtodo.id == id ? { ...prevtodo, editCheck: !prevtodo.editCheck, todoitem: currentTodoMSg } : prevtodo
            ))
        ))
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-6 m-auto">
                    {/* <pre className='text-white'>{JSON.stringify(currentTodoMSg)}</pre> */}
                    <div className='d-flex flex-row p-3 text-dark h5 my-4 rounded-3 fw-semibold text-secondary'
                        style={{ backgroundColor: Todo.editCheck ? '#9ADE7B' : '#D0A2F7' }}
                    >
                        <input className={` w-75 ${Todo.editCheck ? 'border-1 rounded-1 border-success p-1' : 'border-0'}`}
                            // contentEditable={Todo.editCheck}
                            readOnly={!Todo.editCheck}
                            value={currentTodoMSg}
                            onChange={(e)=>{setcurrentTodoMsg(e.target.value)}}
                            style={{ backgroundColor: Todo.editCheck ? '#9ADE7B' : '#D0A2F7' }}
                        // onInput={(e)=>{setcurrentTodoMsg(e.target.textContent || '')}}
                        >
                            {/* {Todo.todoitem} */}
                            {/* <MdDeleteOutline onClick={() => { deleteTask(Todo.id) }} className=' float-end h3 text-danger ' />
                        {
                            Todo.editCheck ? (<FaRegSave onClick={()=>{saveTask(Todo.id)}} className=' float-end h3 text-secondary mx-3' /> ): (<FaRegEdit onClick={()=>{editTask(Todo.id)}} className=' float-end h3 text-primary mx-3' />)
                        } */}
                        </input>
                        {
                            Todo.editCheck ? (<FaRegSave onClick={() => { saveTask(Todo.id) }} className=' h3 text-secondary ms-auto mx-3' />) : (<FaRegEdit onClick={() => { editTask(Todo.id) }} className='h3 text-primary ms-auto mx-3' />)
                        }
                        <MdDeleteOutline onClick={() => { deleteTask(Todo.id) }} className='h3 text-danger' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListItem