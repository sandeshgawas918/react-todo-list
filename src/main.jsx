import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LocalStorageContext } from './context/LocalStorageContext.jsx'

const router = createBrowserRouter([
  {
    path: 'react-todo-list',
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocalStorageContext>
      <RouterProvider router={router} />
    </LocalStorageContext>
  </React.StrictMode>,
)
