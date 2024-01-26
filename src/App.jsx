import React, { useContext } from 'react'
import { myContext } from './context/LocalStorageContext'
import Add from './components/Add'
import ListItem from './components/ListItem'

const App = () => {

  const { todo, settodo } = useContext(myContext)
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="h4 text-white text-center mt-4">React Todo App with Local Storage</div>
          <hr className=' text-white mt-4' />
        </div>

        <Add />
        <ListItem />
      </div>
    </>
  )
}

export default App