import React from 'react'

// import {createBrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import DashBoard from './DashBoard'
import NavBar from './NavBar'
import {BrowserRouter , Routes , Route, Router } from "react-router-dom"

function App() {
  
  return (
    <div>
      
      {/* <NavBar></NavBar> */}
     <BrowserRouter>
     <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
     
      </BrowserRouter>
     


    </div>
  )
}

export default App