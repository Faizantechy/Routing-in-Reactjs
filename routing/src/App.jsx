import React from 'react'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Home'
import About from './About'
import DashBoard from './DashBoard'
import NavBar from './NavBar'

function App() {

  const router = createBrowserRouter([{
    path:'/', element:<Home/>
  }],
  {
    path:'/about', element:<About/>
    },
  
    {
      path:'/dashboard', element:<DashBoard/>
    }
    

  )
  return (
    <div>

      
      <RouterProvider router={router} />
      
      <NavBar/>


    </div>
  )
}

export default App