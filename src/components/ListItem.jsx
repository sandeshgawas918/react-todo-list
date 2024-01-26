import React, { useContext, useState } from 'react'
import { myContext } from '../context/LocalStorageContext';
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const ListItem = () => {

    const { todo, settodo } = useContext(myContext)

    // const [editable, seteditable] = useState(false)

    let deleteTask = (id) => {
        let updatedTodo = todo.filter((item) => {
            return item.id != id
        })
        settodo(updatedTodo)
    }

    let editTask = (id) => {
        settodo((prev) => (
            prev.map((prevtodo) => (
                prevtodo.id == id ? { ...prevtodo, editCheck: !prevtodo.editCheck } : prevtodo
            ))
        ))
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-6 m-auto">
                    {
                        todo && todo.map((item) => (
                            <div key={item.id} className='p-3 text-dark h5 my-4 rounded-3 fw-semibold text-secondary'
                                style={{ backgroundColor: item.editCheck ? '#9ADE7B' : '#D0A2F7' }} 
                                contentEditable={item.editCheck} >
                                {/* <div contentEditable={item.editCheck}> */}
                                    {item.todoitem}
                                    <MdDeleteOutline onClick={() => { deleteTask(item.id) }} className=' float-end h3 text-danger ' />
                                    <FaRegEdit onClick={() => { editTask(item.id) }} className=' float-end h3 text-primary mx-3' />
                                {/* </div> */}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ListItem